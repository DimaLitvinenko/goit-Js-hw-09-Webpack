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
import './images/icons_moon.svg';
import './images/symbol-defs.svg';
import './images/main-bg/tree_1280.jpg';
import './images/background/sky-bg_1280.jpg';

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
    // headerInput: document.getElementById('header-input'),
    // searchInput: document.getElementById('search-input'),
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
    // headerInput,
    // searchInput,
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
    getDateToDay();
    filterbyNumber();
    items.forEach((item, index) => {
        return list.insertAdjacentHTML(
            'beforeend',
            `<li class="filter-list__item">
                <div class="circle">
                    <div class="noise animated"></div>
                </div>

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

// - FILTER/ФИЛЬТР ПО НОМЕРУ
function filterbyNumber() {
    let input = document.getElementById('search-input');

    input.addEventListener('keyup', function () {
        let filter = input.value.toLowerCase(),
            filterItems = document.querySelectorAll('#filter li');

        filterItems.forEach(item => {
            if (item.innerHTML.toLowerCase().indexOf(filter) > -1) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

// - ДАТА / ВРЕМЯ
function getDateToDay() {
    let monthNames = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
    ];
    let dayNames = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
    ];
    let newDate = new Date();
    newDate.setDate(newDate.getDate());

    setInterval(function () {
        //-Get hours
        let hours = new Date().getHours();
        document.getElementById('hours').innerHTML = (hours < 10 ? '0' : '') + hours;
        //-Get minutes
        let minutes = new Date().getMinutes();
        document.getElementById('minutes').innerHTML =
            (minutes < 10 ? '0' : '') + minutes;
        //-Get seconds
        let seconds = new Date().getSeconds();
        document.getElementById('seconds').innerHTML =
            (seconds < 10 ? '0' : '') + seconds;

        document.getElementById('month').innerHTML = monthNames[newDate.getMonth()];
        document.getElementById('date').innerHTML = newDate.getDate();
        document.getElementById('day').innerHTML = dayNames[newDate.getDay()];
        document.getElementById('year').innerHTML = newDate.getFullYear();
    }, 1000);
}

// ==================================>> MODAL WINDOW <<=======================================

// - ОТКРЫТИЕ МОДАЛЬНОГО ОКНА ПО НАЖАТИЮ НА КНОПКУ 'BUTTON' из списка
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

    window.addEventListener('keydown', modalCloseByEscHandler);
    container.classList.add('is-open'); // - Открытие модального окна по клику на элементе галереи.
};

// - ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА ПО НАЖАТИЮ КЛАВИШИ 'ESC' - `button[data-action="close-lightbox"]`.
const modalCloseByEscHandler = ({ key }) => {
    if (key === 'Escape') {
        modalCloseHandler();
    }
};

// ЗАКРЫТИЕ МОДЛАЛЬНОГО ОКНА
const modalCloseHandler = () => {
    window.removeEventListener('keydown', modalCloseByEscHandler);
    container.classList.remove('is-open');
};

list.addEventListener('click', modalOpenHandler); //>СПИСОК ИЗ КНОПОК(ТАБЛЕТОК)
closeModalButton.addEventListener('click', modalCloseHandler); //>ЗАКРЫТЬ МОДАЛЬНОЕ ОКНО
backdrop.addEventListener('click', modalCloseHandler); //>ФОН МОДАЛЬНОГО ОКНА

// СБРОС/ОЧИСТИТКА РАЗМЕТКИ
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
                        <span>${currentColor}</span>
                        <p> - Cвободна</p>
                    </div>
                    <div>
                        <p id="datejs">${getCurrentDate()}</p>
                    <div>
                        <form>
                            <input type="select"> </input>
                            <button type="submit">Выдать</button>
                        </form>
                    </div>
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

// ТЕКУЩАЯ ДАТА И ВРЕМЯ - В МОДАЛКЕ (БЕЛЫЙ)
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
    return (localeUk = date.toLocaleString('Uk-uk', options)); // текущая дата
}

// =========================== LIGHT & DARK MODE =================================
const getTheme = () => {
    return localStorage.getItem('theme') || 'dark';
};

const colorScheme = document.querySelector('meta[name="color-scheme"]');

const applyTheme = theme => {
    document.body.className = theme;
    colorScheme.content = theme;
    localStorage.setItem('theme', theme);
};

const themeToggleButton = document.querySelector('.theme-toggle');

let theme = getTheme();
applyTheme(theme);

themeToggleButton.addEventListener('click', event => {
    console.log(event.target);
    const newTheme = theme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
    theme = newTheme;
});
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
