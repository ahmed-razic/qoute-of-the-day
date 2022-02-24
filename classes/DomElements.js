class DomElements {
  constructor() {
    this.quoteContainer = document.querySelector('#quote-container');
    this.category = document.querySelector('#category');
    this.title = document.querySelector('#title');
    this.quote = document.querySelector('#quote');
    this.author = document.querySelector('#author');
    this.button = document.querySelector('#button');
    this.error = document.querySelector('#error');
    this.loader = document.querySelector('#button-loader');
    this.ready = document.querySelector('#button-ready');
  }

  setDisabledState(isDisabled) {
    if (isDisabled) {
      this.button.setAttribute('disabled', 'disabled');
      this.loader.style.display = 'block';
      this.ready.style.display = 'none';
    } else {
      this.button.removeAttribute('disabled');
      this.loader.style.display = 'none';
      this.ready.style.display = 'block';
    }
  }

  showError(error) {
    this.error.style.display = 'block';
    this.error.innerHTML = error;

    setTimeout(() => {
      this.error.style.display = 'none';
      this.error.innerHTML = '';
      this.setDisabledState(false);
    }, 3000);
  }
}
