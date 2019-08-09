class UserSerializer < ActiveModel::Serializer
  attributes :id, :nickname, :first_name, :second_name, :type, :email, :password
  has_many :genres
  has_one :image, as: :imageable
  has_many :musician_skills
  has_many :pending_musician_skills
  has_many :disabled_musician_skills
  has_many :approved_musician_skills
  has_many :organizations
end
