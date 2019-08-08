class Event < ApplicationRecord
  belongs_to :place
  has_many :images
end
