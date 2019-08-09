#:reek:all
class CreateUserOrganizations < ActiveRecord::Migration[5.2]
  def change
    create_table :user_organizations do |t|
      t.belongs_to :organization
      t.belongs_to :user
      t.timestamps
    end
  end
end
