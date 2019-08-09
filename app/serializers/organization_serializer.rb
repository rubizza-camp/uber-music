class OrganizationSerializer < ActiveModel::Serializer
  attributes :id, :name, :description
  has_many :users, through: :user_organizations
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
           class_name: 'Event'
end