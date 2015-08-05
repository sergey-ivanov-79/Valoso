$(document).ready(function(){

	$('.desktop-devices button').click(function(){
		$('.desktop-devices button').removeClass('active');
		$(this).addClass('active');
	});

	$('.edit-container-left button').click(function(){
		$('.edit-container-left button').removeClass('active');
		$(this).addClass('active');
	});
	$('.edit-container-left button:nth-of-type(1)').click(function(){
		$('.arrow-left').css('top','70px');
		$('.edit-container-right').hide();
		$('.edit-container').css('width','296px');
		$('.arrow-left').fadeIn();
		$('.edit-content-right-template').fadeIn();
	});
	$('.edit-container-left button:nth-of-type(2)').click(function(){
		$('.arrow-left').css('top','130px');
		$('.edit-container').css('width','296px');
		$('.arrow-left').fadeIn();
		$('.edit-content-right-template').hide();
		$('.edit-container-right').fadeIn();
	});
	$('.design-btn span, .some-arrow img').click(function(){
		$('.arrow-left').fadeOut();
		$('.edit-content-right-template').fadeOut();
		$('.edit-container-right').fadeOut();
		$('.edit-container').css('width','85px');
	});

	$('.template-name-single > div').click(function(){
		$('.template-name-single > div').removeClass('active');
		$(this).addClass('active');
	});

	$('#tablet-sim').click(function(){
		$('.ipad-simulator').fadeIn();
		$('.phone-simulator').hide();
		$('body').addClass('sim-640');
		$('body').removeClass('sim-320');
		$('.display-desktop,.display-480').hide();
		$('.display-640').show();
	});
	$('#phone-sim').click(function(){
		$('.phone-simulator').fadeIn();
		$('.ipad-simulator').hide();
		$('body').addClass('sim-320');
		$('body').removeClass('sim-640');
		$('.display-desktop,.display-640').hide();
		$('.display-480').show();
	});
	$('#desktop-sim').click(function(){
		$('.ipad-simulator').fadeOut();
		setTimeout(function(){
			$('body').removeClass('sim-640');
			$('body').removeClass('sim-320');
		}, 300);
		$('.display-480,.display-640').hide();
		$('.display-desktop').show();
	});

	/* Bootstrap Popover */
		$(function () {
		  $('[data-toggle="popover"]').popover()
		})
	/* Bootstrap Popover End */

	$('.templati-body .col-xs-4').click(function(){
		$('.templati-body .col-xs-4').removeClass('active');
		$(this).addClass('active');
	});
	$('.close-templati').click(function(){
		$('.templati-tablet-trigger').fadeOut();
	});
	$('.templati').click(function(){
		$('.templati-tablet-trigger').fadeIn();
	});
	$('.close-designers').click(function(){
		$('.designers-tablet').fadeOut();
	});
	$('.paleta').click(function(){
		$('.designers-tablet').fadeIn();
	});
});


$(window).resize(function(){
	var ww = $(window).width();
	if (ww < 640) {
        $('.user-profile-left ul li:nth-child(6)').insertAfter('.user-profile-left ul li:nth-child(9)');
	}
	if (ww < 480) {
        $('.user-profile-left ul li:nth-child(3)').insertAfter('.user-profile-left ul li:nth-child(4)');
	}
});