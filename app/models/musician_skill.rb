class MusicianSkill < ApplicationRecord
  has_many :musician_skills_user
  has_many :user, through: musician_skills_user
end
