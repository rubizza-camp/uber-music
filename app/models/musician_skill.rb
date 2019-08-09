class MusicianSkill < ApplicationRecord
  has_many :musician_skill_users
  has_many :users, through: :musician_skill_users
  has_many :pending_musician_skill_users,
           -> { where status: MusicianSkillUser.statuses[:pending] },
           class_name: 'MusicianSkillUser'
  has_many :pending_musician_skills,
           through: :pending_musician_skill_users,
           class_name: 'MusicianSkill',
           source: :musician_skills
  has_many :disabled_musician_skill_users,
           -> { where status: MusicianSkillUser.statuses[:disabled] },
           class_name: 'MusicianSkillUser'
  has_many :disabled_musician_skills,
           through: :disabled_musician_skill_users,
           class_name: 'MusicianSkill',
           source: :musician_skills
  has_many :approved_musician_skill_users,
           -> { where status: MusicianSkillUser.statuses[:approved] },
           class_name: 'MusicianSkillUser'
  has_many :approved_musician_skills,
           through: :approved_musician_skill_users,
           class_name: 'MusicianSkill',
           source: :musician_skills
end
