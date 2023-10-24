let params = new URL(document.location).searchParams;
let id = parseInt(params.get('id'));
let tablePhoto = [];
let idPhotographe = 0;

async function getPhotographers() {
  const reponse = await fetch('./data/photographers.json');
  const data = await reponse.json();

  return data;
}

async function displayData(photographers, media) {
  const photographerHeader = document.querySelector('.photographer_header');
  const photographer = photographers.find((data) => data.id == id);

  const photographerModel = photographerTemplate(photographer);
  const userBendeauDOM = photographerModel.getUserBendeauDOM();
  photographerHeader.appendChild(userBendeauDOM);

  const filterMedia = mediaTemplate(photographer);
  const filterMediaCardDOM = filterMedia.getFilterMediaCardDOM();
  photographerHeader.appendChild(filterMediaCardDOM);

  const photographerMain = document.getElementById('main');
  const photographerModal = contactTemplate(photographer);
  const userContactDOM = photographerModal.getContactCardDOM();
  photographerMain.appendChild(userContactDOM);

  const photographerLikesPrice = mediaTemplate(photographer);
  const likesPriceCardDOM = photographerLikesPrice.getLikesPriceCardDOM();
  photographerMain.appendChild(likesPriceCardDOM);

  const photographerMedia = media.filter((data) => data.photographerId == id);

  tablePhoto = photographerMedia;
  idPhotographe = id;
  displayMedia();

  const lightboxModel = lightboxTemplate(tablePhoto);
  const lightboxCardDOM = lightboxModel.getLightboxMediaCardDOM();
  document.body.appendChild(lightboxCardDOM);

  return { photographer, photographerMedia };
}

function displayMedia() {
  const mediasSection = document.querySelector('.photographer_content');
  mediasSection.innerHTML = '';
  tablePhoto.forEach((media) => {
    const mediaModel = mediaTemplate(media);
    const mediaContent = mediaModel.getMediaCardDOM(tablePhoto);
    mediasSection.appendChild(mediaContent);
  });
}

async function init() {
  const { photographers, media } = await getPhotographers();
  displayData(photographers, media);
}

init();
