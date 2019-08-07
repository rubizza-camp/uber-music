class MusicianSkillsUser < ApplicationRecord
  belongs_to :musician_skill
  belongs_to :users
end
