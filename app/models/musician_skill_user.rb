class MusicianSkillUser < ApplicationRecord
  belongs_to :user
  belongs_to :musician_skill
  enum status: %i[pending disabled approved]
end
