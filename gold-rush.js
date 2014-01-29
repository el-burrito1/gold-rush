$(document).ready(function(){

$('.main-container').click(function(){
	var gold = $('<img class="gold-container" src = "http://wells.entirety.ca/images/cartoon2.gif">');
	var horizontal = event.pageX;
	var vertical = event.pageY;
	gold.css('top', vertical - 25 + 'px').css('left' , horizontal - 20 + 'px');
	$('.main-container').append(gold)
});


});