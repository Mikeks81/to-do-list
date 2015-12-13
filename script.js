$(document).ready(
	function(){

		var months = ["January","February","March","April",
						"May","June","July","August","September",
						"October","November","December"]
		var date = new Date(); // new date instance in numerical form
		var day = date.getDate(); // numerical form of day of the month
		var month = date.getMonth(); // numerical form of month of the year
		var year = date.getFullYear(); // full 4 digit numerical form of year
		var date_of_list = (months[month]+ " " + day + ", " + year) // instance date of list
		$("h4").text(date_of_list); //the value of month displays item in months Array to screen

		$("#add_button").on('click', // on add_button click 
			function(e){
				e.preventDefault();  // prevents add button from refreshing page
				var counter =  0
				var id = ("item" + counter) // unique id's for checkboxes
				var user_input = $("#input").val(); // value from input field
				

				if  (user_input === ""){ // if #input is blank
					alert("Enter text!");
					return false
				}
				else {
				$("#list").append('<input type="checkbox">' + user_input + '</input></br>'); // adds new checkbox 
				counter++ // trying to add to var counter 
				}

				$("#list").find("input").attr("id",id);//trying to get unique id's to inpputs
				$("#input").val("");// clears #input

		});		


		$("#delete_button").on("click", 
			function(e){
				e.preventDefault(); // cancel page refresh on click
				console.log("GOT HERE1");
				var find_input = $("#list").find("input") // finds all inputs created in #list
				var selected_inputs = $("#list").find("input").prop("checked") //directs to #list inputs that are true
				if (selected_inputs == true) { 
					console.log("GOT HERE2");
					var answer = prompt("Sare you sure you want to delete items? Type yes or no");
						if (answer == "yes"){ 
							console.log("GOT HERE3");
							$(selected_inputs).hide(); // doesn't hide anything even the first selection that is recognized as true.
						}
				}	


		});
});