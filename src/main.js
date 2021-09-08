import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import WeatherService from './js/earthWeather.js';
import {EarthImage} from './js/earthImages.js';
import {EarthCategory, EarthRandom} from './js/earthEvents.js';
// import {Disguise} from './js/randoHuman.js';

function clearFields() {
  $('#location').val("");
  $('.showErrors').text("");
  $('.showHumidity').text("");
  $('.showTemp').text("");
}

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    clearFields();
    let promise = WeatherService.getWeather(city);
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
      $('.showTemp').text(`The temperature in fahrenheit is ${body.main.temp} degrees.`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
 

  $('#categoryButton').click(function() {
    let category = $('#categories').val();
    let promise = EarthCategory.getEvent(category);
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('#event1').html(`Event: ${body.events[0].title} <br> Category: ${body.events[0].categories[0].title}  <br> Location: ${body.events[0].geometries[0].coordinates}`);
      $('#event2').html(`Event: ${body.events[1].title} <br> Category: ${body.events[1].categories[0].title}  <br> Location: ${body.events[1].geometries[0].coordinates}`);
      $('#event3').html(`Event: ${body.events[2].title} <br> Category: ${body.events[2].categories[0].title}  <br> Location: ${body.events[2].geometries[0].coordinates}`);
      $('#event4').html(`Event: ${body.events[3].title} <br> Category: ${body.events[3].categories[0].title}  <br> Location: ${body.events[3].geometries[0].coordinates}`);
      $('#event5').html(`Event: ${body.events[4].title} <br> Category: ${body.events[4].categories[0].title}  <br> Location: ${body.events[4].geometries[0].coordinates}`);
    });
  });

  $('#recEvents').click(function() {
    let promise2 = EarthRandom.getEvent();
    promise2.then(function(response) {
      const body = JSON.parse(response);
      $('#random1').html(`Event: ${body.events[0].title} <br> Category: ${body.events[0].categories[0].title}  <br> Location: ${body.events[0].geometries[0].coordinates}`);
      $('#random2').html(`Event: ${body.events[1].title} <br> Category: ${body.events[1].categories[0].title}  <br> Location: ${body.events[1].geometries[0].coordinates}`);
      $('#random3').html(`Event: ${body.events[2].title} <br> Category: ${body.events[2].categories[0].title}  <br> Location: ${body.events[2].geometries[0].coordinates}`);
      $('#random4').html(`Event: ${body.events[3].title} <br> Category: ${body.events[3].categories[0].title}  <br> Location: ${body.events[3].geometries[0].coordinates}`);
      $('#random5').html(`Event: ${body.events[4].title} <br> Category: ${body.events[4].categories[0].title}  <br> Location: ${body.events[4].geometries[0].coordinates}`);
    });
  });

  $("#getImg").click(function() {
    const query = $("#searchTerm").val();
    $("#searchTerm").val();
    let imgPromise = EarthImage.getImg(query);
    imgPromise.then(function(response) {
      const imgBody = JSON.parse(response);
      $('.tripImg').html(`<img src="${imgBody.results[0].urls.small}" />`);
    });
  });

  $('#placeholder').html(`<iframe width="450" height="250" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_API_KEY}&q=45.51761448618247,-122.68523500253937" allowfullscreen></iframe>`);
  console.log(process.env.GOOGLE_API_KEY);

});