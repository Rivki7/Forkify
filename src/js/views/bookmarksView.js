import View from './view';
import icons from 'url:../../img/icons.svg';

class Bookmarks extends View {
  _parentElement = document.querySelector('.bookmark__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it :)';
  _message = '';

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join('');
  }
  _generateMarkupPreview(result) {
    const recipeId = window.location.hash.slice(1);
    const { id, image, title, publisher } = result;
    return `
    <li class="preview">
            <a class="preview__link ${
              id === recipeId ? 'preview__link--active' : ''
            }" href=#${id}>
              <figure class="preview__fig">
                <img src=${image} alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${title}</h4>
                <p class="preview__publisher">${publisher}</p>
                <div class="preview__user-generated">
                  <svg>
                    <use href="${icons}#icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
          </li>`;
  }
}

export default new Bookmarks();
