class MusicianSkillsUser < ApplicationRecord
  belongs_to  :musicianskills
  belongs_to :users
end
