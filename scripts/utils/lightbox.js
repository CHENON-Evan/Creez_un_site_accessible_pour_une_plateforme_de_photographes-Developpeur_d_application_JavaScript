let currentPhotographerId = 0;

function displayLightbox(tableMedia, index, photographerId) {
  console.log(tableMedia);
  const lightbox = document.getElementById('contact_lightbox');
  const mediaContainer = document.querySelector('#media_container');
  const title = document.querySelector('.lightbox_title');
  const image = tableMedia[index];
  mediaContainer.innerHTML = '';
  title.innerHTML = image.title;
  console.log(index);
  if (image.image) {
    const photographerPicture = `assets/images/${photographerId}/${image.image}`;
    console.log(photographerId);
    const img = document.createElement('img');
    img.src = photographerPicture;
    mediaContainer.appendChild(img);
  } else {
    const photographerVideo = `assets/images/${photographerId}/${image.video}`;
    const video = document.createElement('video');
    video.controls = true;
    video.src = photographerVideo;
    mediaContainer.appendChild(video);
  }
  lightbox.style.display = 'block';
  lightbox.setAttribute('data-current-index', index);
  currentPhotographerId = photographerId;
}

function closeLightbox() {
  const lightbox = document.getElementById('contact_lightbox');
  lightbox.style.display = 'none';
}

function previousLightbox(tablePhoto) {
  const lightbox = document.getElementById('contact_lightbox');
  let index = parseInt(lightbox.getAttribute('data-current-index'));
  index--;

  if (index < 0) {
    index = tablePhoto.length - 1;
  }

  displayLightbox(tablePhoto, index, currentPhotographerId);
}

function nextLightbox(tablePhoto) {
  const lightbox = document.getElementById('contact_lightbox');
  let index = parseInt(lightbox.getAttribute('data-current-index'));
  index++;

  if (index >= tablePhoto.length) {
    index = 0;
  }

  displayLightbox(tablePhoto, index, currentPhotographerId);
}
