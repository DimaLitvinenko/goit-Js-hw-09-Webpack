
function renderCountryCard() {     // Рендерит карточку для одной страны
    const cardMarkup = document.getElementById("filter");
    const item = document.createElement('li');
    console.log(item);
  item.insertAdjacentHTML('beforeend', cardMarkup);
}

renderCountryCard();