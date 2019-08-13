ActiveAdmin.register Organization do
  config.per_page = 10
  remove_filter :user_organizations, :organization_events, :pending_organization_events,
                :disabled_organization_events, :approved_organization_events

  permit_params :description, :name,
                user_ids: [],
                organization_event_ids: [],
                organization_events_attributes:
                %i[status id organization_id event_id]

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
