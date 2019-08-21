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

  def update
  end

  def destroy
    if @user.destroy
      head :no_content
    else
      render json: @user.errors, status: :unprocessable_entity
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
