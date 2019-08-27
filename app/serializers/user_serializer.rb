class UserSerializer < ActiveModel::Serializer
  attributes :id, :nickname, :first_name, :second_name, :type, :email, :password, :image_url, :image
  has_many :genres, through: :user_genres

  has_many :pending_musician_skills,
           through: :pending_musician_skill_users,
           class_name: 'MusicianSkill',
           source: :musician_skill
  has_many :disabled_musician_skills,
           through: :disabled_musician_skill_users,
           class_name: 'MusicianSkill',
           source: :musician_skill
  has_many :approved_musician_skills,
           through: :approved_musician_skill_users,
           class_name: 'MusicianSkill',
           source: :musician_skill
  has_many :organizations, through: :user_organizations
  has_one :image, as: :imageable

  def image_url
    object.image.url.url if object.image
  end
end
