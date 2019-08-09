class GenreSerializer < ActiveModel::Serializer
  attributes :id, :name, :description

  has_many :user_genres
  has_many :users, through: :user_genres
end
