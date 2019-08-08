class Event < ApplicationRecord
  belongs_to :place
  has_many :images, as: :imageable
  has_many :organization_events
  has_many :organizations, through: :organization_events
  has_many :pending_organization_events,
           -> { where status: OrganizationEvent.statuses[:pending] },
           class_name: 'OrganizationEvent'
  has_many :pending_events,
           through: :pending_organization_events,
           class_name: 'Event',
           source: :event
  has_many :disabled_organization_events,
           -> { where status: OrganizationEvent.statuses[:disabled] },
           class_name: 'OrganizationEvent'
  has_many :disabled_events,
           through: :disabled_organization_events,
           class_name: 'Event',
           source: :event
  has_many :approved_organization_events,
           -> { where status: OrganizationEvent.statuses[:approved] },
           class_name: 'OrganizationEvent'
  has_many :approved_events,
           through: :approved_organization_events,
           class_name: 'Event',
           source: :event
end
