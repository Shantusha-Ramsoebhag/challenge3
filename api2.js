//functie aanmaken met GetAPI
function getAPIdataEvent() {
	var url = "https://ckan.dataplatform.nl/api/action/datastore_search?resource_id=74ce8c18-02f1-4972-8ab4-b0e86b6b1336&q=feest";
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
		console.log(response.result.records[2,8]);
		// render activity
		//onAPISucces(response);
	})
}


getAPIdataEvent();