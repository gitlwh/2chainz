$(document).ready(function(){
	//automation
	$("#toablum").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#ablum").offset().top
	    }, 2000);
	});

	

	//place form
	$("#submitform").submit(
		function(e){
			e.preventDefault();
			$("#newsform").css("display","none");
			$("#thankswords").css("display","block");
		}
	);

});
//play music
	function playAudio() { 
	    $("#myAudio")[0].play(); 
	}
	function pauseAudio() { 
	    $("#myAudio")[0].pause(); 
	}
