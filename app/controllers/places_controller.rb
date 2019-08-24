class PlacesController < ApplicationController
  authorize_resource
  before_action :set_place, only: %i[show update destroy]

  def index
    @places = serialize_recourse(Place.all)
  end

  def show
    @place = serialize_recourse(
      @place, include:
              [
                'events.images.**',
                'images.*'
              ]
    )
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
    params.require(:place).permit(:name, :latitude, :longitude,
                                  :address, :description, :rules)
  end
end
