class MusicianSkillSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :musician_skill_users
  has_many :users, through: :musician_skill_users
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
end
