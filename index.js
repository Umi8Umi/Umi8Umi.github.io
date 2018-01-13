//noodles website - foodfoodfood
$(document).ready(function() {
	$('.h1').on('click', function() {
		$(this).html('おいしそう！！！');
	});
	/*console.log("we need to leave rn");*/
	$('h2').on('click', function() {
		$(this).css({
			"color":"#ea3838", 
			"font-weight": "700", 
			"line-height": "40px", 
			// "attribute":"value",
		});
	});
	$('h2').on('click', function() {
	  $(this).toggleClass('extra-cool-text');
	});
	$('.yummy').on('mouseover', function() {
	  $(this).animate({ "font-size" : "40px" }, 400)
	  .animate({ "letter-spacing" : "10px" }, 1000);
	});
	//$('h4').on('mouseover', function() {
	//  $(this).animate({ "letter-spacing":"10px", "font-size" : "20px" }, 1000)
	//  .animate({ "letter-spacing" : "10px", "font-size":"80px"}, 1000);
	//});
});