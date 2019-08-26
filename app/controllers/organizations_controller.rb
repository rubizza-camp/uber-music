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
    @organization = Organization.new(name: organization_params[:name],
                                     description: organization_params[:description])
    @organization.users << current_user
    if @organization.save!
      set_image(@organization.id, 'Organization', organization_params)
      flash[:notice] = 'Организация успешно создана!'
      redirect_to action: :show, id: @organization.id
    else
      flash[:alert] = 'Упс, что-то пошло не так, попробуйте позже.'
      redirect_to action: :new
    end
  end

  def edit
    @users = User.all
  end

  def update
    if organization_params[:image]
      ImageService.add_image(organization_params[:id],
                             'Organization',
                             organization_params[:image])
    end
    update_users(organization_params)
    if update_basic_attribute(organization_params)
      flash[:notice] = 'Организация успешно обновлена!'
    else
      flash[:alert] = 'Упс, что-то пошло не так, попробуйте позже.'
    end
    redirect_to action: :show, id: @organization.id
  end

  def destroy
    if @organization.destroy
      head :no_content
    else
      render json: @organization.errors, status: :unprocessable_entity
    end
  end

  private

  def set_image(id, type, organization_params)
    if organization_params[:image]
      ImageService.add_image(id, type, organization_params[:image])
    else
      ImageService.add_image(@organization.id, type,
                             File.open('app/assets/images/default_organization.jpg'))
    end
  end

  def update_basic_attribute(organization_params)
    @organization.update!(name: organization_params[:name],
                          description: organization_params[:description])
  end

  def update_users(organization_params)
    @organization.users.clear if organization_params[:users] != ''
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
