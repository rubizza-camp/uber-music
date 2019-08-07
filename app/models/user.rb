class User < ActiveRecord::Base
  has_many :user_genres
  has_many :genres, through: :user_genres
  enum status: %i[pending disable approved]
end
