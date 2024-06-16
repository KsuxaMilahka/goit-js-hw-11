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

  gallery.innerHTML = ''; 
  loader.style.display = 'block'; 

  fetchImages(query)
    .then(data => {
      loader.style.display = 'none'; 

      if (data.hits.length === 0) {
        gallery.innerHTML = ''; 
        showError('Sorry, there are no images matching your search query. Please try again!');
        return;
      }

      renderImageGallery(data.hits);
    })
    .catch(() => {
      loader.style.display = 'none'; 
      gallery.innerHTML = ''; 
      showError('Something went wrong. Please try again later.');
    });
  form.reset();
});