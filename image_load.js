//call this function to encode images to base64
//https://developer.mozilla.org/de/docs/Web/API/FileReader

 $(window).load(function() {
		// Animate loader off screen
		$(".loader").fadeOut("slow");
	});


function encodeImageFileAsURL(cb) {
    'use strict';
    return function(){
        
        var file = this.files[0];
        var reader  = new FileReader();
        reader.onloadend = function () {
            cb(reader.result);
        }
        reader.readAsDataURL(file);
    }
}

//Load this function in the dashboard

$('#inputFileToLoad').change(encodeImageFileAsURL(function(base64Img){
    $('.output')
      .find('textarea')
        .val(base64Img)
        .end()
      .find('a')
        .attr('href', base64Img)
        .text(base64Img)
        .end()
      .find('img')
        .attr('src', base64Img);
}));
