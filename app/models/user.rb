class User < ApplicationRecord
  has_many :user_genres
  has_many :genres, through: user_genres
  has_many :images, as: imageable

  scope :users, -> { where(type: 'user') }
  scope :moderators, -> { where(type: 'moderators') }

  has_many :users, class_name: 'User'
  has_many :moderators, class_name: 'Moderator'
end
