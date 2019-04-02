//Functie aanmaken met GetAPI
function getAPIdata() {
	var url = "https://www.boredapi.com/api/activity/";

	// Bouw verzoek
	var request = url;

	// Krijg willekeurig activiteit 
	fetch(request)

	// Zoek naar Json formaat
	.then(function(response) {
		return response.json();
	})

	// Geef willekeurig evenement weer
	.then(function(response) {
		console.log(response.activity);
		document.getElementById('getActivity').value = response.activity;
	})

	// Vang fout
	.catch(function (error) {
		updateUIErroractiviteit();
		console.error('Request failed', error);
	});
	
}

//Functie tekst
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
//Maak error
function updateUIErroractiviteit() {
	var activityBox = document.getElementById('getActivity');
	activityBox.className = 'hidden';
	}	

getAPIdata();

