import { fetchImages } from './js/pixabay-api.js';
import { renderImageGallery, showError } from './js/render-functions.js';

const form = document.querySelector('.search-form');
const input = document.querySelector('input[name="query"]');
const gallery = document.querySelector('.gallery');
const loader = document.getElementById('loader');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = input.value.trim();

  if (query === '') {
    showError('Please enter a search query.');
    return;
  }

   loader.style.display = 'block';

  fetchImages(query)
    .then(data => {
      gallery.innerHTML = '';

      if (data.hits.length === 0) {
        showError('Sorry, there are no images matching your search query. Please try again!');
        return;
      }
      renderImageGallery(data.hits);
    })
    .catch(() => {
      showError('Something went wrong. Please try again later.');
    })
    .finally(() => {
       loader.style.display = 'none';
    });
});