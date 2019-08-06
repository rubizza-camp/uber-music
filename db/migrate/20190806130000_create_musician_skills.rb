# :reek:FeatureEnvy and :reek:UncommunicativeVariableName
class CreateMusicianSkills < ActiveRecord::Migration[5.2]
  def change
    create_table :musician_skills do |t|
      t.string :name
      t.timestamps
    end
  end
end
