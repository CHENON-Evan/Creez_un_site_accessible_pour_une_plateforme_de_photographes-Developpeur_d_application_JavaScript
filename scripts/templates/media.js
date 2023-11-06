function mediaTemplate(data, photographerPrice) {
  const {
    id, photographerId, title, image, video, likes,
  } = data;

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
    dropdownPopulaireButton.className = 'dropdown_populaire_button';
    const dropdownDate = document.createElement('li');
    const dropdownDateButton = document.createElement('button');
    dropdownDateButton.className = 'dropdown_date_button';
    const dropdownTitle = document.createElement('li');
    const dropdownTitleButton = document.createElement('button');
    dropdownTitleButton.className = 'dropdown_title_button';

    filterText.textContent = 'Trier par';
    dropdownButton.addEventListener('click', () => {
      const dropdownContent = document.getElementById('dropdown_content');
      if (dropdownContent.style.display === 'block') {
        closeDropdown();
      } else {
        displayDropdown();
      }
    });
    dropdownButton.setAttribute('aria-label', 'Ouvrir le menu de tri');
    filterContent.textContent = 'Popularité';
    filterContent.setAttribute('aria-label', 'Sélection actuelle:');
    filterImage.setAttribute('src', 'assets/icons/expand_more.svg');
    filterImage.setAttribute('alt', 'ouverture du filtre');
    dropdownPopulaireButton.textContent = 'Popularité';
    dropdownDateButton.textContent = 'Date';
    dropdownTitleButton.textContent = 'Titre';
    dropdownPopulaireButton.style.display = 'none';
    dropdownPopulaireButton.addEventListener('click', () => {
      filterContent.textContent = 'Popularité';
      tablePhoto.sort((a, b) => b.likes - a.likes);
      displayMedia();
      closeDropdown();
      dropdownPopulaireButton.style.display = 'none';
      dropdownDateButton.style.display = 'block';
      dropdownTitleButton.style.display = 'block';
    });
    dropdownDateButton.addEventListener('click', () => {
      filterContent.textContent = 'Date';
      tablePhoto.sort((a, b) => new Date(b.date) - new Date(a.date));
      displayMedia();
      closeDropdown();
      dropdownDateButton.style.display = 'none';
      dropdownPopulaireButton.style.display = 'block';
      dropdownTitleButton.style.display = 'block';
    });
    dropdownTitleButton.addEventListener('click', () => {
      filterContent.textContent = 'Titre';
      tablePhoto.sort((a, b) => a.title.localeCompare(b.title));
      displayMedia();
      closeDropdown();
      dropdownTitleButton.style.display = 'none';
      dropdownPopulaireButton.style.display = 'block';
      dropdownDateButton.style.display = 'block';
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
    }
    return getVideosCardDOM(tableMedia);
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
    const photographerImageLike = document.createElement('button');
    photographerImageLike.className = 'photographer_image_like';
    const photographerImageLikes = document.createElement('img');

    lightboxMedia.setAttribute('href', '#');
    lightboxMedia.setAttribute('role', 'link');
    lightboxMedia.addEventListener('click', (e) => {
      e.preventDefault();
      const index = tableMedia.findIndex((img) => img.id === id);
      displayLightbox(tableMedia, index, photographerId);
    });
    imageCard.setAttribute('src', photographerPicture);
    imageCard.setAttribute('aria-label', 'media du photographe');
    imageCard.setAttribute('alt', `${title}`);
    photographerMediaTitle.innerHTML = title;
    photographerNomberLikes.innerHTML = likes;

    let like = 0;
    let liked = false;

    photographerImageLikes.setAttribute('src', 'assets/images/like.svg');
    photographerImageLike.setAttribute('alt', 'Like du media');
    photographerImageLike.setAttribute('role', 'button');
    photographerImageLike.setAttribute('tabindex', '0');
    photographerImageLike.addEventListener('click', (e) => {
      e.preventDefault();
      if (!liked) {
        tableMedia[tableMedia.findIndex((media) => media.id === id)].likes++;
        like++;
        liked = true;
      } else {
        tableMedia[tableMedia.findIndex((media) => media.id === id)].likes--;
        like--;
        liked = false;
      }
      const likesTotal = document.getElementById('likesTotal');
      likesTotal.innerHTML = '';
      const likesElem = getLikesPriceCardDOM(tableMedia, photographerPrice);
      likesTotal.appendChild(likesElem);
      photographerNomberLikes.innerHTML = likes + like;
    });

    article.appendChild(lightboxMedia);
    lightboxMedia.appendChild(imageCard);
    article.appendChild(photographerMediaTitleLikes);
    photographerMediaTitleLikes.appendChild(photographerMediaTitle);
    photographerMediaTitleLikes.appendChild(photographerMediaLikes);
    photographerMediaLikes.appendChild(photographerNomberLikes);
    photographerMediaLikes.appendChild(photographerImageLike);
    photographerImageLike.appendChild(photographerImageLikes);

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
    photographerNomberLikes.className = 'photographer_nomber_likes';
    const photographerImageLike = document.createElement('img');

    lightboxMedia.setAttribute('href', '#');
    lightboxMedia.setAttribute('role', 'link');
    lightboxMedia.addEventListener('click', (e) => {
      e.preventDefault();
      const index = tableMedia.findIndex((img) => img.id === id);
      displayLightbox(tableMedia, index, photographerId);
    });
    videoCard.setAttribute('src', photographerVideo);
    videoCard.setAttribute('aria-label', 'media du photographe');
    videoCard.setAttribute('alt', `${title}`);
    photographerMediaTitle.innerHTML = title;
    photographerNomberLikes.innerHTML = likes;

    let like = 0;
    let liked = false;

    photographerImageLike.setAttribute('src', 'assets/images/like.svg');
    photographerImageLike.setAttribute('alt', 'Like du media');
    photographerImageLike.setAttribute('role', 'button');
    photographerImageLike.setAttribute('tabindex', '0');
    photographerImageLike.addEventListener('click', (e) => {
      e.preventDefault();
      if (!liked) {
        tableMedia[tableMedia.findIndex((media) => media.id === id)].likes++;
        like++;
        liked = true;
      } else {
        tableMedia[tableMedia.findIndex((media) => media.id === id)].likes--;
        like--;
        liked = false;
      }
      const likesTotal = document.getElementById('likesTotal');
      likesTotal.innerHTML = '';
      const likesElem = getLikesPriceCardDOM(tableMedia, photographerPrice);
      likesTotal.appendChild(likesElem);
      photographerNomberLikes.innerHTML = likes + like;
    });

    article.appendChild(lightboxMedia);
    lightboxMedia.appendChild(videoCard);
    article.appendChild(photographerMediaTitleLikes);
    photographerMediaTitleLikes.appendChild(photographerMediaTitle);
    photographerMediaTitleLikes.appendChild(photographerMediaLikes);
    photographerMediaLikes.appendChild(photographerNomberLikes);
    photographerMediaLikes.appendChild(photographerImageLike);

    return article;
  }

  function totalLikesPage(tablePhoto) {
    return tablePhoto.reduce(
      (totalLikes, photo) => totalLikes + photo.likes,
      0,
    );
  }

  function getLikesPriceCardDOM(tablePhoto, photographerPrice) {
    const likesPriceCard = document.createElement('div');
    likesPriceCard.className = 'likes_price_card';
    const likesContent = document.createElement('div');
    likesContent.className = 'likes_content';
    const photographerTotalLikes = document.createElement('p');
    photographerTotalLikes.className = 'photographer_total_likes';
    const photographerImageLike = document.createElement('img');
    const photographerPriceElem = document.createElement('p');
    photographerPriceElem.className = 'photographer_price';

    photographerImageLike.setAttribute('src', 'assets/images/like.svg');
    photographerImageLike.setAttribute('aria-label', 'Like du media');
    photographerImageLike.setAttribute('role', 'button');

    const totalLikes = totalLikesPage(tablePhoto);
    likesContent.textContent = `${totalLikes}`;
    photographerPriceElem.textContent = `${photographerPrice} € / jour`;

    likesPriceCard.appendChild(likesContent);
    likesContent.appendChild(photographerImageLike);
    likesPriceCard.appendChild(photographerPriceElem);

    return likesPriceCard;
  }

  return {
    getFilterMediaCardDOM,
    getMediaCardDOM,
    getLikesPriceCardDOM,
  };
}
