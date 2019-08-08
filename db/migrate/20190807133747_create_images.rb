#:reek:UncommunicativeVariableName and :reek:FeatureEnvy
class CreateImages < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|
      t.integer :imageable_id, null: false
      t.string :imageable_type, null: false
      t.string :url, null: false
      t.references :imageable, polymorphic: true
      t.timestamps
    end
  end
end
