class AddGroupToOrganizations < ActiveRecord::Migration[5.2]
  def change
    add_column :organizations, :group, :integer, default: 0
  end
end
