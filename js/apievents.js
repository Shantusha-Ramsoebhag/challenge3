//Functie aanmaken met GetAPI
function getAPIdataEvent() {
	var url = "https://ckan.dataplatform.nl/api/action/datastore_search?resource_id=74ce8c18-02f1-4972-8ab4-b0e86b6b1336&q=feest";
	// Bouw verzoek
	var request = url;

	// Krijg evenement
	fetch(request)

	// Zoek naar Json formaat
	.then(function(response) {
		return response.json();
	})

	// Geef willekeurig evenement weer
	.then(function(response) {
		console.log(response);
		// Evenement renderen
		onAPISuccesEvent(response);
	})

	// Vang fout
	.catch(function (error) {
		updateUIErrorEvent();
		console.error('Request failed', error);
	});
}

//Functie api 
function onAPISuccesEvent(response) {
	var eventBox = document.getElementById('events');
	
	for(var i=0; i<response.result.records.length; i++){
		console.log(response.result.records[i]);
		eventBox.innerHTML += '<ul>'
							 + '<li>'+response.result.records[i].Evenement+ response.result.records[i].Dag +'</ul>'
							 + '</ul>';
		}
	}
//Maak error
function updateUIErrorEvent() {
	var eventsBox = document.getElementById('events');
	eventsBox.className = 'hidden';
	}

getAPIdataEvent();