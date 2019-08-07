#:reek:TooManyStatements and :reek:UncommunicativeVariableName
#:reek:FeatureEnvy
class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |table|
      table.string :nickname
      table.string :first_name
      table.string :second_name
      table.string :type
      table.string :email
      table.string :password
      table.integer :status, default: 0
      table.timestamps
    end
  end
end
