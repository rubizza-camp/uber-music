module Api
  class EventsController < ApplicationController
    before_action :set_event, only: %i[show update destroy]

    def index
      @events = Event.all
      render json: @events
    end

    def show
      render json: @event
    end

    def create
      @event = Event.new(events_params)
      if @event.save
        render json: @event, status: :created
      else
        render json: @event.errors, status: :unprocessable_entity
      end
    end

    def update
      if @event.update(events_params)
        render json: @event, status: :ok
      else
        render json: @event.errors, status: :unprocessable_entity
      end
    end

    def destroy
      @event.destroy
      head :no_content
    end

    private

    def set_event
      @event = Event.find(params[:id])
    end

    def events_params
      params.require(:events).permit(:id, :description, :name, :start_time, :end_time)
    end
  end
end
