var createImageElement = function (src){
  let img = $('<img width="200" height="200" style="border-radius: 6px; margin: 20px">'); 
  $(img).attr('src', src).appendTo('div.gallery');
};

var loadImage = function(i, input){
  var reader = new FileReader();
  reader.onload = (event) => {
    createImageElement(event.target.result);
  };
  reader.readAsDataURL(input.files[i]);
};

var addClickEvent = function(){
  $.each($('#gallery').context.images, (i, image) => {
  if(image.id!= ''){
    button_id = `#deleteImage_${image.id}`;
    $(button_id).on('click', {id_image: image.id, button_id: button_id}, deleteImage);
  }});
};

var deleteImage = function(event){
  $(`#${event.data.id_image}`).remove();
  $(event.data.button_id).remove();
  $('#organization_delete_img').val($('#organization_delete_img').val() + `,${event.data.id_image}`);
};

$(document).ready( () => {
  if ($('#organization_edit').length > 0){
    addClickEvent();
    var imagesPreview = function(input, placeToInsertImagePreview) {
      if (input.files) {
        var filesAmount = input.files.length;
        for (i = 0; i < filesAmount; i++) {
          loadImage(i, input);
        }
      }
    };
    $('#gallery-photo-add').on('change', function() {
        imagesPreview(this, 'div.gallery');
    });
}});
