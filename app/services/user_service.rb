class UserService
  def self.set_image(user, image)
    user&.image&.destroy
    Image.create(imageable_id: user.id,
                 imageable_type: user.type,
                 url: image)
  end
end
