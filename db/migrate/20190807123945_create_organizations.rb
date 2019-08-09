#:reek:all
class CreateOrganizations < ActiveRecord::Migration[5.2]
  def change
    create_table :organizations do |t|
      t.string :name, null: false, default: ''
      t.text :description, null: false, default: ''
      t.timestamps
    end
  end
end
