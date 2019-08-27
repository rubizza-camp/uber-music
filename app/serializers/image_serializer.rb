class ImageSerializer < ActiveModel::Serializer
  attributes :image_url, :url

  def image_url
    object&.url&.url
  end
end
