function lightboxTemplate(tablePhoto) {
  function getLightboxMediaCardDOM() {
    const contactLightbox = document.createElement('div');
    contactLightbox.id = 'contact_lightbox';
    const lightboxContent = document.createElement('div');
    lightboxContent.className = 'lightbox';
    const closeButtonLightbox = document.createElement('button');
    closeButtonLightbox.className = 'close_lightbox_button';
    closeButtonLightbox.id = 'close_button_lightbox';
    const closeImageLightbox = document.createElement('img');
    closeImageLightbox.className = 'close_image_lightbox';
    const previousButtonLightbox = document.createElement('button');
    previousButtonLightbox.className = 'previous_lightbox_button';
    previousButtonLightbox.id = 'previous_button_lightbox';
    const previousImageLightbox = document.createElement('img');
    previousImageLightbox.className = 'previous_lightbox';
    const nextButtonLightbox = document.createElement('button');
    nextButtonLightbox.className = 'next_lightbox_button';
    nextButtonLightbox.id = 'next_button_lightbox';
    const nextImageLightbox = document.createElement('img');
    nextImageLightbox.className = 'next_lightbox';
    const mediaContainer = document.createElement('div');
    mediaContainer.id = 'media_container';
    const lightboxTitle = document.createElement('p');
    lightboxTitle.className = 'lightbox_title';

    closeImageLightbox.setAttribute('src', 'assets/icons/close_lightbox.svg');
    closeImageLightbox.setAttribute('alt', 'fermeture de la lightbox');
    closeButtonLightbox.addEventListener('click', () => {
      closeLightbox();
    });
    closeImageLightbox.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        closeLightbox();
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    });
    previousImageLightbox.setAttribute('src', 'assets/icons/previous.svg');
    previousImageLightbox.setAttribute('alt', "aller a l'image précédente");
    previousImageLightbox.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const lightbox = document.getElementById('contact_lightbox');
        if (lightbox.style.display === 'block') {
          const index = tablePhoto.findIndex((img) => img.id === id);
          previousLightbox(tablePhoto, index);
        }
      }
    });

    previousButtonLightbox.addEventListener('click', (e) => {
      e.preventDefault();
      const index = tablePhoto.findIndex((img) => img.id === id);
      previousLightbox(tablePhoto, index);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        const lightbox = document.getElementById('contact_lightbox');
        if (lightbox.style.display === 'block') {
          const index = tablePhoto.findIndex((img) => img.id === id);
          previousLightbox(tablePhoto, index);
        }
      }
    });
    nextImageLightbox.setAttribute('src', 'assets/icons/next.svg');
    nextImageLightbox.setAttribute('alt', "aller a l'image suivante");
    nextImageLightbox.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const lightbox = document.getElementById('contact_lightbox');
        if (lightbox.style.display === 'block') {
          const index = tablePhoto.findIndex((img) => img.id === id);
          nextLightbox(tablePhoto, index);
        }
      }
    });
    nextButtonLightbox.addEventListener('click', (e) => {
      e.preventDefault();
      const index = tablePhoto.findIndex((img) => img.id === id);
      nextLightbox(tablePhoto, index);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        const lightbox = document.getElementById('contact_lightbox');
        if (lightbox.style.display === 'block') {
          const index = tablePhoto.findIndex((img) => img.id === id);
          nextLightbox(tablePhoto, index);
        }
      }
    });

    contactLightbox.appendChild(lightboxContent);
    lightboxContent.appendChild(mediaContainer);
    lightboxContent.appendChild(closeButtonLightbox);
    closeButtonLightbox.appendChild(closeImageLightbox);
    lightboxContent.appendChild(previousButtonLightbox);
    previousButtonLightbox.appendChild(previousImageLightbox);
    lightboxContent.appendChild(nextButtonLightbox);
    nextButtonLightbox.appendChild(nextImageLightbox);
    lightboxContent.appendChild(lightboxTitle);

    return contactLightbox;
  }

  return { getLightboxMediaCardDOM };
}
