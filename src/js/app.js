console.log('did grunt work?');

$("#distanceHelper > li > a").click(function(){
		distance = $(this).attr('data-unit');
		$("#distance-unit").val(distance);
});

// $("#distanceUnit > li > a").click(function(){
// 		unit = $(this).attr('data-unit');
// 		$(this).parent().parent().parent().find('button').text(unit).append(' <span class="caret"></span>');
// });

$(".unit-select > li > a").click(function(){
		unit = $(this).attr('data-unit');
		console.log(unit);
		$(this).parent().parent().parent().find('button').text(unit).append(' <span class="caret"></span>');
		$(this).parent().parent().parent().find('.hiddenUnit').val(unit);
});


// fix for console error
// https://github.com/jasny/bootstrap/issues/121#issuecomment-22864443
$.browser = {
    msie : (navigator.appName == "Microsoft Internet Explorer") ? true : false
};
