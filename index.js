const baseUrl = 'https://quotes.rest/qod.json?category=';
const domElements = new DomElements();

let selectedCategory = 'inspire';

function getQoute(category) {
  const apiEndPoint = baseUrl + category;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        prepareData(this.response.contents.quotes[0]);
      } else {
        domElements.showError('There was an error');
      }
    }
  };
  xhttp.open('GET', apiEndPoint, true);
  xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
  xhttp.responseType = 'json';
  xhttp.send();
}

function prepareData(data) {
  domElements.setDisabledState(false);
  const { author, background, title, quote } = data;
  displayResults(author, background, title, quote);
}

function displayResults(author, background, title, quote) {
  domElements.title.innerHTML = title;
  domElements.quote.innerHTML = quote;
  domElements.author.innerHTML = author;
  domElements.quoteContainer.style.backgroundImage = `url(${background})`;
}

domElements.category.addEventListener('change', e => setCategory(e));

function setCategory(e) {
  selectedCategory = e.target.value;
}

domElements.button.addEventListener('click', () => {
  domElements.setDisabledState(true);
  getQoute(selectedCategory);
});
