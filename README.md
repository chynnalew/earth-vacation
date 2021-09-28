# Earth Vacation

#### This is a project created for Epicodus that uses APIs to create a custom Earth vacation for an alien.

#### By Chynna Lew, Ben Dunham, Melissa Schatz-Miller

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript 
* Jquery
* Node Package Manager
* Webpack
* Jest
* ESLint

## Description

This application allows the user to look up natural disasters on earth, then plan a vacation to go see them. The user can look up events by type, view their location on google maps, then book their vacation to visit the site. When the user books their trip, they are given a passport detailing the trip and providing them with a randomly generated human face to wear while they are on earth.
This project was created to display:
* properly making API calls
* parsing data from an API response
* handling errors and displaying messages when there are no results returned

## Setup/Installation Requirements
needs key for api.unsplash.com (save under EARTH_IMAGES_API_KEY)
needs key for  api.openweathermap.org (save under EARTH_API_KEY)

* Download or clone [this](https://github.com/chynnalew/earth-vacation) repository to your local machine
* Open the Currency-Converter folder in VS Code and open the terminal
* In the terminal, run the command '$ npm install' to install the needed plugins and packages
* Create a .env file in the root directory with the terminal command '$ touch .env'
* Go to the [Unsplash.com API](api.unsplash.com) site.
* * Follow the instructions to get a key for the API, then add it to the .env file in the format: EARTH_IMAGES_API_KEY=yourKeyHere
* * The key you receive will replace 'yourKeyHere'. It is very important that your key is preceded by the 'EARTH_IMAGES_API_KEY' text.
* Go to the [Open Weather Map API](api.openweathermap.org) site.
* * Follow the instructions to get a key for the API, then add it to the .env file in the format: EARTH_API_KEY=yourKeyHere
* * The key you receive will replace 'yourKeyHere'. It is very important that your key is preceded by the 'EARTH_API_KEY' text.
* Save the new file, then run the command '$ npm run build' in the terminal to build the webpack bundle
* To view the application, either run the command '$ npm run start', or open the index.html file located in the dist folder.

## Known Bugs

* No known bugs
* 

## License
[MIT](https://opensource.org/licenses/MIT) 2021

## Contact Information
* Chynna Lew <chynnalew@yahoo.com>
* Ben Dunham <bendunhampdx@gmail.com>
* Melissa Schatz-Miller <melissa.scmi@gmail.com> 