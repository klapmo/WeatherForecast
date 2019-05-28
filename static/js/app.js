// all imports at top, import config to access api key
import Config from '../../config.js';


// create an instance of the Config class
let config = new Config();


// render the navbar into the header
$.get('../../components/header.html', function(res) {
  $('#nav').html(res);
});

/*The above configuration steps have been completed for you.
Your only task before creating the functionality for each section below is to add 
your API key from http://openweathermap.org*/



$("#button-sub").click(function(){
  let city = $("#city").val()

  let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${config.getKey()}&units=imperial`
  $.get( URL, function( data ) {
    console.log(data);
    //Access form data here
      let high = data.main.temp_max
      let low = data.main.temp_min
      let forecast = data.weather[0].main
      let humidity = data.main.humidity
      $("#high").append(`<p>${high}</p>`)
      $("#low").append(`<p>${low}</p>`)
      $("#forecast").append(`<p>${forecast}</p>`)
      $("#humidity").append(`<p>${humidity}</p>`)
  });
})

// TODO: create a function that logs the city entered in the form


//TODO: check to see if the submit button is pressed, if it is, stop the event from refreshing the page, and call searchCity()



//TODO: make search information not appear until they submit a city
//HINT: You will need to use CSS and JQuery to do this
