jQuery(document).ready(function(){
	alert("Hey Kid");

	$("#hide").click(function(){
		$("#Image").hide();
	});
});

jQuery(document).ready(function(){
	$("#show").click(function(){
		$("#Image").show();
	});
});

jQuery(document).ready(function(){
	$("#explode").click(function(){
		$("#Image").hide("explode", {pieces: 16}, 200)();
	});
});

jQuery(document).ready(function(){
	$("#fadeIn").click(function(){
		$("#Image").fadeIn("5");
	});
});

jQuery(document).ready(function(){
	$("#fadeOut").click(function(){
		$("#Image").fadeOut("5");
	});
});

jQuery(document).ready(function(){
	$("#UpDown").click(function(){
		$("#Image").UpDown("5");
	});
});