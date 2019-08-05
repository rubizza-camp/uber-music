class CreateMusician < ActiveRecord::Migration[5.2]
  def change
    create_table :musicians do |t|
      t.string :photo_path
      t.string :description
      t.integer :like_count
      t.integer :perfomance_count
      t.belongs_to :categories
      t.belongs_to :user
      
      t.timestamps
    end
  end
end
