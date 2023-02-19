// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import mixitup from 'mixitup'
import rate from 'rateyo'
import slick from 'slick-carousel'

document.addEventListener('DOMContentLoaded', () => {

		var mixer = mixitup('.products__inner-box')

		$(function() {
			$('.rate-star').rateYo({
				rating: 5,
				readOnly: true,
				starWidth: "13px"
			})
		})
		$('.product-slider__inner').slick({
			slidesToShow: 4,
			slidesToScroll: 2,
			dots: true,
			arrows: false
		})

})
