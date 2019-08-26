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

  def new
    @organization = Organization.new
  end

  def create
    binding.pry
    @organization = Organization.new(name: organization_params[:name],
                                     description: organization_params[:description])
    @organization.users << current_user
    if @organization.save!
      binding.pry
      organization_params[:image] ?
        ImageService.add_image(@organization.id, 'Organization', organization_params[:image]) :
        ImageService.add_image(@organization.id,'Organization',
                               File.open('app/assets/images/default_organization.jpg'))
      flash[:notice] = 'Organization successfull create!'
      redirect_to action: :show, id: @organization.id
    else
      flash[:alert] = 'Oops, something went wrong, please try again later.'
      redirect_to action: :new
    end
  end

  def edit
    @organization
    @users = User.all
  end

  def update
    ImageService.add_image(organization_params[:id],
                          'Organization',
                          organization_params[:image]) if organization_params[:image]
    update_users(organization_params)
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

  def update_users(organization_params)
    @organization.users.clear
    organization_params[:users].split(',').each do |id|
      @organization.users << User.find(id)
    end
  end

  def set_organization
    @organization = Organization.find(params[:id])
  end

  def organization_params
    params.require(:organization).permit(:name, :description, :id, :image, :users)
  end
end
