var createImageElement = function(src){
  let img = $('<img width="200" height="200" style="border-radius: 6px">'); 
  $(img).attr('src', src).appendTo('div.gallery');
};

var loadImage = function(i, input){
  var reader = new FileReader();
  reader.onload = (event) => {
    createImageElement(event.target.result);
  };
  reader.readAsDataURL(input.files[i]);
};

$(document).ready( () => {
  if ($('#organization_new').length > 0){
    var imagesPreview = function(input, placeToInsertImagePreview) {
      $(placeToInsertImagePreview).empty();
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
