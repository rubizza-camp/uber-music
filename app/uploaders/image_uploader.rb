class ImageUploader < CarrierWave::Uploader::Base
  # Include RMagick or MiniMagick support:
  include CarrierWave::MiniMagick
  process resize_and_crop: 300
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

  def resize_and_crop(size)
    manipulate! do |image|
      if image[:width] < image[:height]
        height_shave(image)
      elsif image[:width] > image[:height]
        width_shave(image)
      end
      image.resize("#{size}x#{size}")
      image
    end
  end

  private

  def height_shave(image)
    remove = ((image[:height] - image[:width]) / 2).round
    image.shave("0x#{remove}")
  end

  def width_shave(image)
    remove = ((image[:width] - image[:height]) / 2).round
    image.shave("#{remove}x0")
  end
end
