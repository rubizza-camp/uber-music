class ImageUploader < CarrierWave::Uploader::Base
  # Include RMagick or MiniMagick support:
  include CarrierWave::MiniMagick
  process resize_to_fill: [795, 300]
  process convert: 'png'

  # Choose what kind of storage to use for this Uploader:
  storage :file
  # Override the directory where uploaded files will be stored.
  # This is a sensible default for uploaders that are meant to be mounted:
  def store_dir
    'uploads/images'
  end

  def extension_white_list
    %w[jpg jpeg png gif]
  end
end
