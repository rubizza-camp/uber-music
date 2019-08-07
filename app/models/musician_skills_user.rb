class MusicianSkillsUser < ApplicationRecord
  belongs_to :musician_skills
  belongs_to :users
end
