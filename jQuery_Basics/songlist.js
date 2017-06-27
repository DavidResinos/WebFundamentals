//alert("kid");

$(document).ready(function(){

	$("#add").on("click", function(){
		var name = $("#name").val();
		console.log(name);

		var listItem = "<li>" + name + "</li>";

		$("#name List").append(listItem);

		$("#name").val("");

	});

});