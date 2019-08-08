#:reek:TooManyStatements and :reek:UncommunicativeVariableName
#:reek:FeatureEnvy
class CreateMusicianSkillUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :musician_skill_users do |t|
      t.belongs_to :user, index: true
      t.belongs_to :musician_skills
    end
  end
end
