#:reek:all
class CreatePlaces < ActiveRecord::Migration[5.2]
  def change
    create_table :places do |t|
      t.string :name
      t.float :latitude
      t.float :longitude
      t.string :address
      t.text :description
      t.text :rules

      t.timestamps
    end
  end
end
