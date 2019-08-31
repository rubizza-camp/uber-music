class AddGroupToOrganizations < ActiveRecord::Migration[5.2]
  def change
    add_column :organizations, :group, :integer
  end
end
