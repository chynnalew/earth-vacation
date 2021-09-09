# (Application Name)

#### (Brief Description of Application)

#### By (Your Name Here)

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## Description

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

## Known Bugs

* _Any known issues_
* _should go here_

## License

## Contact Information

## General Idea:


STUFF FOR THURSDAY:
* Return message when user selects event that is not currently happening
* link event coord with map coord
* link catagories with image search
* style the hell out this 
* link weather to coord.
* add random person generator 





///
* Same Day Martian vacation service: visit earth
* Natural disasters/weather as tourist attractions
* Return Trip Passport/Manifest: show your human avatar, your destination, etc.

APIs we might use:
https://thispersondoesnotexist.com/ <= random human face
https://eonet.sci.gsfc.nasa.gov/docs/v2.1 <= earth natural events
https://mars.nasa.gov/insight/weather/ <= mars weather?
https://ccmc.gsfc.nasa.gov/donki/ <= space weather
http://epic.gsfc.nasa.gov/ <= images to use for fun when you hit go or something

http://worldtimeapi.org/
-allow the user to select a timezone and view the current day and time on earth

https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories
- allow the user to browse current natural events by category

https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/10?status=open&limit=5

https://eonet.sci.gsfc.nasa.gov/how-to-guide#full-how-to-guide

// API Stuff
1. Call EONET API to find available "attractions"
      Category:
      6- drought
      7- dust and haze
      8- wildfires
      9- floods
      10- severe storms
      12- volcanoes
      13- water color
      14- landslides
      15- sea and lake ice
      16- earthquakes
      17- snow
      18- temperature extremes
      19- manmade
  -allow the user to choose their category and view x# of current results
    Example call:
    https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/19?status=open&limit=5
  -provide the user with a few random suggested "vacations"
    Example call:
    https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?status=open&limit=5


2. Call OpenWeather API to find the weather at that attraction's location
3. *Optional: Call Unsplash API to find image to match attraction
4. *Optional: Call Insight API to find the weather on Mars--for your trip to the transporter
5. Call thispersondoesnotexist API to get a disguise

// Other Stuff
6. Compile & Present Trip Manifest, including destination [with event image??], weathers, and your new face