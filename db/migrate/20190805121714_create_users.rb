class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :nickname
      t.string :password
      t.string :email
      t.integer :role, default: 0
      t.timestamps
    end
  end
end
