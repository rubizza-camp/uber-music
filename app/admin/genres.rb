# rubocop:disable all
ActiveAdmin.register Genre do
  config.per_page = 25

  permit_params :description, :name,
                user_ids: []

  index do
    selectable_column
    id_column
    column :name
    column :description
    column :users
    actions
  end

  show do
    attributes_table do
      row :name
      row :description
      row :users
    end
  end

  form do |f|
    f.inputs 'Edit Genres' do
      f.input :name
      f.input :description
      f.input :users, as: :check_boxes
    end
    actions
  end
end
