class MusicianSkillSerializer < ActiveModel::Serializer
<<<<<<< HEAD
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
=======
  attributes :name
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
>>>>>>> Work correct and fixed functions
end
