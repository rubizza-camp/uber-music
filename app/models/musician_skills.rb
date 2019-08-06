class MusicianSkill < ApplicationRecord
  has_many :musicianskilsusers
  has_many :user, through: :musicianskillsusers
end
