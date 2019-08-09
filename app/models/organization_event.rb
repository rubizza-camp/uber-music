class OrganizationEvent < ApplicationRecord
  belongs_to :organization
  belongs_to :event
  enum status: %i[pending disabled approved]
end
