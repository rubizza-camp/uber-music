# frozen_string_literal: true

class AddDeviseToUsers < ActiveRecord::Migration[5.2]
  def self.up
    ## Database authenticatable
    # add_column string :email, null: false, default: ""
    # add_column :users, :encrypted_password, :string, null: false, default: ""
    rename_column :users, :password, :encrypted_password

    ## Recoverable
    add_column :users, :reset_password_token, :string
    add_column :users, :reset_password_sent_at, :datetime

    ## Trackable
    add_column :users, :sign_in_count, :integer, default: 0
    add_column :users, :current_sign_in_at, :datetime
    add_column :users, :last_sign_in_at, :datetime
    add_column :users, :current_sign_in_ip, :inet
    add_column :users, :last_sign_in_ip, :inet

    ## Confirmable
    add_column :users, :confirmation_token, :string
    add_column :users, :confirmed_at,:datetime
    add_column :users, :confirmation_sent_at, :datetime
    add_column :users, :unconfirmed_email, :string# Only if using reconfirmable

    ## Lockable
    add_column :users, :failed_attempts, :integer, default: 0 # Only if lock strategy is :failed_attempts
    add_column :users, :unlock_token, :string # Only if unlock strategy is :email or :both
    add_column :users, :locked_at, :datetime

    change_column :users, :nickname, :string, default: '', null: false
    change_column :users, :first_name, :string, default: '', null: false
    change_column :users, :second_name, :string, default: '', null: false
    change_column :users, :type, :string, default: 'User', null: false
    # Uncomment below if timestamps were not included in your original model.
    # t.timestamps null: false

    add_index :users, :confirmation_token, unique: true
    add_index :users, :email, unique: true
    add_index :users, :reset_password_token, unique:true
  end

  def self.down
    raise ActiveRecord::IrreversibleMigration
  end
end
