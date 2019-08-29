class ImageService
  def self.add_image(imageable_id, imageable_type, image)
    Image.create(imageable_id: imageable_id, imageable_type: imageable_type, url: image)
  end

  def self.add_images(imageable_id, imageable_type, images)
    images.each do |image|
      Image.create(imageable_id: imageable_id, imageable_type: imageable_type, url: image)
    end
  end
end
