#:reek:TooManyStatements and :reek:UncommunicativeVariableName
#:reek:FeatureEnvy
class CreateMusicianSkills < ActiveRecord::Migration[5.2]
  def change
    create_table :musician_skills do |t|
      t.string :name, null: false
      t.timestamps
    end
  end
end
