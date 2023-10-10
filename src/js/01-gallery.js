// Add imports above this line
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

// console.log(galleryItems);
const ul = document.querySelector('.gallery')
const li = galleryItems.map(({original, preview, description}) =>
`<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`
).join('');
ul.insertAdjacentHTML('beforeend', li);

// ul.addEventListener('click', openImg);

const lightbox = new SimpleLightbox('.gallery a', { 
  captionDelay: 250,
  captionsData: 'alt'
});


ul.style.listStyleType = 'none';