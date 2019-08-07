#:reek:TooManyStatements and :reek:UncommunicativeVariableName
#:reek:FeatureEnvy
class CreateGenres < ActiveRecord::Migration[5.2]
  def change
    create_table :genres do |table|
      table.string :name, null: false
      table.text :description, null: false, default: ''
      table.timestamps
    end
  end
end
