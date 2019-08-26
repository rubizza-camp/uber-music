class ImageService
  def self.add_image(imageable_id, imageable_type, image)
    Image.create(imageable_id: imageable_id, imageable_type: imageable_type, url: image)
  end
end
