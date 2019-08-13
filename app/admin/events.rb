# rubocop:disable all
ActiveAdmin.register Event do
  config.per_page = 10

  remove_filter :pending_organization_events, :disabled_organization_events,
                :approved_organization_events, :organization_events

  permit_params :description, :name, :start_time, :end_time, :place_id,
                organization_event_ids: [],
                organization_events_attributes: %i[status id organization_id event_id]

  index do
    selectable_column
    id_column
    column :name
    column :description
    column :start_time
    column :end_time
    column :place
    column :approved_organizations
    column :pending_organizations
    column :disabled_organizations
    actions
  end

  show do
    attributes_table do
      row :name
      row :description
      row :start_time
      row :end_time
      row :place
      row :approved_organizations
      row :pending_organizations
      row :disabled_organizations
    end
  end

  form do |f|
    f.inputs 'Edit Events' do
      f.input :name
      f.input :description
      f.input :start_time
      f.input :end_time
      f.input :place, as: :radio
      f.inputs do
        f.has_many :organization_events, new_record: false do |e|
          e.input :organization, type: :string, input_html: { disabled: true }
          e.input :status, as: :radio
        end
      end
      f.actions
    end
  end
end
