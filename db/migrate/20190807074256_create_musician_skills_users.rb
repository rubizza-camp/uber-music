#:reek:FeatureEnvy and :reek:UncommunicativeVariableName
class CreateMusicianSkillsUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :musician_skills_users do |t|
      t.belongs_to :musician_skill
      t.belongs_to :users
      t.string :state
      t.timestamps
    end
  end
end
