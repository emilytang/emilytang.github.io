/*ABOUT ME JS SHEET*/
$(function(){

	$ ('#basic').click(function(){
		hideMenuItems();
		$('.basic-info').slideToggle();
	}); 	 

	$ ('#education').click(function(){
		hideMenuItems();
		$('.education-info').slideToggle();
	}); 	

	$ ('#interest').click(function(){
		hideMenuItems();
		$('.interest-info').slideToggle();
	}); 

	$ ('#languages').click(function(){
		hideMenuItems();
		$('.lang-info').slideToggle();
	}); 

	$ ('#skills').click(function(){
		hideMenuItems();
		$('.skills-info').slideToggle();
	}); 

	function hideMenuItems(){
		$('.basic-info').hide();
		$('.education-info').hide();
		$('.interest-info').hide();
		$('.lang-info').hide();
		$('.skills-info').hide();

	};

	var headerTop = $('#firstmenu').offset().top;
	var headerBottom = headerTop + 120; 
	// Sub-menu should appear after this distance from top.
	$(window).scroll(function () {
	   	var scrollTop = $(window).scrollTop(); 
	   	// Current vertical scroll position from the top
	    	
		   	if (scrollTop > headerBottom) { 
		   	// Check to see if we have scrolled more than headerBottom
			if (($("#secondmenu").is(":visible") === false)) {
			    $('#secondmenu').fadeIn('slow');
			}
			} else {
			if ($("#secondmenu").is(":visible")) {
			    $('#secondmenu').hide();
			}
	    }
	});

//SMOOTH SCROLLING//
	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	 });

});          

