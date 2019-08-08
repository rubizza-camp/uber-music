class MusicianSkillUser < ApplicationRecord
	belongs_to :user
	belongs_to :musician_skill
	enum status: %i[pending disable approved]
end
