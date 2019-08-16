# rubocop:disable all
ActiveAdmin.register MusicianSkill do
  config.per_page = 25

  permit_params :name,
                user_ids: [],
                musician_skill_user_ids: [],
                musician_skill_users_attributes: %i[status id user_id misician_skill_id]

  index do
    selectable_column
    id_column
    column :name
    column :users
    column :pending_users
    column :disabled_users
    column :approved_users
    actions
  end

  show do
    attributes_table do
      row :name
      row :users
      row :pending_users
      row :disabled_users
      row :approved_users
    end
  end

  form do |f|
    f.inputs 'Edit Genres' do
      f.input :name
      f.input :users, as: :check_boxes
    end
    f.inputs 'Musician skills' do
      f.has_many :musician_skill_users, new_record: false do |e|
        e.input :user, type: :string, input_html: { disabled: true }
        e.input :status, as: :radio
      end
    end
    actions
  end
end
