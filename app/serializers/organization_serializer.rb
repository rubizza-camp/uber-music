class OrganizationSerializer < ActiveModel::Serializer
  attributes :id, :name, :description
  has_many :users, through: :user_organizations
  has_many :images, as: :imageable
  has_many :approved_events,
           through: :approved_organization_events,
           class_name: 'Event',
           source: :event

  def first_image_url
    object.images.first.url.url
  end
end
