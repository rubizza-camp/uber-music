class CreateImages < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|
      t.integer :imageble_id, null: false
      t.string :imageble_type, null: false
      t.string :url, null: false
      t.timestamps
    end
  end
end
