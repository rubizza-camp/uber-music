#:reek:all
class CreateOrganizations < ActiveRecord::Migration[5.2]
  def change
    create_table :organizations do |t|
      t.string :name
      t.string :description
      t.timestamps
    end

    create_table :user_organizations do |t|
      t.belongs_to :organization
      t.belongs_to :user
      t.timestamps
    end

    create_table :organization_events do |t|
      t.belongs_to :organization
      t.belongs_to :event
      t.integer :status, default: 0
      t.timestamps
    end
  end
end
