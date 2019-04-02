//Maak functie weer
function getAPIdataWeather() {
var url = "https://api.openweathermap.org/data/2.5/weather?q=The Hague";
var apiKey = "a99d5aa817d2e9a1e613dfc5b9465eb7";

// Bouw verzoek

	// Krijg weervoorspelling
	fetch(url + "&appid=" + apiKey).then(function(response){
		if (!response.ok) {
			throw Error(response.statusText);
		}
		//Zoek naar Json formaat
		return response.json();

	})

	// Render weer per dag
	.then(function(response) {
		console.log(response);
		// Render weeromstandigheden
		onAPISucces(response);
	})

	// Vang fout
	.catch(function (error) {
		updateUIError();
		console.error('Request failed', error);
	});
}

function onAPISucces(response) {
	var weather= response.weather;
	var weatherBox = document.getElementById('weather');

	var condition = response.weather[0].main;
	var degC = response.main.temp - 273.15;
	var degCInt = Math.floor(degC);
	var degF = degC * 1.8 + 32;
	var degFInt = Math.floor(degF);
	var weatherBox = document.getElementById("weather");
	weatherBox.innerHTML = "<p>" + degCInt + "&#176; C / " + degFInt + "&#176; F</p><p>" + condition + "</p>";
	}
//Maak error
function updateUIError() {
	var weatherBox = document.getElementById('weather');
	weatherBox.className = 'hidden';
	}																												

getAPIdataWeather();