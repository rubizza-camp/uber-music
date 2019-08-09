class PlaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :latitude, :longitude, :address, :description, :rules
  has_many :events
  has_many :images, as: :imageable
end
