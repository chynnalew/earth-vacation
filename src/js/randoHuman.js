export class Disguise {
  static getFace() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://thispersondoesnotexist.com/image`;
      request.onload = function() {
        if(this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
