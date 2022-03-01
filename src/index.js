// ============== STYLES ================

// ------------- UTILS --------------
import './scss/Utils/variables.scss';
import './scss/Utils/visually-hidden.scss';

// ------------- BASE ---------------
import './scss/Utils/media-queries.scss';
import './scss/Base/common.scss';
import './scss/Base/container.scss';

// ---------- COMPONENTS ------------
import './scss/Components/header.scss';
import './scss/Components/main-content.scss';
import './scss/Components/backdrop.scss';
import './scss/Components/modal-window.scss';
// import './scss/Components/sidebar.scss';

// ============== IMAGES ================
// import './images/modules.png'

// ============ JavaScript ==============
// import './js/filter.js';

// ===============================================================================================
// const MAX_PILLS = 70;
// let idNumbers = [];

const refs = {
    closeModalButton: document.getElementById('modal-close'),
    backdrop: document.querySelector('.js-backdrop'),
    container: document.querySelector('.js-container'),
    list: document.getElementById('filter'),
    modal: document.getElementById('modal'),
    searchInput: document.getElementById('input'),
    MAX_PILLS: 70,
    idNumbers: [],
    COLORS: ['white', 'green', 'orange', 'red'],
};

const {
    closeModalButton,
    backdrop,
    container,
    list,
    modal,
    searchInput,
    MAX_PILLS,
    idNumbers,
    COLORS,
} = refs;

// ПОДСЧЁТ ЕЛЕМЕНТОВ СПИСКА 'MAX_PILLS'
const countItems = length => {
    for (let i = 1; i <= length; ++i) {
        // console.log(i);
        idNumbers.push(...[i]);
        // console.log(idNumbers);
    }
    return idNumbers;
};
countItems(MAX_PILLS);

// Рендерит разметку списка таблеток от первого до maxPills
const createItemsMarkup = items => {
    getDayTimeout();
    items.map((item, index) => {
        return list.insertAdjacentHTML(
            'beforeend',
            `<li class="filter-list__item">
                <button 
                id="btn-${index + 1}"
                class="filter-list__button" 
                data-action="open-modal" 
                data-identifier="${index + 1}"
                data-color="white"
                type="button">
                    ${item}
                </button>
            </li>`,
        );
    });
};
const markup = createItemsMarkup(idNumbers, idNumbers.length);

// - FILTER/ФИЛЬТР ПО НАЗВАНИЮ ЦВЕТА
const filterByName = () => {
    searchInput.addEventListener('keyup', inputFilterHandler);
};
filterByName();

