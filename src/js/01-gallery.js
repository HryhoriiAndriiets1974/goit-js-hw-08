// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryItem = document.querySelector(".gallery");
const murkup = galleryItems.map((e) =>
	`<div class="gallery__item">
		<a class="gallery__item" href="${e.original}">
			<img class="gallery__image" src="${e.preview}" alt="${e.description}" />
		</a>
	</div>`)
	.join("");
galleryItem.insertAdjacentHTML("beforeend", murkup);

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
