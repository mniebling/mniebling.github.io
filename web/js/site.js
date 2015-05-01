//
// Custom site JS goes here!
// ------------------------------


$(function () {

	//
	// Post images should have lightbox-zoom functionality
	//
	// -------------------------------------------------------
	var $popupImages = $('.post img');

	$popupImages.each(function () {
		$(this).attr('data-mfp-src', $(this).attr('src'));
	});

	$popupImages.magnificPopup({
		type: 'image',

		mainClass: 'mfp-with-zoom',

		zoom: {
			enabled: true,
			duration: 300,
			easing: 'ease-in-out',
		}
	});

	// We will want to style it differently in CSS if the
	// image has been successfully enhanced
	$popupImages.addClass('is-zoomable');


	//
	// External links should open in a new browser tab
	//
	// -------------------------------------------------------
	$(document.links).filter(function() {
    return this.hostname != window.location.hostname;
	}).attr('target', '_blank');
});
