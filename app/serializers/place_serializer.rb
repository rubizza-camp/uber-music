class PlaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :latitude, :longitude, :address,
             :description, :rules, :images, :first_image_url
  has_many :events
  has_many :images, as: :imageable

  def first_image_url
    object&.images&.first&.url&.url
  end
end
