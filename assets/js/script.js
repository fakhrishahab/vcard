function toggleMenu(body){
	var el = $('.main-menu');
	var isShow = el.hasClass('show-menu');
			    	
	if(isShow == true){
		$('.toggle-btn').removeClass('active')
		el.removeClass('show-menu')
		el.addClass('hide-menu')
	}
	else if(isShow == false){
		if(body != true){
			$('.toggle-btn').addClass('active')
    		el.removeClass('hide-menu')
    		el.addClass('show-menu')	
		}
		
	}
}

$('body').on('click', function(e){
	toggleMenu(true);
	e.stopPropagation();
})

$('.toggle-btn').click(function(e){
	toggleMenu();
	e.stopPropagation();
})	

$(window).scroll(function(){
	if($(window).scrollTop() > 0){
		$('.menu-wrapper').addClass('animate')
	}else{
		$('.menu-wrapper').removeClass('animate')
	}

	var scroll = parseInt($(window).scrollTop()) + 50;
	if($('#landing').position().top <= scroll && scroll < $('#about').position().top){
		$('#nav-landing').addClass('active')
		$('#nav-landing').siblings().removeClass('active');
	}
	else if($('#about').position().top <= scroll && scroll < $('#milestone').position().top){
		$('#nav-about').addClass('active')
		$('#nav-about').siblings().removeClass('active');
	}
	else if($('#milestone').position().top <= scroll && scroll < $('#skills').position().top){
		$('#nav-milestone').addClass('active')
		$('#nav-milestone').siblings().removeClass('active');
	}
	else if($('#skills').position().top <= scroll && scroll < $('#portfolio').position().top){
		$('#nav-skills').addClass('active')
		$('#nav-skills').siblings().removeClass('active');
	}
	else if($('#portfolio').position().top <= scroll && scroll < $('#contact').position().top){
		$('#nav-portfolio').addClass('active')
		$('#nav-portfolio').siblings().removeClass('active');
	}
	else if($('#contact').position().top <= scroll){
		$('#nav-contact').addClass('active')
		$('#nav-contact').siblings().removeClass('active');
	}

})		

$(function(){
    $(".typed-job").typed({
        strings: ["front end developer", "ui/ux designer", "web designer"],		            
        typeSpeed: 130,
        loop : true,
        backDelay : 2000
    });
});		    	   

$('a[href*=#]:not([href=#])').click(function() {
	$(this).parent('li').addClass('active');
	$(this).parent('li').siblings().removeClass('active');	
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

var $container = $('.portfolio-list').isotope('layout');			
	// filter items on button click
$('.portfolio-tab ul').on( 'click','a', function(e) {
	e.preventDefault();
	var filterValue = $(this).attr('data-filter');

	$container.isotope({ filter: filterValue });			  
	// $(this).parent('li').addClass('active');
	// $(this).parent('li').siblings().removeClass('active');
});	

function downloadResume(){
	window.open(window.location + "files/resume_fakhrisyahab.pdf");
};