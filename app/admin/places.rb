ActiveAdmin.register Place do
  config.per_page = 10

  permit_params :latitude, :longitude, :name, :address, :description, :rules,
                events: []

  index do
    selectable_column
    id_column
    column :name
    column :description
    column :latitude
    column :longitude
    column :address
    column :events
    actions
  end

  show do
    attributes_table do
      row :name
      row :description
      row :latitude
      row :longitude
      row :address
      row :events
    end
  end

  form do |f|
    f.inputs 'Edit Place' do
      f.input :name
      f.input :description
      f.input :latitude
      f.input :longitude
      f.input :address
    end
    actions
  end
end
