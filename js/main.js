$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 3.5,
		slidesToScroll: 2,
		initialSlide: 1,
  });

	$('.accordion').accordion({
		active: true,
		collapsible: true,
		heightStyle: 'content',
		header: '> .accordion-item > .accordion-header'
	});
});