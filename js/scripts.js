$(document).ready(function(){

	$('body').scrollspy({ target: '.navbar' })


	$(".progress-element").each(function() {
	    $(this).waypoint(function() {
	    var progressBar = $(".progress-bar");
	    progressBar.each(function(indx){
	        $(this).css("width", $(this).attr("aria-valuenow") + "%");
	        });
	    }, {
	        triggerOnce: true,
	        offset: 'bottom-in-view'
	    });
	});

	$(".progress-element1").each(function() {
        var progressBar = $(".progress-bar");
        progressBar.each(function(indx){
          $(this).css("width", $(this).attr("aria-valuenow") + "%");
        });
      });
 
	// hide our element on page load
	$('#fadeIn').css('opacity', 0);

	$('#fadeIn').waypoint(function() {
	  $('#fadeIn').addClass('fadeInLeft');
	}, { offset: 'bottom-in-view' });
	
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	}) 
});