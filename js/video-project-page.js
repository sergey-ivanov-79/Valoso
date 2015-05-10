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
	if ($(window).width() < 640) {
		$("#sliderTimeline a").tosrus();
		$("#sliderTimeline").tosrus({
		   infinite : true,
		   slides   : {
		      visible  : 3
		   }
		});
		}
		else {
		$("#sliderTimeline a").tosrus();
		$("#sliderTimeline").tosrus({
		   infinite : true,
		   slides   : {
		      visible  : 7
		   }
		});
		}
	/* Select all checkbox */
    $('#dl-check-all').click(function(event) {  //on click
        if(this.checked) { // check select status
            $('.check1').each(function() { //loop through each checkbox
                this.checked = true;  //select all checkboxes with class "checkbox1"              
            });
        }else{
            $('.check1').each(function() { //loop through each checkbox
                this.checked = false; //deselect all checkboxes with class "checkbox1"                      
            });        
        }
    });
	 $(".check1").click(function () {
	        if (!$(this).is(":checked")){
	            $("#dl-check-all").prop("checked", false);
	        }else{
	            var flag = 0;
	            $(".check1").each(function(){
	                if(!this.checked)
	                flag=1;
	            })             
	                        if(flag == 0){ $("#dl-check-all").prop("checked", true);}
	        }
	    });
	 /* 2nd */
	 $('#dl-check-all1').click(function(event) {  //on click
        if(this.checked) { // check select status
            $('.check2').each(function() { //loop through each checkbox
                this.checked = true;  //select all checkboxes with class "checkbox1"              
            });
        }else{
            $('.check2').each(function() { //loop through each checkbox
                this.checked = false; //deselect all checkboxes with class "checkbox1"                      
            });        
        }
    });
	 $(".check2").click(function () {
	        if (!$(this).is(":checked")){
	            $("#dl-check-all1").prop("checked", false);
	        }else{
	            var flag = 0;
	            $(".check2").each(function(){
	                if(!this.checked)
	                flag=1;
	            })             
	                        if(flag == 0){ $("#dl-check-all1").prop("checked", true);}
	        }
	    });
	 $('#dl-check-all3').click(function(event) {  //on click
        if(this.checked) { // check select status
            $('.check3').each(function() { //loop through each checkbox
                this.checked = true;  //select all checkboxes with class "checkbox1"              
            });
        }else{
            $('.check3').each(function() { //loop through each checkbox
                this.checked = false; //deselect all checkboxes with class "checkbox1"                      
            });        
        }
    });
	 $(".check3").click(function () {
	        if (!$(this).is(":checked")){
	            $("#dl-check-all3").prop("checked", false);
	        }else{
	            var flag = 0;
	            $(".check3").each(function(){
	                if(!this.checked)
	                flag=1;
	            })             
	                        if(flag == 0){ $("#dl-check-all3").prop("checked", true);}
	        }
	    });
	/* Select all checkbox End */
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

	/* Video Notes Video Click */
	$(".video-notes-wrapper > div > .col-sm-12").click(function(){
		$(".video-notes-wrapper > div > .col-sm-12").removeClass("selected");
		$(this).addClass("selected");
	});
	/* Video Notes Video Click End */
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
    /* Scroller */
    $(function(){
	  $('.scroll-pane').jScrollPane();
	  $('.scroll-pane-arrows').jScrollPane(
	    {
	      showArrows: true,
	      horizontalGutter: 10
	    }
	  );
	});
    /* Scroller End */
	$('.slickSlide').slick({
	  infinite: false,
	  speed: 300,
	  slidesToShow: 7,
	  slidesToScroll: 4,
	  responsive: [
	    {
	      breakpoint: 640,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});
});
$(window).resize(function(){
	/* Scroller */
    $(function(){
	  $('.scroll-pane').jScrollPane();
	  $('.scroll-pane-arrows').jScrollPane(
	    {
	      showArrows: true,
	      horizontalGutter: 10
	    }
	  );
	});
    /* Scroller End */

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
	  handle: '.drag-drop',
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