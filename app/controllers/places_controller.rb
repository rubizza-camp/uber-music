class PlacesController < ApplicationController
  before_action :set_place, only: %i[show update destroy]

  def index
    @places = Place.all
    render json: @places
  end

  def show
    render json: @place
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
    @place = Place.find(place_params[:id])
  end

  def place_params
    params.require(:place).permit(:id, :name, :latitude, :longitude,
                                  :address, :description, :rules)
  end
end
