module Api
  class EventsController < ApplicationController
    def index
      @events = Event.all
      render json: @events
    end

    def show
      @event = Event.find(params[:id])
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
      @event = Event.find(params[:id])
      if @event.update(events_params)
        render json: @event, status: :ok
      else
        render json: @event.errors, status: :unprocessable_entity
      end
    end

    def destroy
      @event = Event.find(params[:id])
      @event.destroy
      head :no_content
    end

    private

    def events_params
      params.require(:events).permit(:id, :description, :name, :start_time, :end_time)
    end
  end
end
