class EventSerializer < ActiveModel::Serializer
  attributes :id, :description, :name, :start_time, :end_time, :organizations_user_ids
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
    self.object.start_time.strftime('%d.%m.%Y %H:%M')
  end

  def end_time
    self.object.end_time.strftime('%d.%m.%Y %H:%M')
  end

  def organizations_user_ids
    self.object.approved_organizations.map { |org| org.user_ids }.flatten
  end
end
