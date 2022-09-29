import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

for (let i = 0; i < galleryItems.length; i++) {
    const newBox = document.createElement('div');
    newBox.classList.add('gallery__item');
    gallery.append(newBox)
    const newLink = document.createElement('a');
    newLink.classList.add('gallery__link');
    newLink.setAttribute('href', galleryItems[i].original)
    newLink.setAttribute('onclick', 'return false')
    newBox.append(newLink);
    const newImg = document.createElement('img');
    newImg.classList.add('gallery__image');
    newImg.setAttribute('src', galleryItems[i].preview);
    newImg.setAttribute('data-source', galleryItems[i].original);
    newImg.setAttribute('alt', galleryItems[i].description)
    newLink.append(newImg)



}

console.log(galleryItems[0].original)


gallery.addEventListener('click', (event) => {
    if (event.target.nodeName === "IMG") {
        const modal = basicLightbox.create(`
    <div class="modal">
        <img class="gallery__image"/>
    </div>`)

        modal.show()
        
        
        const imageInModal = document.querySelector('.modal').firstElementChild
        imageInModal.setAttribute('src', event.target.dataset.source)
        
        
    }

})



