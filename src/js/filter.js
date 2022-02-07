const maxPills = 70;

// Рендерит разметку списка таблеток от первого до maxPills
function renderItemMarkup(number) {
    let list = document.getElementById('filter');

    list.insertAdjacentHTML(
        'beforeend',
        `<li class="filter_list--item">
            <a href="#!" class="filter_list--button link" data-item-button>
                ${number}
            </a>
        </li>`,
    );
}

// ПОДСЧЁТ ЕЛЕМЕНТОВ СПИСКА maxPills
function countItems() {
    for (let i = 1; i <= maxPills; i += 1) {
        // console.log(i)
        renderItemMarkup(i);
    }
    return;
}
countItems();
