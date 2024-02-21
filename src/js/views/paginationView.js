import View from './view';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }
  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const curPage = this._data.page;
    if (numPages > 1) {
      if (curPage === 1) return this._generateButtons('first', curPage);
      if (curPage < numPages) return this._generateButtons('middle', curPage);
      if (curPage === numPages) return this._generateButtons('end', curPage);
    } else {
      return '';
    }
    console.log(numPages);
  }
  _generateButtons(location, curPage) {
    const backBtn = `<button data-goto="${
      curPage - 1
    }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
          </button>`;
    const nextBtn = ` <button data-goto="${
      curPage + 1
    }" class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button> `;
    switch (location) {
      case 'first':
        return nextBtn;
      case 'middle':
        return backBtn + nextBtn;
      case 'end':
        return backBtn;
    }
  }
}
export default new PaginationView();
