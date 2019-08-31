# rubocop:disable all
ActiveAdmin.register User do
  config.per_page = 10
  form partial: 'form'

  controller do
    def update
      if params[:user][:image].nil? != true
        if User.find(params[:id]).image.nil? != true 
          User.find(params[:id]).image.delete
        end
        ImageService.add_image(User.find(params[:id]).id, "User", params[:user][:image])
      end
      redirect_to admin_user_path(), id: params[:id]
    end
  end

  member_action :make_moderator, method: :patch do
    User.find(params[:id]).update(type: 'Moderator')
    flash[:notice] = 'User successfully has become Moderator'
    redirect_to admin_user_path(), id: params[:id]
  end

  member_action :ban, method: :patch do
    User.find(params[:id]).update(type: '')
    flash[:notice] = 'User successfully banned'
    redirect_to admin_user_path(), id: params[:id]
  end

  member_action :make_user, method: :patch do
    User.find(params[:id]).update(type: 'User')
    flash[:notice] = 'User successfully has become a User'
    redirect_to admin_user_path(), id: params[:id]
  end

  action_item :make_moderator, only: :show do
    if user.type != 'Moderator'
      link_to 'Make moderator', make_moderator_admin_user_path(user), method: :patch
    else
      link_to 'Make User', make_user_admin_user_path(user), method: :patch
    end
  end

  action_item :ban, only: :show do
    if user.type == 'User'
      link_to 'Ban', ban_admin_user_path(user), method: :patch
    end
  end

  action_item :unban, only: :show do
    if user.type == ''
      link_to 'Unban', make_user_admin_user_path(user), method: :patch  
    end
  end

  permit_params :first_name, :second_name, :nickname, :email, :full_name, :password,
                musician_skill_user_ids: [],
                musician_skills: [],
                organization_ids: [],
                musician_skill_users_attributes: %i[status id user_id misician_skill_id],
                genre_ids: []

  remove_filter :user_genres, :musician_skill_users, :pending_musician_skill_users,
                :disabled_musician_skill_users, :approved_musician_skill_users,
                :user_organizations

  index do
    selectable_column
    id_column
    column :first_name
    column :second_name
    column :nickname
    column :full_name
    column :email
    column :type
    column :musician_skills
    column :organizations
    column :genres
    actions
  end

  show do
    attributes_table do
      row :first_name
      row :second_name
      row :nickname
      row :full_name
      row :email
      row :type
      row :pending_musician_skills
      row :disabled_musician_skills
      row :approved_musician_skills
      row :organizations
      row :genres
    end
  end

  form do |f|
    f.inputs 'Edit User' do
      f.input :first_name
      f.input :second_name
      f.input :nickname
      f.input :email
      f.input :organizations, as: :check_boxes
      f.input :genres, as: :check_boxes
      f.input :image, as: :file
    end
    f.inputs 'Musician skills' do
      f.has_many :musician_skill_users, new_record: false do |e|
        e.input :musician_skill, type: :string, input_html: { disabled: true }
        e.input :status, as: :radio
      end
    end
    f.actions
  end
end
