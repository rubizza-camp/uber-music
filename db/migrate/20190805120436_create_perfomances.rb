class CreatePerfomances < ActiveRecord::Migration[5.2]
  def change
    create_table :perfomances do |t|
      t.datetime :time
      t.belongs_to :plac
      t.belongs_to :musicians
      t.timestamps
    end
  end
end
