class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :nickname
      t.string :first_name
      t.string :second_name
      t.string :type
      t.string :email
      t.string :password
      t.timestamps
    end
  end
end
