class OrganizationsController < ApplicationController
  authorize_resource
  before_action :set_organization, only: %i[show update destroy edit]

  def index
    @organizations = serialize_recourse(Organization.all)
  end

  def show
    @organization = serialize_recourse(
      @organization, include:
                      [
                        'approved_events.images.**',
                        'users.image.*',
                        'images.*'
                      ]
    )
  end

  def create
    @organization = Organization.new(organization_params)
    if @organization.save!
      render json: @organization, status: :created
    else
      render json: @organization.errors, status: :unprocessable_entity
    end
  end

  def edit
    @organization
    @events = Event.all
  end

  def update
    set_image(organization_params) if organization_params[:image]
    if update_basic_attribute(organization_params)
      redirect_to action: :show, id: @organization.id
    else
      flash[:alert] = 'Oops, something went wrong, please try again later.'
      redirect_to action: :show, id: @organization.id
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

  def update_basic_attribute(organization_params)
    @organization.update!(name: organization_params[:name],
                          description: organization_params[:description])
  end

  def set_image(organization_params)
    Image.create(imageable_id: organization_params[:id], imageable_type: 'Organization',
                 url: organization_params[:image])
  end

  def set_organization
    @organization = Organization.find(params[:id])
  end

  def organization_params
    params.require(:organization).permit(:name, :description, :id, :image)
  end
end
