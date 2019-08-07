#:reek:all
class CreatePlaces < ActiveRecord::Migration[5.2]
  def change
    create_table :places do |t|
      t.string :name, null: false, default: ''
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.string :address, null: false, default: ''
      t.text :description, null: false, default: ''
      t.text :rules, null: false, default: ''

      t.timestamps
    end
  end
end
