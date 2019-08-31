# rubocop:disable all
ActiveAdmin.register Organization do
  config.per_page = 10

  remove_filter :user_organizations, :organization_events, :pending_organization_events,
                :disabled_organization_events, :approved_organization_events

  permit_params :description, :name,
                user_ids: [],
                organization_event_ids: [],
                organization_events_attributes:
                %i[status id organization_id event_id]

  controller do
    def update
      Organization.find(params[:id]).update(name: params[:organization][:name],
                                            description: params[:organization][:description])
      Organization.find(params[:id]).users.clear
      params[:organization][:user_ids].each do |x|
        User.find(id = x).organizations << Organization.find(params[:id]) if x != ""
      end
      ImageService.add_image(Organization.find(params[:id]).id, "Organization", params[:organization][:image]) if params[:organization][:images] 
      redirect_to admin_organization_path(), id: params[:id]
    end
  end

  index do
    selectable_column
    id_column
    column :name
    column :description
    column :users
    column :pending_events
    column :disabled_events
    column :approved_events
    actions
  end

  show do
    attributes_table do
      row :name
      row :description
      row :users
      row :approved_events
      row :pending_events
      row :disabled_events
    end
  end

  form do |f|
    f.inputs 'Edit Organization' do
      f.input :name
      f.input :description
      f.input :users, as: :check_boxes
      f.input :image, as: :file, input_html: { multiple: true }
    end
    f.inputs 'Events' do
      f.has_many :organization_events, new_record: false do |e|
        e.input :event, type: :string, input_html: { disabled: true }
        e.input :status, as: :radio
      end
    end
    f.actions
  end
end
