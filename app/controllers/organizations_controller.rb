class OrganizationsController < ApplicationController
  before_action :set_organization, only: %i[show update destroy]

  def index
    @organizations = Organization.all
    render json: @organizations
  end

  def show
    render json: @organization
  end

  def create
    @organization = Organization.new(organization_params)
    if @organization.save!
      render json: @organization, status: :created
    else
      render json: @organization.errors, status: :unprocessable_entity
    end
  end

  def update
    if @organization.update!(organization_params)
      render json: @organization, status: :ok
    else
      render json: @organization.errors, status: :unprocessable_entity
    end
  end

  def destroy
    if @organization.destroy
      head :no_content
    else
      render json: @organization.errors, status: :unprocessable_entity
    end
  end

  private

  def set_organization
    @organization = Organization.find(organization_params[:id])
  end

  def organization_params
    params.require(:organization).permit(:id, :name, :description)
  end
end
