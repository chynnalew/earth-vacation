import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import WeatherService from './js/earthWeather.js';
import {EarthImage} from './js/earthImages.js';
import {EarthCategory, EarthRandom, getCoords} from './js/earthEvents.js';
// import {Disguise} from './js/randoHuman.js';

// function clearFields() {
//   $('#location').val("");
//   $('.showErrors').text("");
//   $('.showHumidity').text("");
//   $('.showTemp').text("");
// }

$(document).ready(function() {
  // $('#weatherLocation').click(function() {
  //   let city = $('#location').val();
  //   clearFields();
  //   let promise = WeatherService.getWeather(city);
  //   promise.then(function(response) {
  //     const body = JSON.parse(response);
  //     $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
  //     $('.showTemp').text(`The temperature in fahrenheit is ${body.main.temp} degrees.`);
  //   }, function(error) {
  //     $('.showErrors').text(`There was an error processing your request: ${error}`);
  //   });
  // });
 

  $('#categoryButton').click(function() {
    let category = $('#categories').val();
    let promise = EarthCategory.getEvent(category);
    promise.then(function(response) {
      const body = JSON.parse(response);
      const categoryCoord = getCoords(body);
      $('#event1').html(`Event: ${body.events[0].title} <br> Category: ${body.events[0].categories[0].title}`);
      $('#event2').html(`Event: ${body.events[1].title} <br> Category: ${body.events[1].categories[0].title}`);
      $('#event3').html(`Event: ${body.events[2].title} <br> Category: ${body.events[2].categories[0].title} `);
      $('#event4').html(`Event: ${body.events[3].title} <br> Category: ${body.events[3].categories[0].title}`);
      $('#event5').html(`Event: ${body.events[4].title} <br> Category: ${body.events[4].categories[0].title} `);
      
      $('#catBut1').click(function(){
        let lat = categoryCoord[0][1];
        let lon = categoryCoord[0][0];
        console.log(lat, lon);
        $('#placeholder').html(`<iframe width="450" height="250" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_API_KEY}&q=${lat + "," + lon}&zoom=7" allowfullscreen></iframe>`);

        let promise = WeatherService.getWeather(lat, lon);
        promise.then(function(response) {
          const body = JSON.parse(response);
          $('.showHumidity').text(`The humidity is ${body.main.humidity}%`);
          $('.showTemp').text(`The temperature in fahrenheit is ${body.main.temp} degrees.`);
        }, function(error) {
          $('.showErrors').text(`There was an error processing your request: ${error}`);
        });
        $('#catBut2').click(function(){
          $('#placeholder').html(`<iframe width="450" height="250" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_API_KEY}&q=${categoryCoord[1][1] + "," + categoryCoord[1][0]}&zoom=7" allowfullscreen></iframe>`);
        });
        $('#catBut3').click(function(){
          $('#placeholder').html(`<iframe width="450" height="250" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_API_KEY}&q=${categoryCoord[2][1] + "," + categoryCoord[2][0]}&zoom=7" allowfullscreen></iframe>`);
        });
        $('#catBut4').click(function(){
          $('#placeholder').html(`<iframe width="450" height="250" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_API_KEY}&q=${categoryCoord[3][1] + "," + categoryCoord[3][0]}&zoom=7" allowfullscreen></iframe>`);
        });
        $('#catBut5').click(function(){
          $('#placeholder').html(`<iframe width="450" height="250" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_API_KEY}&q=${categoryCoord[4][1] + "," + categoryCoord[4][0]}&zoom=7" allowfullscreen></iframe>`);
        });
      });
    });

    $('#recEvents').click(function() {
      let promise2 = EarthRandom.getEvent();
      promise2.then(function(response) {
        const body = JSON.parse(response);
        const randoCoord = getCoords(body);
        $('#random1').html(`Event: ${body.events[0].title} <br> Category: ${body.events[0].categories[0].title}`);
        $('#random2').html(`Event: ${body.events[1].title} <br> Category: ${body.events[1].categories[0].title}`);
        $('#random3').html(`Event: ${body.events[2].title} <br> Category: ${body.events[2].categories[0].title}`);
        $('#random4').html(`Event: ${body.events[3].title} <br> Category: ${body.events[3].categories[0].title}`);
        $('#random5').html(`Event: ${body.events[4].title} <br> Category: ${body.events[4].categories[0].title}`);
        $('#randoBut1').click(function(){
          $('#placeholder').html(`<iframe width="450" height="250" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_API_KEY}&q=${randoCoord[0][1] + "," + randoCoord[0][0]}&zoom=7" allowfullscreen></iframe>`);
        });
        $('#randoBut2').click(function(){
          $('#placeholder').html(`<iframe width="450" height="250" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_API_KEY}&q=${randoCoord[1][1] + "," + randoCoord[1][0]}&zoom=7" allowfullscreen></iframe>`);
        });
        $('#randoBut3').click(function(){
          $('#placeholder').html(`<iframe width="450" height="250" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_API_KEY}&q=${randoCoord[2][1] + "," + randoCoord[2][0]}&zoom=7" allowfullscreen></iframe>`);
        });
        $('#randoBut4').click(function(){
          $('#placeholder').html(`<iframe width="450" height="250" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_API_KEY}&q=${randoCoord[3][1] + "," + randoCoord[3][0]}&zoom=7" allowfullscreen></iframe>`);
        });
        $('#randoBut5').click(function(){
          $('#placeholder').html(`<iframe width="450" height="250" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_API_KEY}&q=${randoCoord[4][1] + "," + randoCoord[4][0]}&zoom=7" allowfullscreen></iframe>`);
        });
      });
    });

    $("#getImg").click(function() {
      const query = $("#searchTerm").val();
      $("#searchTerm").val();
      let imgPromise = EarthImage.getImg(query);
      imgPromise.then(function(response) {
        const imgBody = JSON.parse(response);
        $('.tripImg').html(`<img src="${imgBody.results[0].urls.small}" />`);
        $('.tripFace').html(`<img src="https://thispersondoesnotexist.com/image"/>`);
      });
    });
  });
});