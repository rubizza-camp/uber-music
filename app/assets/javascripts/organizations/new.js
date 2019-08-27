$(document).ready( ()=> {
  if ($('#organization_new').length > 0){
    var imagesPreview = function(input, placeToInsertImagePreview) {
      $('.gallery').empty()
      if (input.files) {
        var filesAmount = input.files.length;
        for (i = 0; i < filesAmount; i++) {
          var reader = new FileReader();
          reader.onload = function(event) {
              $($.parseHTML('<img width="200" height="200" style="border-radius: 6px">')).attr('src', event.target.result).appendTo(placeToInsertImagePreview);
          }
          reader.readAsDataURL(input.files[i]);
        }
      }
    };
    $('#gallery-photo-add').on('change', function() {
        imagesPreview(this, 'div.gallery');
    });
  }});
