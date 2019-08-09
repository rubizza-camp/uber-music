class AddStatusToMusicianSkillUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :musician_skill_users, :status, :integer, default: 0
  end
end
