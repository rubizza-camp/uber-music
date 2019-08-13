class Event < ApplicationRecord
  belongs_to :place
  has_many :images, as: :imageable
  has_many :organization_events
  has_many :organizations, through: :organization_events
  # has_many :users, through: :organization
  has_many :pending_organization_events,
           -> { where status: OrganizationEvent.statuses[:pending] },
           class_name: 'OrganizationEvent'
  has_many :pending_organizations,
           through: :pending_organization_events,
           class_name: 'Organization',
           source: :organization
  has_many :disabled_organization_events,
           -> { where status: OrganizationEvent.statuses[:disabled] },
           class_name: 'OrganizationEvent'
  has_many :disabled_organizations,
           through: :disabled_organization_events,
           class_name: 'Organization',
           source: :organization
  has_many :approved_organization_events,
           -> { where status: OrganizationEvent.statuses[:approved] },
           class_name: 'OrganizationEvent'
  has_many :approved_organizations,
           through: :approved_organization_events,
           class_name: 'Organization',
           source: :organization
end
