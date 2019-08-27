class EventSerializer < ActiveModel::Serializer
  attributes :id, :description, :name, :start_time, :end_time,
             :organizations_user_ids, :first_image_url, :images
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

  def start_time
    object.start_time.strftime('%d.%m.%Y %H:%M')
  end

  def end_time
    object.end_time.strftime('%d.%m.%Y %H:%M')
  end

  def organizations_user_ids
    object.approved_organizations.map(&:user_ids).flatten
  end

  def first_image_url
    object.images.first.url.url
  end
end
