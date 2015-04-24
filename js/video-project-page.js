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
		$(this).css('color','#474747');
		$('#video-collapseall').css('color','#4b8dcb');
		$('.video-list').removeClass('video-toggle-collapsed');
		$('.single-video-featuredimg,.single-video-description').fadeIn();
	});
	$('#video-collapseall').click(function() {
		$(this).css('color','#474747');
		$('#video-expandall').css('color','#4b8dcb');
		$('.video-list').addClass('video-toggle-collapsed');
		$('.single-video-featuredimg,.single-video-description').fadeOut();
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

	$('.project-files-buttons .change-buttons button').click(function(){
		$('.project-files-buttons .change-buttons button').removeClass('button-active');
		$(this).addClass('button-active');
	});
	/* Bootstrap Tooltip */
		$(function () {
		  $('[data-toggle="tooltip"]').tooltip()
		});
	/* Bootstrao Tooltip End */
	/* Bootstrap Popover */
		$(function () {
		  $('[data-toggle="popover"]').popover()
		})
	/* Bootstrao Popover End */

	$( ".checkbox-inline1" ).click(function() {
    $('.fixed-price1').addClass('fxd');
    $('.fixed-price2').removeClass('fxd');
	});

	$( ".checkbox-inline2" ).click(function() {
    $('.fixed-price2').addClass('fxd');
    $('.fixed-price1').removeClass('fxd');
	});


	$('#fixed-price').click(function() {
		$(".for-hide2").toggleClass('d-none1');
	    var checkedBox = $(this).attr("checked");
        if (checkedBox === true) {
            $("#is_range").attr('checked', false);
        } else {
            $("#is_range").removeAttr('checked');                   
        }
    });
    $('#is_range').click(function() {
    	$(".for-hide1").toggleClass('d-none1');
        $(".fixed-price2").toggleClass('d-none1');
	    var checkedBox = $(this).attr("checked");
        if (checkedBox === true) {
            $("#fixed-price").attr('checked', false);
        } else {
            $("#fixed-price").removeAttr('checked');              
        }
    });
    $('#allow_bid').click(function() {
    	$(".for-hide1").toggleClass('d-none');
    	$(".for-hide2").toggleClass('d-none');
    });

    $('.carousel').carousel({
    	interval: false
	}); 
    
});

$(window).resize(function(){
	
});

	/* Double Select */
	$(function() {
        $('#music-genre-main').change(function(){
            $('.double-select').hide();
            $('#' + $(this).val()).show();
        });
    });
	/* Double Select End */
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	});

	/* Drag & Drop */
	var adjustment
	$("ol.video-list").sortable({
	  group: 'no-drop',
	  handle: '.icon-reorder',
	  onDragStart: function (item, container, _super) {
	    // Duplicate items of the no drop area
	    if(!container.options.drop)
	      item.clone().insertAfter(item)
	    _super(item)
	  }
	});
	$("ol.video-list").sortable({
	  group: 'no-drop',
	  drop: false
	});
	$("ol.video-list").sortable({
	  group: 'no-drop',
	  drag: false
	});
	/* Drag & Drop End*/

	/* Popup Datepicker */
	var tmp = $.fn.popover.Constructor.prototype.show;
	$.fn.popover.Constructor.prototype.show = function () {
	  tmp.call(this);
	  if (this.options.callback) {
	    this.options.callback();
	  }
	}

	$(".start-date").popover({ 
	        placement: 'bottom',
	        content: '<h4>Edit Project Start Date</h4><div><input class="datepicker" type="text" /><button><img src="images/video-project/okay.png" alt="Okay" /></button><button><img src="images/video-project/cancel.png" alt="Cancel" /></button></div>',
	        html: true, 
	  callback: function() { 
	    $('.datepicker').datepicker(); 
	  } 
	}).click(function (e) {
	        e.preventDefault();
	 });

	$(".end-date").popover({ 
	        placement: 'bottom',
	        content: '<h4>Edit Project Deadline Date</h4><div><input class="datepicker" type="text" /><button><img src="images/video-project/okay.png" alt="Okay" /></button><button><img src="images/video-project/cancel.png" alt="Cancel" /></button></div>',
	        html: true, 
	  callback: function() { 
	    $('.datepicker').datepicker(); 
	  } 
	}).click(function (e) {
	        e.preventDefault();
	 });
	/* Popup Datepicker End */