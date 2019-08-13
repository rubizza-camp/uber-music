# rubocop:disable all
ActiveAdmin.register User do
  config.per_page = 10

  permit_params :first_name, :second_name, :nickname, :email, :display_name, :password,
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
    column :display_name
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
      row :display_name
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
      f.input :display_name
      f.input :email
      f.input :type
      f.input :organizations, as: :check_boxes
      f.input :genres, as: :check_boxes
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
