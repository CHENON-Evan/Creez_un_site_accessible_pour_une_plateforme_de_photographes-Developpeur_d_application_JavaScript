function mediaTemplate(data) {
  const { id, photographerId, title, image, video, likes, date, price, name } =
    data;

  const photographerPicture = `assets/images/${photographerId}/${image}`;
  const photographerVideo = `assets/images/${photographerId}/${video}`;

  function getFilterMediaCardDOM() {
    const filterMedia = document.createElement('div');
    filterMedia.className = 'filter_media';
    const filterText = document.createElement('p');
    filterText.className = 'filter_text';
    const dropdown = document.createElement('div');
    dropdown.className = 'dropdown';
    const dropdownButton = document.createElement('button');
    dropdownButton.className = 'dropdown_button';
    const filterContent = document.createElement('span');
    const filterImage = document.createElement('img');
    const dropdownContent = document.createElement('ul');
    dropdownContent.id = 'dropdown_content';
    const dropdownPopulaire = document.createElement('li');
    const dropdownPopulaireButton = document.createElement('button');
    const dropdownDate = document.createElement('li');
    const dropdownDateButton = document.createElement('button');
    const dropdownTitle = document.createElement('li');
    const dropdownTitleButton = document.createElement('button');

    filterText.textContent = 'Trier par';
    dropdownButton.addEventListener('click', (e) => {
      const dropdownContent = document.getElementById('dropdown_content');
      if (dropdownContent.style.display == 'block') {
        closeDropdown();
      } else {
        displayDropdown();
      }
    });
    filterContent.textContent = 'Popularité';
    filterImage.setAttribute('src', 'assets/icons/expand_more.svg');
    dropdownPopulaireButton.textContent = 'Popularité';
    dropdownDateButton.textContent = 'Date';
    dropdownTitleButton.textContent = 'Titre';
    dropdownPopulaireButton.addEventListener('click', (e) => {
      filterContent.textContent = 'Popularité';
      tablePhoto.sort((a, b) => b.likes - a.likes);
      displayMedia();
      closeDropdown();
    });
    dropdownDateButton.addEventListener('click', (e) => {
      filterContent.textContent = 'Date';
      tablePhoto.sort((a, b) => new Date(b.date) - new Date(a.date));
      displayMedia();
      closeDropdown();
    });
    dropdownTitleButton.addEventListener('click', (e) => {
      filterContent.textContent = 'Titre';
      tablePhoto.sort((a, b) => a.title.localeCompare(b.title));
      displayMedia();
      closeDropdown();
    });

    filterMedia.appendChild(filterText);
    filterMedia.appendChild(dropdown);
    dropdown.appendChild(dropdownButton);
    dropdownButton.appendChild(filterContent);
    dropdownButton.appendChild(filterImage);
    dropdown.appendChild(dropdownContent);
    dropdownContent.appendChild(dropdownPopulaire);
    dropdownPopulaire.appendChild(dropdownPopulaireButton);
    dropdownContent.appendChild(dropdownDate);
    dropdownDate.appendChild(dropdownDateButton);
    dropdownContent.appendChild(dropdownTitle);
    dropdownTitle.appendChild(dropdownTitleButton);

    return filterMedia;
  }

  // Factorie
  function getMediaCardDOM(tableMedia) {
    if (image) {
      return getImagesCardDOM(tableMedia);
    } else {
      return getVideosCardDOM(tableMedia);
    }
  }

  function getImagesCardDOM(tableMedia) {
    const article = document.createElement('article');
    const lightboxMedia = document.createElement('a');
    const imageCard = document.createElement('img');
    const photographerMediaTitleLikes = document.createElement('div');
    photographerMediaTitleLikes.className = 'photographer_title_likes';
    const photographerMediaTitle = document.createElement('p');
    photographerMediaTitle.className = 'photographer_title';
    const photographerMediaLikes = document.createElement('div');
    photographerMediaLikes.className = 'photographer_likes';
    const photographerNomberLikes = document.createElement('p');
    const photographerImageLike = document.createElement('img');

    lightboxMedia.setAttribute('href', '#');
    lightboxMedia.addEventListener('click', (e) => {
      e.preventDefault();
      const index = tableMedia.findIndex((img) => img.id === id);
      displayLightbox(tableMedia, index, photographerId);
    });
    imageCard.setAttribute('src', photographerPicture);
    photographerMediaTitle.textContent = title;
    photographerNomberLikes.textContent = likes;
    photographerImageLike.setAttribute('src', 'assets/images/like.svg');

    article.appendChild(lightboxMedia);
    lightboxMedia.appendChild(imageCard);
    article.appendChild(photographerMediaTitleLikes);
    photographerMediaTitleLikes.appendChild(photographerMediaTitle);
    photographerMediaTitleLikes.appendChild(photographerMediaLikes);
    photographerMediaLikes.appendChild(photographerNomberLikes);
    photographerMediaLikes.appendChild(photographerImageLike);

    return article;
  }

  function getVideosCardDOM(tableMedia) {
    const article = document.createElement('article');
    const videoCard = document.createElement('video');
    const lightboxMedia = document.createElement('a');
    const photographerMediaTitleLikes = document.createElement('div');
    photographerMediaTitleLikes.className = 'photographer_title_likes';
    const photographerMediaTitle = document.createElement('p');
    photographerMediaTitle.className = 'photographer_title';
    const photographerMediaLikes = document.createElement('div');
    photographerMediaLikes.className = 'photographer_likes';
    const photographerNomberLikes = document.createElement('p');
    const photographerImageLike = document.createElement('img');

    lightboxMedia.setAttribute('href', '#');
    lightboxMedia.addEventListener('click', (e) => {
      e.preventDefault();
      const index = tableMedia.findIndex((img) => img.id === id);
      displayLightbox(tableMedia, index, photographerId);
    });
    videoCard.setAttribute('src', photographerVideo);
    photographerMediaTitle.textContent = title;
    photographerNomberLikes.textContent = likes;
    photographerImageLike.setAttribute('src', 'assets/images/like.svg');

    article.appendChild(lightboxMedia);
    lightboxMedia.appendChild(videoCard);
    article.appendChild(photographerMediaTitleLikes);
    photographerMediaTitleLikes.appendChild(photographerMediaTitle);
    photographerMediaTitleLikes.appendChild(photographerMediaLikes);
    photographerMediaLikes.appendChild(photographerNomberLikes);
    photographerMediaLikes.appendChild(photographerImageLike);

    return article;
  }

  function getLikesPriceCardDOM() {
    const likesPriceCard = document.createElement('div');
    likesPriceCard.className = 'likes_price_card';
    const likesContent = document.createElement('div');
    likesContent.className = 'likes_content';
    const photographerLikes = document.createElement('p');
    photographerLikes.className = 'photogrpher_likes';
    const photographerImageLike = document.createElement('img');
    const photographerPrice = document.createElement('p');
    photographerPrice.className = 'photographer_price';
    photographerImageLike.setAttribute('src', 'assets/images/like.svg');

    likesContent.textContent = `${likes} `;
    photographerPrice.textContent = `${price} € / jour`;

    likesPriceCard.appendChild(likesContent);
    likesContent.appendChild(photographerImageLike);
    likesPriceCard.appendChild(photographerPrice);

    return likesPriceCard;
  }

  return { getFilterMediaCardDOM, getMediaCardDOM, getLikesPriceCardDOM };
}
