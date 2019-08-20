class ImageHelper < ApplicationRecord
  include Mongoid::Document
  include Mongoid::Timestamps
  include Mongoid::Paranoia
  include Mongoid::Attributes::Dynamic
  include Rails.application.routes.url_helpers

  mount_uploader :media, ImageUploader, mount_on: :media_filename
end
