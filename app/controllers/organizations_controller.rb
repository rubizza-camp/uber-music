class OrganizationsController < ApplicationController
  authorize_resource
  before_action :set_organization, only: %i[show update destroy]

  def index
    @organizations = ActiveModel::SerializableResource.new(Organization.all).serializable_hash
  end

  def show
    @organization = ActiveModel::SerializableResource.new(
      Organization.find(params[:id]), include:
                                      [
                                        'approved_events.images.**',
                                        'users.image.*',
                                        'images.*'
                                      ]
    ).serializable_hash
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
    @organization = Organization.find(params[:id])
  end

  def organization_params
    params.require(:organization).permit(:name, :description)
  end
end
