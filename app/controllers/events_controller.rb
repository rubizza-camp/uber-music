class EventsController < ApplicationController
  authorize_resource
  before_action :set_event, only: %i[edit show update destroy]

  def index
    @events = serialize_recourse(Event.all)
  end

  def show
    @event = serialize_recourse(@event)
  end

  def new
    @event = Event.new
    @organizations = current_user.organizations
    @places = Place.all
  end

  def create
    @event = Event.new(name: events_params[:name],
                       description: events_params[:description],
                       start_time: events_params[:start_time],
                       end_time: events_params[:end_time])
    update_place(events_params)
    update_organizations(events_params)
    if EventService.check_params(events_params)
      if @event.save!
        set_image(@event.id, 'Event', params[:event][:image])
        flash[:notice] = 'Событие успешно создано!'
        redirect_to action: :show, id: @event.id
      else
        flash[:alert] = 'Что-то пошло не так, попробуйте еще раз.'
        redirect_to action: :new
      end
    else
      flash[:alert] = 'Событие не созданою У вас более 2 часов выступлений в этот день.'
      redirect_to action: :new
    end
  end

  def select_place
    place = Place.includes(:events).find(events_params[:place_id])
    render json: { events: place.events }
  end

  def edit
    @organizations = current_user.organizations
    @places = Place.all
  end

  def update
    if params[:event][:image]
      ImageService.add_images(events_params[:id],
                              'Event',
                              params[:event][:image])
    end
    EventDeleteImagesService.delete_images(events_params[:delete_img],
                                           @event.id)
    if update_basic_attribute(events_params)
      flash[:notice] = 'Мероприятие обновлено!'
    else
      flash[:alert] = 'Что-то пошло не так'
    end
    redirect_to action: :show, id: @event.id
  end

  def destroy
    @event.destroy
    render 'index'
  end

  private

  def update_basic_attribute(events_params)
    @event.update!(name: events_params[:name],
                   description: events_params[:description])
  end

  def update_place(events_params)
    @event.update!(place_id: events_params[:place_id])
  end

  def update_organizations(events_params)
    @event.approved_organizations.clear if events_params[:organizations] != ''
    events_params[:organizations].split(',').each do |item|
      @event.approved_organizations << Organization.find(item)
    end
  end

  def set_image(id, type, events_params)
    ImageService.add_images(id, type, params[:event][:image]) if events_params
  end

  def set_event
    @event = Event.find(params[:id])
  end

  def events_params
    params.require(:event).permit(:description, :name, :start_time, :end_time,
                                  :id, :image, :organizations, :place_id, :delete_img)
  end
end
