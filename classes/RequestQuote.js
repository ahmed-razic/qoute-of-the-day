class RequestQoute {
  constructor() {
    this.baseUrl = 'https://quotes.rest/qod.json?category=';
    this.prepare = new PrepareForDom();
  }

  getQoute(category) {
    const apiEndPoint = this.baseUrl + category;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // Access the result here
        this.prepare.prepareData(this.response.contents.quotes[0]);
      }
    };
    xhttp.open('GET', apiEndPoint, true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
    xhttp.responseType = 'json';
    xhttp.send();
  }
}
