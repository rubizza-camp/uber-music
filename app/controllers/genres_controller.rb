class GenresController < ApplicationController
  before_action :set_genre, only: %i[show update destroy]

  def index
    @genres = Genre.all
    render json: @genres
  end

  def show
    render json: @genre
  end

  def create
    @genre = Genre.new(genre_params)
    if @genre.save
      render json: @genre, status: :created
    else
      render json: @genre.errors, status: :unprocessable_entity
    end
  end

  def update
    if @genre.update(genre_params)
      render json: @genre, status: :ok
    else
      render json: @genre.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @genre.destroy
    head :no_content
  end

  private

  def set_genre
    @genre = User.find(params[:id])
  end

  def genre_params
    params.require(:genre).permit(:name, :description)
  end
end
