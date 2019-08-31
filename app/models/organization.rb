class Organization < ApplicationRecord
  has_many :user_organizations
  has_many :users, through: :user_organizations
  has_many :organization_events
  has_many :events, through: :organization_events
  has_many :images, as: :imageable
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
  accepts_nested_attributes_for :events
  accepts_nested_attributes_for :users
  accepts_nested_attributes_for :organization_events
  enum group: [0, 1, 2]

  def create_group
    organizations_group = Organization.all.map(&:group)
    count_of_each_group = [0, 1, 2].map { |item| organizations_group.count(item) }
    update(group: count_of_each_group.index(count_of_each_group.min))
  end
end
