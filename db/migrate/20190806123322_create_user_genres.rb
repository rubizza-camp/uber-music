#:reek:TooManyStatements and :reek:UncommunicativeVariableName
#:reek:FeatureEnvy
class CreateUserGenres < ActiveRecord::Migration[5.2]
  def change
    create_table :user_genres do |table|
      table.belongs_to :user, index: true
      table.belongs_to :genre, index: true
    end
  end
end
