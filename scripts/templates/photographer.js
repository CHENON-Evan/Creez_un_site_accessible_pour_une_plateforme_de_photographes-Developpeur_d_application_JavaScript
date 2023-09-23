function photographerTemplate(data) {
  const { name, id, city, country, tagline, price, portrait } = data;

  const picture = `assets/images/Photographers ID/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement('article');
    const img = document.createElement('img');
    const photographer = document.createElement('div');
    photographer.className = 'photographerIdentity';
    const photographerName = document.createElement('h3');
    const photographerCity = document.createElement('p');
    photographerCity.className = 'photographerCity';
    const photographerDescription = document.createElement('p');
    photographerDescription.className = 'photographerDescription';
    const photographerPrice = document.createElement('p');
    photographerPrice.className = 'photographerPrice';

    article.setAttribute(
      'aria-label',
      `Carte de présentation du photographe ${name}`
    );
    img.setAttribute('src', picture);
    img.setAttribute('alt', `Photo de profile de ${name}`);
    photographer.setAttribute(
      'aria-label',
      `Déscription du photographe ${name}`
    );
    photographerName.textContent = name;
    photographerCity.textContent = `${city}, ${country}`;
    photographerDescription.textContent = tagline;
    photographerPrice.textContent = `${price}Є/jour`;

    article.appendChild(img);
    article.appendChild(photographer);
    photographer.appendChild(photographerName);
    photographer.appendChild(photographerCity);
    photographer.appendChild(photographerDescription);
    photographer.appendChild(photographerPrice);

    return article;
  }

  return { getUserCardDOM };
}
