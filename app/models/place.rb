class Place < ApplicationRecord
  has_many :events
  has_many :images, as: :imageable
end
