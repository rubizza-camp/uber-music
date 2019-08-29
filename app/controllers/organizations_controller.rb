class OrganizationsController < ApplicationController
  authorize_resource
  before_action :set_organization, only: %i[show update destroy edit confirm leave]

  FIRST_EVENTS_SIZE = 3

  def index
    @organizations = serialize_recourse(Organization.all)
  end

  def show
    @approved_events = serialize_recourse(
      today_events_for_current_organization.first(FIRST_EVENTS_SIZE)
    )
    @organization = serialize_recourse(@organization)
  end

  def confirm
    @organization.users << User.find(params[:user_id])
    redirect_to action: :show, id: @organization.id
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
    @users = User.where.not(id: @organization.users.pluck(:id))
    @members = @organization.users
  end

  def update
    if params[:organization][:image]
      ImageService.add_images(organization_params[:id],
                              'Organization',
                              params[:organization][:image])
    end
    OrganizationDeleteImagesService.delete_images(organization_params[:delete_img],
                                                  @organization.id)
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

  def leave
    OrganizationDeleteUsers.delete_user(@organization.id, current_user.id)
    flash[:notice] = 'Вы успешно покинули организацию!'
    redirect_to action: :show, id: @organization.id
  end

  private

  def set_image(id, type, organization_params)
    if organization_params
      ImageService.add_images(id, type, params[:organization][:image])
    end
  end

  def update_basic_attribute(organization_params)
    @organization.update!(name: organization_params[:name],
                          description: organization_params[:description])
  end

  def update_users(organization_params)
    OrganizationInviteUsers.invite_users(@organization.id, organization_params[:new_users])
  end

  def set_organization
    @organization = Organization.find(params[:id])
  end

  def organization_params
    params.require(:organization).permit(:name, :description, :id, :image, :users, :delete_img,
                                         :new_users)
  end

  def today_events_for_current_organization
    @organization.approved_events.where(start_time: Date.today..(Date.today + 2))
  end
end
