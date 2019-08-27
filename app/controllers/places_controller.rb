class PlacesController < ApplicationController
  authorize_resource
  before_action :set_place, only: %i[show update destroy]

  FIRST_EVENTS_SIZE = 3

  def index
    @places = serialize_recourse(Place.all)
  end

  def show
    @events = serialize_recourse(today_events_for_current_place.first(FIRST_EVENTS_SIZE))
    @place = serialize_recourse(@place)
  end

  def create
    @place = Place.new(place_params)
    if @place.save!
      render json: @place, status: :created
    else
      render json: @place.errors, status: :unprocessable_entity
    end
  end

  def update
    if @place.update!(place_params)
      render json: @place, status: :ok
    else
      render json: @place.errors, status: :unprocessable_entity
    end
  end

  def destroy
    if @place.destroy
      head :no_content
    else
      render json: @place.errors, status: :unprocessable_entity
    end
  end

  private

  def set_place
    @place = Place.find(params[:id])
  end

  def place_params
    params.require(:place).permit(:id, :name, :latitude, :longitude,
                                  :address, :description, :rules)
  end

  def today_events_for_current_place
    @place.events.where(start_time: Date.today..(Date.today + 24.hour))
  end
end