const inputFilterHandler = event => {
    const filter = input.value.toLowerCase(),
        filterItems = document.querySelectorAll('#filter li');

    filterItems.forEach(item => {
        if (item.innerHTML.toLowerCase().indexOf(filter) > -1) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
};

//-Get обратный отсчёт ОСТАТОК ВРЕМЕНИ ДО КОНЦА ДНЯ
function getDayTimeout() {
    setInterval(() => {
        let today = getToday();
        document.getElementById('hours').innerHTML = getHoursUntilEndOfDay(today);
        document.getElementById('minutes').innerHTML = getMinutesUntilEndOfDay(today);
        document.getElementById('seconds').innerHTML = getSecondsUntilEndOfDay(today);
    }, 100);
}
//-Get the number of hours until the end of the day
function getHoursUntilEndOfDay(date) {
    let endOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    let hours = Math.ceil((endOfDay.getTime() - date.getTime()) / (1000 * 60 * 60));
    return hours;
}
//-Get the number of minutes until the end of the day
function getMinutesUntilEndOfDay(date) {
    let endOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    let minutes = Math.ceil((endOfDay.getTime() - date.getTime()) / (1000 * 60));
    return minutes;
}
//-Get the number of seconds until the end of the day
function getSecondsUntilEndOfDay(date) {
    let endOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    let seconds = Math.ceil((endOfDay.getTime() - date.getTime()) / 1000);
    return seconds;
}
//-Get today's date
function getToday() {
    let today = new Date();
    return today;
}

// ==================================>> MODAL WINDOW <<=======================================
// - Закрытие модального окна по нажатию клавиши `ESC`.
const modalCloseByEscHandler = ({ key }) => {
    if (key === 'Escape') {
        modalCloseHandler();
    }
};

// - Открытие модального окна по нажатию на кнопку'BUTTON' из списка
const modalOpenHandler = ({ target }) => {
    console.log(target);
    if (target.nodeName !== 'BUTTON') {
        console.log(target.nodeName);
        return;
    }

    const color = target.dataset.color;
    console.log(color);

    let id = target.textContent;
    console.log(id);

    const buttonElem = document.querySelector(`#${target.id}`);
    console.log(buttonElem);

    let colt = buttonElem.dataset['color'];
    console.log(colt);

    const newColor = (buttonElem.dataset['color'] = 'green');
    buttonElem.style.backgroundColor = newColor;

    modalWindowMarkup(id, color);

    // image.src = target.dataset.source; //>-Подмена значения атрибута `src` элемента `img.lightbox__image`.
    /////////////////////////////////////////////////////////////

    window.addEventListener('keydown', modalCloseByEscHandler);
    container.classList.add('is-open'); // - Открытие модального окна по клику на элементе галереи.
};

// ЗАКРЫТИЕ модального окна по НАЖАТИЮ КЛАВИШИ - 'ESC' `button[data-action="close-lightbox"]`.
const modalCloseHandler = () => {
    window.removeEventListener('keydown', modalCloseByEscHandler);
    container.classList.remove('is-open');
};

list.addEventListener('click', modalOpenHandler); //>СПИСОК ИЗ КНОПОК(ТАБЛЕТОК)
closeModalButton.addEventListener('click', modalCloseHandler); //>ЗАКРЫТЬ МОДАЛЬНОЕ ОКНО
backdrop.addEventListener('click', modalCloseHandler); //>ФОН МОДАЛЬНОГО ОКНА

// СБРОС/ОЧИСТИТЬ РАЗМЕТКУ
function reset() {
    return (modal.innerHTML = '');
}

// РАЗМЕТКА/ПЕРЕРИСОВКА ЕЛЕМЕНТОВ ДЛЯ МОДАЛЬНОГО ОКНА
function modalWindowMarkup(id, currentColor) {
    COLORS.forEach(color => {
        if (currentColor === 'white' && modalOpenHandler) {
            reset();
            modal.insertAdjacentHTML(
                'beforeend',
                `
                    <div>
                        <h2 class="modal-title">Таблетка №${id}</h2>
                        <p><span>${currentColor}</span> - Cвободна</p>
                    </div>
                    <div>
                        <p id="datejs">${getCurrentDate()}</p>
                        
                    </div>  
                `,
            );
        } else if (currentColor === 'green' && modalOpenHandler) {
            reset();
            modal.insertAdjacentHTML(
                'beforeend',
                `   
                    <div>
                        <h2 class="modal-title">Таблетка №${id}</h2>
                        <p><span>${currentColor}</span> - Занята</p>
                    </div>
                    <div></div>
                `,
            );
        } else if (currentColor === 'orange' && modalOpenHandler) {
            reset();
            modal.insertAdjacentHTML(
                'beforeend',
                `   
                    <div>
                        <h2 class="modal-title">Таблетка №${id}</h2>
                        <p><span>${currentColor}</span> - Осталось 10 мин.</p>
                    </div>
                    <div></div>
                `,
            );
        } else if (currentColor === 'red' && modalOpenHandler) {
            reset();
            modal.insertAdjacentHTML(
                'beforeend',
                `
                    <div>
                        <h2 class="modal-title">Таблетка №${id}</h2>
                        <p><span>${currentColor}</span> - Время выйшло</p>
                    </div>
                    <div></div>
                `,
            );
        }
    });
}

// ТЕКУЩАЯ ДАТА И ВРЕМЯ - В МОДАЛЬНОМ ОКНЕ
function getCurrentDate() {
    let date = new Date();
    // формат вывода
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    };
    let localeUk;
    // Украина
    return (localeUk = date.toLocaleString('Uk-uk', options)); // текущая дата
}

//////////////////////////////////////////////////////////////////////////////////////////////
/*
const scrollGalleryHandler = ({ key }) => {
    let currentIndex = galleryItems.findIndex(
        item => item.description === image.alt || item.original === image.src,
    );
    if (key === 'ArrowLeft') {
        // - Пролистывание изображений галереи в открытом модальном окне стрелками "влево".
        if (currentIndex !== 0) {
            currentIndex -= 1;
        } else {
            currentIndex = 0;
        }
    }
    if (key === 'ArrowRight') {
        // - Пролистывание изображений галереи в открытом модальном окне стрелками "вправо".
        if (currentIndex !== galleryItems.length - 1) {
            currentIndex += 1;
        } else {
            currentIndex = galleryItems.length - 1;
        }
    }

    image.alt = galleryItems[currentIndex].description;
    image.src = galleryItems[currentIndex].original;
};
*/
