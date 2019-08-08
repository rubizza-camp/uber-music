class MusicianSkill < ApplicationRecord
  has_many :musician_skill_users
  has_many :users, through: :musician_skill_user
end
