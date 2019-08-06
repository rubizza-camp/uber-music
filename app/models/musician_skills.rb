# rubocop:disable Lint/Syntax
class MusicianSkill < ApplicationRecord
  has_many :musicianskilsusers
  has_many :user through :musicianskillsusers
end
# rubocop:enable Lint/Syntax
