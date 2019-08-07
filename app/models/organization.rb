class Organization < ApplicationRecord
  has_many :user_organizations
  has_many :users, through: :user_organizations
  has_many :organization_events
  has_many :events, through: :organization_events
end
