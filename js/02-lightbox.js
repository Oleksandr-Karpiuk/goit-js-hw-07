import { galleryItems } from "./gallery-items.js";

const galleryListRef = document.querySelector("ul.gallery");

const makeGalleryListMarkup = ({ preview, original, description }) => {
  return `
    <li>
      <a class="gallery__item" href="${original}">
        <img class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>  
  `;
};

const makeGalleryListElement = galleryItems.map(makeGalleryListMarkup).join("");
galleryListRef.insertAdjacentHTML("beforeend", makeGalleryListElement);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
