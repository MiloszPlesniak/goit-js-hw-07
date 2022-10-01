import { galleryItems } from './gallery-items.js';
// Change code below this line
var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
console.log(galleryItems);

const gallery = document.querySelector('.gallery');

for (let i = 0; i < galleryItems.length; i++) {
    const newLink = document.createElement('a');
    newLink.classList.add('gallery__item')
    newLink.setAttribute('href', galleryItems[i].original)
    newLink.setAttribute('onclick', 'return false')
    gallery.append(newLink)
    const newImg = document.createElement('img');
    newImg.classList.add('gallery__image');
    newImg.setAttribute('src', galleryItems[i].preview)
    newImg.setAttribute('alt', galleryItems[i].description)
    newLink.append(newImg)
}


let secGallery = new SimpleLightbox('.gallery a');
secGallery.on('show.simplelightbox');

console.log(secGallery.options)

secGallery.options.captionsData = "alt"
secGallery.options.captionDelay = 250