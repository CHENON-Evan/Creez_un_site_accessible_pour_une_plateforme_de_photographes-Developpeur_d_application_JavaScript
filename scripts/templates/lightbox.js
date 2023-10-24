function lightboxTemplate(tablePhoto) {
  function getLightboxMediaCardDOM() {
    const contactLightbox = document.createElement('div');
    contactLightbox.id = 'contact_lightbox';
    const lightboxContent = document.createElement('div');
    lightboxContent.className = 'lightbox';
    const closeButtonLightbox = document.createElement('img');
    closeButtonLightbox.className = 'close_lightbox';
    const previousButtonLightbox = document.createElement('img');
    previousButtonLightbox.className = 'previous_lightbox';
    const nextButtonLightbox = document.createElement('img');
    nextButtonLightbox.className = 'next_lightbox';
    const mediaContainer = document.createElement('div');
    mediaContainer.id = 'media_container';
    const lightboxTitle = document.createElement('p');
    lightboxTitle.className = 'lightbox_title';

    closeButtonLightbox.setAttribute('src', 'assets/icons/close_lightbox.svg');
    closeButtonLightbox.setAttribute('onclick', `closeLightbox()`);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    });
    previousButtonLightbox.setAttribute('src', 'assets/icons/previous.svg');
    previousButtonLightbox.addEventListener('click', (e) => {
      e.preventDefault();
      const index = tablePhoto.findIndex((img) => img.id === id);
      previousLightbox(tablePhoto, index);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        const lightbox = document.getElementById('contact_lightbox');
        if (lightbox.style.display == 'block') {
          const index = tablePhoto.findIndex((img) => img.id === id);
          previousLightbox(tablePhoto, index);
        }
      }
    });
    nextButtonLightbox.setAttribute('src', 'assets/icons/next.svg');
    nextButtonLightbox.addEventListener('click', (e) => {
      e.preventDefault();
      const index = tablePhoto.findIndex((img) => img.id === id);
      nextLightbox(tablePhoto, index);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        const lightbox = document.getElementById('contact_lightbox');
        if (lightbox.style.display == 'block') {
          const index = tablePhoto.findIndex((img) => img.id === id);
          nextLightbox(tablePhoto, index);
        }
      }
    });

    contactLightbox.appendChild(lightboxContent);
    lightboxContent.appendChild(mediaContainer);
    lightboxContent.appendChild(closeButtonLightbox);
    lightboxContent.appendChild(previousButtonLightbox);
    lightboxContent.appendChild(nextButtonLightbox);
    lightboxContent.appendChild(lightboxTitle);

    return contactLightbox;
  }

  return { getLightboxMediaCardDOM };
}
