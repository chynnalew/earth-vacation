export class EarthCategory {  
  static getEvent(category) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/${category}?status=open&limit=5`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}

export class EarthRandom {  
  static getEvent() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?status=open&limit=5`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}

// 1. Call EONET API to find available "attractions"
//       Category:
//       6- drought
//       7- dust and haze
//       8- wildfires
//       9- floods
//       10- severe storms
//       12- volcanoes
//       13- water color
//       14- landslides
//       15- sea and lake ice
//       16- earthquakes
//       17- snow
//       18- temperature extremes
//       19- manmade
//   -allow the user to choose their category and view x# of current results
//     Example call:
//     https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/19?status=open&limit=5
//   -provide the user with a few random suggested "vacations"
//     Example call:
//     https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?status=open&limit=5