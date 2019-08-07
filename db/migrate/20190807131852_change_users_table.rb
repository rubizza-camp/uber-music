#:reek:TooManyStatements and :reek:UncommunicativeVariableName
#:reek:FeatureEnvy
class ChangeUsersTable < ActiveRecord::Migration[5.2]
  def up
    change_column :users, :nickname, :string, null: false
    change_column :users, :first_name, :string, null: false
    change_column :users, :second_name, :string, null: false
    change_column :users, :type, :string, null: false
    change_column :users, :email, :string, null: false
    change_column :users, :password, :string, null: false
    remove_columns :users, :status
  end

  def down
    change_column :users, :nickname, :string, null: true
    change_column :users, :first_name, :string, null: true
    change_column :users, :second_name, :string, null: true
    change_column :users, :type, :string, null: true
    change_column :users, :email, :string, null: true
    change_column :users, :password, :string, null: true
    add_column :users, :status, :integer, default: 0
  end
end
