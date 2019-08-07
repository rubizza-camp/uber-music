#:reek:FeatureEnvy and :reek:UncommunicativeVariableName and :reek:TooManyStatements
class CreateImages < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|
      t.string :imageble_id
      t.string :imageble_type
      t.string :url
      t.timestamps
    end
  end
end
