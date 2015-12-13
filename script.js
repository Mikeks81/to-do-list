$(document).ready(
	function(){

		var months = ["January","February","March","April",
						"May","June","July","August","September",
						"October","November","December"]
		var date = new Date(); // new date instance in numerical form
		var day = date.getDate(); // numerical form of day of the month
		var month = date.getMonth(); // numerical form of month of the year
		var year = date.getFullYear(); // full 4 digit numerical form of year
		$("h4").text(months[month]+ " " + day + ", " + year); //the value of month displays item in months Array to screen

		$("#add_button").on('click',
			function(e){
				e.preventDefault();
				var id = "item" 
				var user_input = $("#input").val();
				$("#list").append('<input type="checkbox">' + user_input + '</input></br>');
				

		});		

});