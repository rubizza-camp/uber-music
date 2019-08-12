class MusicianSkillSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :musician_skill_users
  has_many :users, through: :musician_skill_users
  has_many :pending_users,
           through: :pending_musician_skill_users,
           source: :user
  has_many :disabled_users,
           through: :disabled_musician_skill_users,
           source: :user
  has_many :approved_users,
           through: :approved_musician_skill_users,
           source: :user
end
