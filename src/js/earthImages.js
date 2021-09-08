export class EarthImage {  
  static getImg(query) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://api.unsplash.com/search/photos/?query=${query}&client_id=${process.env.EARTH_IMAGES_API_KEY}`;
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