class User < ApplicationRecord
  has_many :user_genres
  has_many :genres, through: :user_genres
  has_one  :image, as: :imageable
  has_many :musician_skill_users
  has_many :musician_skills, through: :musician_skill_users
  has_many :pending_musician_skill_users, -> { where status: MusicianSkillUser.status[:pending] },
           class_name: 'MusicianSkillUser'
  has_many :pending_musician_skills,
           through: :pending_musician_skill_users, class_name: 'MusicianSkill',
           source: :musician_skills
  has_many :disabled_musician_skill_users, -> { where status: MusicianSkillUser.status[:disabled] },
           class_name: 'MusicianSkillUser'
  has_many :disabled_musician_skills,
           through: :disabled_musician_skill_users,
           class_name: 'MusicianSkill',
           source: :musician_skills
  has_many :approved_musician_skill_users, -> { where status: MusicianSkillUser.status[:approved] },
           class_name: 'MusicianSkillUser'
  has_many :approved_musician_skills,
           through: :approved_musician_skill_users,
           class_name: 'MusicianSkill',
           source: :musician_skills
end
