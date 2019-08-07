class MusicianSkill < ApplicationRecord
  has_many :musician_skills_users
  has_many :user, through: musician_skills_users
end
