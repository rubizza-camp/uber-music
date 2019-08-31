# rubocop:disable all
ActiveAdmin.register Place do
  config.per_page = 10

  permit_params :latitude, :longitude, :name, :address, :description, :rules,
                events: []

  controller do 
    def update
      Place.find(params[:id]).update(name: params[:place][:name],
                                     description: params[:place][:description],
                                     latitude: params[:place][:latitude],
                                     longitude: params[:place][:longitude],
                                     address: params[:place][:address])
      ImageService.add_images(params[:id], 'Place', params[:place][:images]) if params[:place][:images]
      redirect_to admin_place_path(), id: params[:id]
    end
  end
  
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
      f.input :images, as: :file, input_html: { multiple: true }
    end
    actions
  end
end
