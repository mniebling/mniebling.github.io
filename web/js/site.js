//
// Custom site JS goes here!
// ------------------------------


$(function () {

	// Post images should have lightbox-zoom functionality
	var popupImages = $('.post img');

	popupImages.each(function () {
		$(this).attr('data-mfp-src', $(this).attr('src'));
	});

	$('.post img').magnificPopup({
		type: 'image',

		mainClass: 'mfp-with-zoom',

		zoom: {
			enabled: true,
			duration: 300,
			easing: 'ease-in-out',
		}
	});

});
