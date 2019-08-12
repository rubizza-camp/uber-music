class EventSerializer < ActiveModel::Serializer
  attributes :id, :description, :name, :start_time, :end_time
  belongs_to :place
  has_many :pending_organizations,
           through: :pending_organization_events,
           class_name: 'Organization',
           source: :organization
  has_many :disabled_organizations,
           through: :disabled_organization_events,
           class_name: 'Organization',
           source: :organization
  has_many :approved_organizations,
           through: :approved_organization_events,
           class_name: 'Organization',
           source: :organization
  has_many :images, as: :imageable
end
