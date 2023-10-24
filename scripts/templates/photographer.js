function photographerTemplate(data) {
  const { name, id, city, country, tagline, price, portrait } = data;

  const picture = `assets/images/Photographers ID/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement('article');
    const photographerLink = document.createElement('a');
    const img = document.createElement('img');
    const photographer = document.createElement('div');
    photographer.className = 'photographer_identity';
    const photographerName = document.createElement('h3');
    photographerName.className = 'photographer_name';
    const photographerCity = document.createElement('p');
    photographerCity.className = 'photographer_city';
    const photographerDescription = document.createElement('p');
    photographerDescription.className = 'photographer_description';
    const photographerPrice = document.createElement('p');
    photographerPrice.className = 'photographer_price';

    article.setAttribute(
      'aria-label',
      `Carte de présentation du photographe ${name}`
    );
    photographerLink.setAttribute('href', `photographer.html?id=${id}`);
    photographerLink.setAttribute(
      'aria-label',
      `Voir le profil du photographe ${name}`
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

    article.appendChild(photographerLink);
    photographerLink.appendChild(img);
    photographerLink.appendChild(photographer);
    photographer.appendChild(photographerName);
    photographer.appendChild(photographerCity);
    photographer.appendChild(photographerDescription);
    photographer.appendChild(photographerPrice);

    return article;
  }

  function getUserBendeauDOM() {
    const article = document.createElement('article');
    const photographerInfo = document.createElement('div');
    photographerInfo.className = 'photographer_info';
    const photographerName = document.createElement('h3');
    photographerName.className = 'photographer_name';
    const photographerCity = document.createElement('p');
    photographerCity.className = 'photographer_city';
    const photographerDescription = document.createElement('p');
    photographerDescription.className = 'photographer_description';
    const contact = document.createElement('button');
    contact.className = 'contact_button';
    const img = document.createElement('img');

    article.setAttribute(
      'aria-label',
      `Carte de présentation du photographe ${name}`
    );
    photographerName.textContent = name;
    photographerCity.textContent = `${city}, ${country}`;
    photographerDescription.textContent = tagline;
    contact.textContent = 'Contactez-moi';
    contact.setAttribute('onclick', `displayModal()`);
    img.setAttribute('src', picture);
    img.setAttribute('alt', `Photo de profile de ${name}`);

    article.appendChild(photographerInfo);
    photographerInfo.appendChild(photographerName);
    photographerInfo.appendChild(photographerCity);
    photographerInfo.appendChild(photographerDescription);
    article.appendChild(contact);
    article.appendChild(img);

    return article;
  }

  return { getUserCardDOM, getUserBendeauDOM };
}
