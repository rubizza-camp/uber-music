class RenameImagesTableColumns < ActiveRecord::Migration[5.2]
  def change
  	rename_column :images, :imageble_id, :imageable_id
  	rename_column :images, :imageble_type, :imageable_type
  end
end
