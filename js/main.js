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
  	localStorage.setItem('darkModeStorge', 'true', 30);
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

  			// document.querySelector('.accessibility-menu-text-light').style.display = 'block';
  			// document.querySelector('.accessibility-menu-text-dark').style.display = 'none';
  			// document.querySelector('.lightmode-icon').classList.remove('d-none');
  			// document.querySelector('.darkmode-icon').classList.add('d-none');
  		});
  	}
  	return false;
  }

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

  	// $('body').on('change', '#dark-theme-toggle', function () {
  	// 	if ($(this).prop('checked')) {
  	// 		console.log('dark mode');
  	// 		$('body').attr('data-theme', 'dark');
  	// 	} else {
  	// 		console.log('light mode');
  	// 		$('body').attr('data-theme', 'light');

  	// 	}
  	// });

  })(jQuery);