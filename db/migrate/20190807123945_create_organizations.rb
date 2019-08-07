#:reek:all
class CreateOrganizations < ActiveRecord::Migration[5.2]
  def change
    create_table :organizations do |t|
      t.string :name, null: false, default: ''
      t.text :description, null: false, default: ''
      t.integer :status, default: 0
      t.timestamps
    end
  end
end
