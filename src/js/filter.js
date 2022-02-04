const maxPills = 70;

// Рендерит разметку списка таблеток от первого до maxPills
function renderItemMarkup(num) {
    const list = document.getElementById('filter');

    list.insertAdjacentHTML(
        'beforeend',
        `<li class="filter-item"><button class="filter-btn" isActive>${num}</button></li>`,
    );
}

// Подсчёт от первого до последнего, не больше maxPills
function countItems() {
    for (let i = 1; i <= maxPills; i += 1) {
        // console.log(i)
        renderItemMarkup(i);
    }
    return;
}
countItems();
