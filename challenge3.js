//functie aanmaken met GetAPI
function getAPIdata() {
	var url = "https://www.boredapi.com/api/activity/";

	// construct request
	var request = url;

	// get current weather
	fetch(request)

	// parse to JSON format
	.then(function(response) {
		return response.json();
	})

	/*.then(function(response) {
		// render activity
		onAPISucces(response);
	})*/

	// render random activity
	.then(function(response) {
		console.log(response.activity);
		document.getElementById('getActivity').value = response.activity;
		//document.getElementById("getActivity").addEventListener("click", getText);
		
		// render activity
		//onAPIdocument.getElementById("getActivity").addEventListener("click", getText) = response.activity;Succes(response);
	})
	
}

/*function onAPISucces(response) {
	// get type of weather in string format
	var activity = response[0].activity;
	document.getElementById('activitybox').value = activity;

	// render activity in DOM
	var toDoBox = document.getElementById('activitybox');
	toDoBox.innerHTML = activity;
}*/


function getText(){
	var url = "https://www.boredapi.com/api/activity/";
	fetch(url)
	.then(function(response){
		return response.json();
	})
	.then(function(response){
		console.log(response.activity);
	});
}

getAPIdata();

