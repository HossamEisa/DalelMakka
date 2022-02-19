/*global $,  document,  window, Swiper */

window.addEventListener('DOMContentLoaded', (event) => {
	function startTime(date) {
		var hours = date.getHours();
		var minutes = date.getMinutes();
		let seconds = date.getSeconds();

		var ampm = hours >= 12 ? 'pm' : 'am';
		hours = hours % 12;
		hours = hours ? hours : 12; // the hour '0' should be '12'
		minutes = minutes < 10 ? '0' + minutes : minutes;
		seconds = seconds < 10 ? '0' + seconds : seconds;

		var strTime = hours + ':' + minutes + ":" + seconds;
		document.getElementById('clock').innerHTML = strTime;
	}

	startTime(new Date);

	setInterval(function () {
		startTime(new Date);
	}, 1000)
});
jQuery.noConflict();

(function ($) {
	$(window).on('load', function () {

		$('.loader').addClass('d-none');

	});

	$(window).on('unload', function () {



	});


	$("body").on('click', '.show-pw-icon', function () {
		var input = $($(this).attr("toggle"));
		$(this).toggleClass("active");

		if (input.attr("type") == "password") {
			input.attr("type", "text");
		} else {
			input.attr("type", "password");
		}
	});

	// bottom menu action

	$('body').on('click', '.bottom-menu-item', function(){
		$(this).addClass('active').siblings().removeClass('active');
	});

})(jQuery);