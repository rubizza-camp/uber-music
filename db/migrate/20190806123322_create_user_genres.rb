# :reek:FeatureEnvy and :reek:UncommunicativeVariableName

class CreateUserGenres < ActiveRecord::Migration[5.2]
  def change
    create_table :user_genres do |t|
      t.belongs_to :users, index: true
      t.belongs_to :genres, index: true
    end
  end
end
