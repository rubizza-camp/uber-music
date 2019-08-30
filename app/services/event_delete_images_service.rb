class EventDeleteImagesService
  def self.delete_images(images_id, event_id)
    event = Event.find(event_id)
    images_id.split(',').each do |image_id|
      images = event.images.where(id: image_id.to_i)
      images.first.destroy unless images.empty?
    end
    install_default_image(event_id) if event.images.empty?
  end

  def self.install_default_image(event_id)
    ImageService.add_image(event_id, 'Event',
                           File.open('app/assets/images/default_event.jpeg'))
  end

  private_class_method :install_default_image
end
