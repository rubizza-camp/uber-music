class User < ApplicationRecord
  has_many :user_genres
  has_many :genres, through: :user_genres
  has_many :images, as: :imageable
  has_many :musician_skill_users
  has_many :musician_skills, through: :musician_skill_users
end
