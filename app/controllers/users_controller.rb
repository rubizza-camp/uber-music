class UsersController < ApplicationController
  authorize_resource
  before_action :set_user, only: %i[show update destroy]

  def index
    @users = serialize_recourse(User.all)
  end

  def show
    @user = serialize_recourse(
      @user, include:
              [
                'organizations.images.**',
                'approved_musician_skills.*',
                'pending_musician_skills.*',
                'image.*'
              ]
    )
  end

  def create
    @user = User.new(user_params)
    if @user.save!
      render json: @user, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def edit
    @genres = Genre.all
    @musician_skill = MusicianSkill.all
    @user = current_user
    @id = current_user.id
    @image = current_user.image
  end

  def update
    user = params[:user]
    if user[:password] != user[:confirm_password]
      flash[:alert] = 'confirm_password'
      redirect_to action: :edit, id: current_user.id
    else
      update_fields(user)
      redirect_to action: :show, id: current_user.id
    end
  end

  private

  def update_fields(user)
    create_photo(user) if user[:image]
    update_user(user)
    update_genres(user)
    update_musician_skills(user)
  end

  def update_genres(user)
    user[:genres].split(',').each do |item|
      current_user.genres << Genre.find(item)
    end
  end

  def update_musician_skills(user)
    user[:musician_skills].split(',').each do |item|
      current_user.musician_skills << MusicianSkill.find(item.to_i)
    end
  end

  def update_user(user)
    current_user.update(
      first_name: user[:first_name],
      second_name: user[:second_name],
      nickname: user[:nickname]
    )
  end

  def create_photo(user)
    current_user.image.destroy
    Image.create(imageable_id: current_user.id,
                 imageable_type: 'User',
                 url: user[:image])
  end

  def user_params
    params.require(:user).permit(:nickname, :first_name, :second_name,
                                 :type, :email, :password)
  end

  def set_user
    @user = User.find(params[:id])
  end
end
