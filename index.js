const baseUrl = 'https://quotes.rest/qod.json?category=';
const domElements = new DomElements();

let selectedCategory = 'love';
domElements.category.addEventListener('change', e => setCategory(e));
function setCategory(e) {
  selectedCategory = e.target.value;
  console.log(selectedCategory);
}

function getQoute(category) {
  const apiEndPoint = baseUrl + category;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Access the result here
      prepareData(this.response.contents.quotes[0]);
      console.log(this.response.contents.quotes[0]);
    }
  };
  xhttp.open('GET', apiEndPoint, true);
  xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
  xhttp.responseType = 'json';
  xhttp.send();
}

function prepareData(data) {
  const { author, background, title, quote } = data;
  displayResults(author, background, title, quote);
}

function displayResults(author, background, title, quote) {
  domElements.title.innerHTML = title;
  domElements.quote.innerHTML = quote;
  domElements.author.innerHTML = author;
  domElements.quote_container.getElementsByClassName('quote__container::before').background-image = background;
}

domElements.button.addEventListener('click', () => getQoute(selectedCategory));
