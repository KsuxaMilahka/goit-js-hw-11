import { fetchImages } from './js/pixabay-api.js';
import { renderImageGallery, showError } from './js/render-functions.js';

const form = document.querySelector('.search-form');
const input = document.querySelector('input[name="query"]');
const gallery = document.querySelector('.gallery');

function showLoader() {
  document.getElementById('loader').style.display = 'block';
}

function hideLoader() {
  document.getElementById('loader').style.display = 'none';
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = input.value.trim();

  if (query === '') {
    showError('Please enter a search query.');
    return;
  }

  form.reset();

  showLoader(); // Показуємо лоадер перед завантаженням зображень

  fetchImages(query)
    .then(data => {
      hideLoader(); // Приховуємо лоадер після завантаження зображень
      if (data.hits.length === 0) {
        showError('Sorry, there are no images matching your search query. Please try again!');
        return;
      }
      renderImageGallery(data.hits);
    })
    .catch(error => {
      hideLoader(); // Приховуємо лоадер у випадку помилки
      showError('Something went wrong. Please try again later.');
      console.error(error);
    });
  
});