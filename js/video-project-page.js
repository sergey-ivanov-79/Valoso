$(document).ready(function(){

	var visina_slike = $('.video-description-left .video-span-wrap').height();
	$('.video-description-left .span-height').css('height', visina_slike);
	var visina_slike1 = $('.uploader-info .uploader-short-details').height();
	$('.uploader-info .uploader-avatar').css('height', visina_slike1);

	$('#project-delete-file').click(function() {
		$('.single-video-hover').fadeIn();
	});
	$('.single-video-hover-buttons button').click(function() {
		$('.single-video-hover').fadeOut();
	});

	$('#video-expandall').click(function() {
		$('.single-video-featuredimg,.single-video-description').fadeIn();
		$('.video-list .single-video').css({'border-bottom':'solid 1px #ebe9e9'});
		$('.video-list .single-video > h5').css({'margin-bottom':'10px','border-bottom-left-radius':'0px','border-bottom-right-radius':'0px'});
	});
	$('#video-collapseall').click(function() {
		$('.single-video-featuredimg,.single-video-description').fadeOut();
		$('.video-list .single-video').css({'border-bottom':'0'});
		$('.video-list .single-video > h5').css({'margin-bottom':'0','border-bottom-left-radius':'5px','border-bottom-right-radius':'5px'});
	});

	/* Trigger Lightbox */
		$("#links a").tosrus();
		$("#links").tosrus({
		   infinite : true,
		   slides   : {
		      visible  : 5
		   }
		});
		$("#slider2 a").tosrus();
		$("#slider2").tosrus({
		   infinite : true,
		   slides   : {
		      visible  : 5
		   }
		});
		$("#slider3 a").tosrus();
		$("#slider3").tosrus({
		   infinite : true,
		   slides   : {
		      visible  : 5
		   }
		});
	/* Trigger Lightbox End */

	/* Upload Button */
		// Span
		var span = document.getElementsByClassName('upload-path');
		// Button
		var uploader = document.getElementsByName('upload');
		// On change
		for( item in uploader ) {
		  // Detect changes
		  uploader[item].onchange = function() {
		    // Echo filename in span
		    span[0].innerHTML = this.files[0].name;
		  }
		}
	/* Upload Button End */


});


$(window).resize(function(){
	
});
