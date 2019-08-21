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
    @current_password = false
    @confirm_password = false
    user = params[:user]
    if user[:password] != user[:confirm_password]
      @confirm_password = true
      flash[:alert] = 'confirm_password'
      redirect_to action: :edit, id: current_user.id
    else
      Image.create(imageable_id: current_user.id, imageable_type: "User", url: user[:image]) if user[:image]
      current_user.update(
          first_name: user[:first_name],
          second_name: user[:second_name],
          nickname: user[:nickname])

      user[:genres].each { |item| current_user.genres << Genre.find[item] } if user[:genres]
      user[:musician_skill].each { |item| current_user.musician_skill << MusicianSkill.find[item] } if user[:musician_skill]
      redirect_to action: :show, id: current_user.id
    end
  end


  private

  def user_params
    params.require(:user).permit(:nickname, :first_name, :second_name,
                                 :type, :email, :password)
  end

  def set_user
    @user = User.find(params[:id])
  end
end

