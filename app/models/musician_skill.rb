class MusicianSkill < ApplicationRecord
	has_many :musician_skill_user
	has_many :users, through: :musician_skill_user
end
