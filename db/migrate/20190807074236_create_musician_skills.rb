#:reek:FeatureEnvy and :reek:UncommunicativeVariableName and
class CreateMusicianSkills < ActiveRecord::Migration[5.2]
  def change
    create_table :musician_skills do |t|
      t.has_many :musician_skills_user
      t.has_many :user, through: musician_skills_user
      t.string :name
      t.timestamps
    end
  end
end
