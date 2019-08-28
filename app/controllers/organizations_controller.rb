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
      set_image(@organization.id, 'Organization', params[:organization][:image])
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
    if params[:organization][:image]
      ImageService.add_images(organization_params[:id],
                              'Organization',
                              params[:organization][:image])
    end
    OrganizationDeleteImagesService.delete_images(organization_params[:delete_img], @organization.id)
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
    if organization_params
      ImageService.add_images(id, type, params[:organization][:image])
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
    params.require(:organization).permit(:name, :description, :id, :image, :users, :delete_img)
  end
end
