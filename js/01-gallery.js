 import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryEl = galleryItems.map(
    ({ preview, original, description }) => 
`<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`);

gallery.insertAdjacentHTML('beforeend', galleryEl.join(''));

gallery.addEventListener('click', showOriginalImg);


function showOriginalImg(event) {
    event.preventDefault();
    if(event.target.tagName !== "IMG") return ;

    const { target } = event;

    const examp = basicLightbox.create(
       `<img src="${target.dataset.source}" width="800">`
    )
    examp.show();

    gallery.addEventListener("keydown", (event) => {
         if(event.code === 'Escape') 
         examp.close();
      });
};