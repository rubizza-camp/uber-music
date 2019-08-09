class EventSerializer < ActiveModel::Serializer
  attributes :id, :description, :name, :start_time, :end_time
  belongs_to :place
  has_many :organizations, through: :organization_events
  has_many :pending_events,
           through: :pending_organization_events,
           class_name: 'Event',
           source: :event
  has_many :disabled_events,
           through: :disabled_organization_events,
           class_name: 'Event',
           source: :event
  has_many :approved_events,
           through: :approved_organization_events,
           class_name: 'Event',
           source: :event
  has_many :images, as: :imageable
end
