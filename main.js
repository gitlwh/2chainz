$(document).ready(function(){
	//automation
	$("#toablum").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#ablum").offset().top
	    }, 2000);
	});

	//play music
	var x = document.getElementById("myAudio"); 
	function playAudio() { 
	    x.play(); 
	}
	function pauseAudio() { 
	    x.pause(); 
	}

	//place form
	$("#submitform").submit(
		function(e){
			e.preventDefault();
			$("#newsform").css("display","none");
			$("#thankswords").css("display","block");
		}
	);

}) 