class User < ApplicationRecord
  has_many :user_genres
  has_many :genres, through: :user_genres
  has_many :image, as: :imageable
end
