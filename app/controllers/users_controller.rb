class UsersController < ApplicationController
  authorize_resource
  before_action :set_user, only: %i[show update destroy]

  def index
    @users = User.all.order('created_at DESC').as_json
  end

  def show
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
    p '123456789'
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
    @user = User.find(params[:id]).as_json
  end
end
