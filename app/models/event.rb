class Event < ApplicationRecord
  belongs_to :place
  has_many :images, as: :imageable
  has_many :organization_event
  has_many :organizations, through: :organization_event
end
