$(function () {
	$('.blog__slider').slick({
		arrows: false,
		dots: true
	})
	$('.burger__menu').on('click', function () {
		$('.menu__list').toggleClass('menu__list--active');
	});
	var mixer = mixitup('.gallery__images');
});