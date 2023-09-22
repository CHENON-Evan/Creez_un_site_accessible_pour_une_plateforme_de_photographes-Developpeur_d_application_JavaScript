function photographerTemplate(data) {
  const { name, id, city, country, tagline, price, portrait } = data;

  const picture = `assets/images/Photographers ID/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement('article');
    const img = document.createElement('img');
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const p2 = document.createElement('p');

    img.setAttribute('src', picture);
    h2.textContent = name;
    h3.textContent = `${city}, ${country}`;
    p.textContent = tagline;
    p2.textContent = `${price}Є/jour`;

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(p);
    article.appendChild(p2);

    return article;
  }

  return { getUserCardDOM };
}
