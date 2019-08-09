class AddStatusToMusicianSkillUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :musician_skill_users, :status, :integer, default: 0, null: false
    change_column :organization_events, :status,:integer, default: 0, null: false
  end
end
