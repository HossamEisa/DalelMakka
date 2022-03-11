   /*global $,  document,  window, Swiper */


   /* ----------------------------------------------------------------------------------------------------------------------------------------------------
           Dark Mode [Init]
       ---------------------------------------------------------------------------------------------------------------------------------------------------- */

   document.addEventListener("DOMContentLoaded", function () {
   	//do work
   	let checkBox = document.getElementById('dark-theme-toggle');
   	checkBox.addEventListener('change', function (event) {
   		event.preventDefault();
   		if (localStorage.getItem('darkModeStorge') == 'false') {
   			document.getElementById("light-mode-icon").classList.add('d-none');
   			document.getElementById("dark-mode-icon").classList.remove('d-none');
   			localStorage.setItem('darkModeStorge', 'true');
   		} else {
   			document.getElementById("light-mode-icon").classList.remove('d-none');
   			document.getElementById("dark-mode-icon").classList.add('d-none');
   			localStorage.setItem('darkModeStorge', 'false', 30);
   		}
   		isDarkMode(localStorage.getItem('darkModeStorge'));

   	}, false);
   });




   if (localStorage.getItem('darkModeStorge') == null) {
   	localStorage.setItem('darkModeStorge', 'true');
   }
   var darkModeStorge = localStorage.getItem('darkModeStorge');


   isDarkMode(darkModeStorge);

   function isDarkMode(mode) {
   	bodyElemet = document.querySelectorAll('body');

   	if (mode == 'false') {
   		bodyElemet[0].setAttribute('data-theme', 'light');
   		document.addEventListener("DOMContentLoaded", function () {
   			document.getElementById("dark-theme-toggle").checked = false;
   			document.getElementById("light-mode-icon").classList.remove('d-none');
   			document.getElementById("dark-mode-icon").classList.add('d-none');

   		});
   	} else {
   		bodyElemet[0].setAttribute('data-theme', 'dark');
   		document.addEventListener("DOMContentLoaded", function () {
   			document.getElementById("dark-theme-toggle").checked = true;
   			document.getElementById("light-mode-icon").classList.add('d-none');
   			document.getElementById("dark-mode-icon").classList.remove('d-none');
   		});
   	}
   	return false;
   }


   /* ----------------------------------------------------------------------------------------------------------------------------------------------------
        Dir Mode [Init]
    ---------------------------------------------------------------------------------------------------------------------------------------------------- */

   document.addEventListener("DOMContentLoaded", function () {
   	//do work
   	jQuery('body').on('click', '.select-lang-form input', function (event) {
   		if (event.target.value == 'rtl') {
   			localStorage.setItem('dir', 'rtl')
   			isDir(localStorage.getItem('dir'));
   		} else {
   			localStorage.setItem('dir', 'ltr')
   			document.querySelector("link[href='css/bootstrap.rtl.min.css']").href = "css/bootstrap.min.css";
   			document.querySelector("link[href='css/style-rtl.min.css']").href = "css/style.min.css";
   		}

   	});
   });




   if (localStorage.getItem('dir') == null) {
   	localStorage.setItem('dir', 'rtl');
   }
   var directions = localStorage.getItem('dir');


   isDir(directions);

   function isDir(dir) {
   	bodyElemet = document.querySelectorAll('body');

   	if (dir == 'ltr') {
   		bodyElemet[0].setAttribute('data-dir', 'ltr');



   		document.addEventListener("DOMContentLoaded", function () {
   			document.querySelector(".dir-ltr-toggle").checked = true;
   			document.querySelector(".dir-rtl-toggle").checked = false;
   		});


   	} else {
   		bodyElemet[0].setAttribute('data-dir', 'rtl');

   		document.querySelector("link[href='css/bootstrap.min.css']").href = "css/bootstrap.rtl.min.css";
   		document.querySelector("link[href='css/style.min.css']").href = "css/style-rtl.min.css";

   		document.addEventListener("DOMContentLoaded", function () {
   			document.querySelector(".dir-rtl-toggle").checked = true;
   			document.querySelector(".dir-ltr-toggle").checked = false;
   		});


   	}
   	return false;
   }

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

   		var strTime = hours + ':' + minutes;
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

   	$('body').on('click', '.bottom-menu-item', function () {
   		$(this).addClass('active').siblings().removeClass('active');
   	});

   	$('#setting-area').on('click', function () {
   		$('.settings').slideToggle(500)
   	});

   	if (localStorage.getItem('fontSize') == null) {
   		localStorage.setItem('fontSize', '');
   	}
   	var fontSize = localStorage.getItem('fontSize');

   	if (fontSize == '') {
   		$('html').removeClass('fontsize-md fontsize-lg fontsize-xl');
   		$('#change-font-size').val(0)
   	}
   	if (fontSize == 'md') {
   		$('html').removeClass('fontsize-md fontsize-lg fontsize-xl').addClass('fontsize-md');
   		$('#change-font-size').val(1)

   	}
   	if (fontSize == 'lg') {
   		$('html').removeClass('fontsize-md fontsize-lg fontsize-xl').addClass('fontsize-lg');
   		$('#change-font-size').val(2)

   	}
   	if (fontSize == 'xl') {
   		$('html').removeClass('fontsize-md fontsize-lg fontsize-xl').addClass('fontsize-xl');
   		$('#change-font-size').val(3)

   	}
   	$('#change-font-size').on('change', function (e) {
   		let itemValue = $(this).val();
   		console.log(itemValue);
   		if (itemValue == 0) {
   			$('html').removeClass('fontsize-md fontsize-lg fontsize-xl');
   			localStorage.setItem('fontSize', '');
   		}
   		if (itemValue == 1) {
   			$('html').addClass('fontsize-md').removeClass('fontsize-lg fontsize-xl');
   			localStorage.setItem('fontSize', 'md');
   		}
   		if (itemValue == 2) {
   			$('html').addClass('fontsize-lg').removeClass('fontsize-md fontsize-xl');
   			localStorage.setItem('fontSize', 'lg');
   		}
   		if (itemValue == 3) {
   			$('html').addClass('fontsize-xl').removeClass('fontsize-md fontsize-lg');
   			localStorage.setItem('fontSize', 'xl');
   		}
   	});

   })(jQuery);