import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import WeatherService from './js/earthWeather.js';
import {EarthImage} from './js/earthImages.js';
import {EarthCategory, EarthRandom, getCoords} from './js/earthEvents.js';
// import {Disguise} from './js/randoHuman.js';

function weather(lat, lon) {
  let promise = WeatherService.getWeather(lat, lon);
  promise.then(function(response) {
    const body = JSON.parse(response);
    $('#destinationView').show();
    $('.showHumidity').text(`The humidity is ${body.main.humidity}%`);
    $('.showTemp').text(`The temperature in fahrenheit is ${body.main.temp} degrees.`);
  }, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error}`);
  }); 
}
function map(lat, lon) {
  $('#placeholder').html(`<iframe width="450" height="250" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_API_KEY}&q=${lat + "," + lon}&zoom=7" allowfullscreen></iframe>`);
}
function getPassport(image) {
  $("#passport").show();
  const query = image;
  getImage(query);
  name();
  $('.tripFace').html(`<img src="https://thispersondoesnotexist.com/image" height="300" />`);
  $('.passportName').html(name);
}

function getImage(image) {
  const query = image;
  let imgPromise = EarthImage.getImg(query);
  imgPromise.then(function(response) {
    const imgBody = JSON.parse(response);
    $('.tripImg').html(`<img src="${imgBody.results[0].urls.small}" />`);
  });
}

function name() {
  let randomWords = require('random-words');
  let name = randomWords({exactly:1, wordsPerString:2}).toString();
  return name;
}

$(document).ready(function() { 

  $('#categoryButton').click(function() {
    $('.events1').fadeIn(2000);
    let category = $('#categories').val();
    let promise = EarthCategory.getEvent(category);
    $('.cat').show();
    promise.then(function(response) {
      const body = JSON.parse(response);
      const categoryCoord = getCoords(body);
      $('#event1').html(`${body.events[0].title}`);
      $('#event2').html(`${body.events[1].title}`);
      $('#event3').html(`${body.events[2].title}`);
      $('#event4').html(`${body.events[3].title}`);
      $('#event5').html(`${body.events[4].title}`);
  
      $('#catBut1').click(function(){
        const lat = categoryCoord[0][1];
        const lon = categoryCoord[0][0];
        map(lat, lon);
        weather(lat, lon);
      });  
      $('#catBut2').click(function(){
        const lat = categoryCoord[1][1];
        const lon = categoryCoord[1][0];
        map(lat, lon);
        weather(lat, lon);
      });
      $('#catBut3').click(function(){
        const lat = categoryCoord[2][1];
        const lon = categoryCoord[2][0];
        map(lat, lon);
        weather(lat, lon);
      });
      $('#catBut4').click(function(){
        const lat = categoryCoord[3][1];
        const lon = categoryCoord[3][0];
        map(lat, lon);
        weather(lat, lon);
      });
      $('#catBut5').click(function(){
        const lat = categoryCoord[4][1];
        const lon = categoryCoord[4][0];
        map(lat, lon);
        weather(lat, lon);
      });
      $('#catButGo1').click(function(){
        const image = body.events[0].categories[0].title;
        getPassport(image);
        $('#endScreenHide').hide();
        $('#again').show();
      });
      $('#catButGo2').click(function(){
        const image = body.events[1].categories[0].title;
        getPassport(image);
        $('#endScreenHide').hide();
        $('#again').show();
      });
      $('#catButGo3').click(function(){
        const image = body.events[2].categories[0].title;
        getPassport(image);
        $('#endScreenHide').hide();
        $('#again').show();
      });
      $('#catButGo4').click(function(){
        const image = body.events[3].categories[0].title;
        getPassport(image);
        $('#endScreenHide').hide();
        $('#again').show();
      });
      $('#catButGo5').click(function(){
        const image = body.events[4].categories[0].title;
        getPassport(image);
        $('#endScreenHide').hide();
        $('#again').show();
      });
    });
  });
  
  $('#recEvents').click(function() {
    $('.rando').show();
    $('.events2').fadeIn(2000);
    let promise2 = EarthRandom.getEvent();
    promise2.then(function(response) {
      const body = JSON.parse(response);
      const randoCoord = getCoords(body);
      $('#random1').html(`${body.events[0].title} <br> Category: ${body.events[0].categories[0].title}`);
      $('#random2').html(`${body.events[1].title} <br> Category: ${body.events[1].categories[0].title}`);
      $('#random3').html(`${body.events[2].title} <br> Category: ${body.events[2].categories[0].title}`);
      $('#random4').html(`${body.events[3].title} <br> Category: ${body.events[3].categories[0].title}`);
      $('#random5').html(`${body.events[4].title} <br> Category: ${body.events[4].categories[0].title}`);
      $('#randoBut1').click(function(){
        const lat = randoCoord[0][1];
        const lon = randoCoord[0][0];
        map(lat, lon);
        weather(lat, lon);
      });
      $('#randoBut2').click(function(){
        const lat = randoCoord[1][1];
        const lon = randoCoord[1][0];
        map(lat, lon);
        weather(lat, lon);
      });
      $('#randoBut3').click(function(){
        const lat = randoCoord[2][1];
        const lon = randoCoord[2][0];
        map(lat, lon);
        weather(lat, lon);
      });
      $('#randoBut4').click(function(){
        const lat = randoCoord[3][1];
        const lon = randoCoord[3][0];
        map(lat, lon);
        weather(lat, lon);
      });
      $('#randoBut5').click(function(){
        const lat = randoCoord[4][1];
        const lon = randoCoord[4][0];
        map(lat, lon);
        weather(lat, lon);
      });
      $('#randoButGo1').click(function(){
        const image = body.events[0].categories[0].title;
        getPassport(image);
        $('#endScreenHide').hide();
        $('#again').show();
      });
      $('#randoButGo2').click(function(){
        const image = body.events[1].categories[0].title;
        getPassport(image);
        $('#endScreenHide').hide();
        $('#again').show();
      });
      $('#randoButGo3').click(function(){
        const image = body.events[2].categories[0].title;
        getPassport(image);
        $('#endScreenHide').hide();
        $('#again').show();
      });
      $('#randoButGo4').click(function(){
        const image = body.events[3].categories[0].title;
        getPassport(image);
        $('#endScreenHide').hide();
        $('#again').show();
      });
      $('#randoButGo5').click(function(){
        const image = body.events[4].categories[0].title;
        getPassport(image);
        $('#endScreenHide').hide();
        $('#again').show();
      });
    });
  });

  // $("#getImg").click(function() {
  //   $("#passport").show();
  //   const query = $("#searchTerm").val();
  //   $("#searchTerm").val("");
  //   let imgPromise = EarthImage.getImg(query);
  //   imgPromise.then(function(response) {
  //     const imgBody = JSON.parse(response);
  //     $('.tripImg').html(`<img src="${imgBody.results[0].urls.small}" />`);
  //     $('.tripFace').html(`<img src="https://thispersondoesnotexist.com/image" width="400" />`);
  //   });
  // });
});
$('#again').click(function() {
  window.location.reload();
});
let randomWords = require('random-words');
console.log((randomWords({exactly:1, wordsPerString:2})).toString());