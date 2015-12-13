$(document).ready(
	function(){

		var months = ["","January","February","March","April",
						"May","June","July","August","September",
						"October","November","December"]
		var date = new Date();
		var day = date.getDay();
		var month = date.getMonth();
		var year = date.getFullYear();
		$("h4").text(months[month]+ " " + day + ", " + year);

	});