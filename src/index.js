// ============== STYLES ================
// import './templates/style.scss';

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
// import './scss/Components/backdrop.scss';
import './scss/Components/modal-window.scss';
// import './scss/Components/sidebar.scss';

// ============== IMAGES ================
// import './images/icons_moon.svg';
import './images/new-icon-sprite.svg';
// import './images/app-icons-sprite.svg';
// import './images/icon-new_sprite.svg';
// import './images/background/sky-bg_1280.jpg';

// ============ JavaScript ==============
// import './js/filter.js';

// ===============================================================================================

const refs = {
    closeModalButton: document.getElementById('modal-close'),
    backdrop: document.querySelector('.js-backdrop'),
    container: document.querySelector('.js-container'),
    list: document.getElementById('filterElem'),
    modal: document.getElementById('modal'),
    input: document.getElementById('search-input'),
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
    input,
    // headerInput,
    // searchInput,
    MAX_PILLS,
    idNumbers,
    COLORS,
} = refs;

// ------------------ ПОДСЧЁТ ЕЛЕМЕНТОВ СПИСКА 'MAX_PILLS'
const countItems = length => {
    for (let i = 1; i <= length; ++i) {
        idNumbers.push(...[i]);
    }
    return idNumbers;
};
countItems(MAX_PILLS);

// ------------------- РЕНДЕРИТ РАЗМЕТКУ ЕЛЕМЕНТОВ(таблеток) СПИСКА от первого до maxPills
const createItemsMarkup = items => {
    getDateToDay();
    filterbyNumber();
    items.forEach((item, index) => {
        return list.insertAdjacentHTML(
            'beforeend',
            `<li class="elements-list__item">
                <div class="circle">
                    <div class="noise animated"></div>
                </div>

                <button 
                 id="btn-${index + 1}"
                 class="elements-button" 
                 data-action="open-modal" 
                 data-identifier="${index + 1}"
                 data-color="white"
                 type="button"
                >
                    ${item}
                </button>
            </li>`,
        );
    });
};
const markup = createItemsMarkup(idNumbers, idNumbers.length);

// ------------------- FILTER/ФИЛЬТР ЕЛЕМЕНТОВ СПИСКА ПО НОМЕРУ
function filterbyNumber() {
    input.addEventListener('keyup', function () {
        let filter = input.value.toLowerCase(),
            filterItems = document.querySelectorAll('#filterElem li');

        filterItems.forEach(item => {
            if (item.innerHTML.toLowerCase().indexOf(filter) > -1) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

// const filterToItemsHandler = event => {};
// const filterHandler = document
//     .getElementById('#filters-container :checkbox')
//     .click(() => {
//         const selectedColorLength = document
//             .getElementById('#filter-options :checkbox')
//             .filter(':checked').length;
//         const hideItem = document.getElementById('#filter-products li').hide();
//         if (selectedColorLength < 1) {
//         }
//     });

// // On checkbox click in the color filter
// $('#filters-container :checkbox').click(() => {
//     // Define constants for length of checked checkboxes array
//     const selectedColorLength = $('#filter-options :checkbox').filter(':checked').length;
//     // const selectedTypeLength = $('#filter-options-type :checkbox').filter(
//     //     ':checked',
//     // ).length;
//     // Hide all items in the list
//     $('#filter-products li').hide();
//     // If NO checkboxes are selected in color-filter AND type-filter
//     if (selectedColorLength < 1 && selectedTypeLength < 1) {
//         // Show entire product list
//         $('#filter-products li').fadeIn();

//         // If checkboxes are selected in the color-filter ONLY
//     } else if (selectedColorLength >= 1 && selectedTypeLength < 1) {
//         // For each of the checked checkboxes in the color-filter
//         $('#filter-options :checkbox:checked').each((index, element) => {
//             // Show items with the class of the value of the checkbox
//             $('.' + $(element).val()).fadeIn();
//         });

//         // If checkboxes are selected in the type-filter ONLY
//     } else if (selectedColorLength < 1 && selectedTypeLength > 0) {
//         // For each of the checked checkboxes in the type-filter
//         $('#filter-options-type :checkbox:checked').each((index, element) => {
//             // Show items with the class of the value of the checkbox
//             $('.' + $(element).val()).fadeIn();
//         });

//         // If checkboxes are selected in color-filter AND type-filter
//     } else {
//         // For each of the checked checkboxes in the color-filter
//         $('#filter-options-color :checkbox:checked').each((index, element) => {
//             // Define matched color-filter class
//             let colorClass = $(element).val();
//             // For each of the checked checkboxes in the type-filter
//             $('#filter-options-type :checkbox:checked').each((index, element) => {
//                 // Show items with the class of the value of the checkbox
//                 $('.' + $(element).val() + '.' + colorClass).fadeIn();
//             });
//         });
//     }
// });
//-------------------------------------------------------------------------------------------

// ---------------------------- ДАТА/ВРЕМЯ / ЧАСЫ ---------------------------
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

// ===============================================>> MODAL_WINDOW <<==========================================================

// ------------------- ОТКРЫТИЕ МОДАЛЬНОГО ОКНА ПО НАЖАТИЮ НА КНОПКУ 'BUTTON' из списка
const modalOpenHandler = ({ target }) => {
    // console.log(target);
    if (target.nodeName !== 'BUTTON') {
        console.log(target.nodeName);
        return;
    }

    const currentColor = target.dataset.color;
    console.log(currentColor);

    let id = target.textContent;
    console.log(id);

    const buttonElem = document.querySelector(`#${target.id}`);
    console.log(buttonElem);

    let colt = buttonElem.dataset['color'];
    console.log(colt);

    const newColor = (buttonElem.dataset['color'] = 'green');
    buttonElem.style.backgroundColor = newColor;

    modalWindowMarkup(currentColor, id);

    // image.src = target.dataset.source; //>-Подмена значения атрибута `src` элемента `img.lightbox__image`.
    window.addEventListener('keydown', modalCloseByEscHandler);
    container.classList.add('is-open'); // - Открытие модального окна по клику на элементе галереи.
};

// ------------------ ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА ПО НАЖАТИЮ КЛАВИШИ 'ESC' - `button[data-action="close-lightbox"]`.
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

// -------------------------------- СБРОС/ОЧИСТИТКА РАЗМЕТКИ
function reset() {
    return (modal.innerHTML = '');
}

// --------------------------- РАЗМЕТКА/ПЕРЕРИСОВКА ЕЛЕМЕНТОВ ДЛЯ МОДАЛЬНОГО ОКНА
function modalWindowMarkup(currentColor, id) {
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
                        <h3>Выдача:</h3>
                        <p id="datejs">${getCurrentDate()}</p>
                        <div>
                            <form class="modal-form">
                                <select id="pet-select" name="pet" size="4">
                                    <optgroup label="Необычные цветы">
                                        <option value="half-hour">30мин</option>
                                        <option value="one-hour">1ч.</option>
                                        <option value="two-hours">2ч.</option>
                                        <option value="three-hours">3ч.</option>
                                    </optgroup>
                                </select>
                            
                                <div>
                                    <label for="appt-time">Choose an appointment time (opening hours 12:00 to 18:00): </label>
                                    <input id="appt-time" type="time" name="appt-time"
                                        min="12:00" max="18:00" required>
                                    <span class="validity"></span>
                                </div>

                                <button class="modal-form__submit" type="submit" method="POST">
                                    <svg class="" width="40" height="40">
                                        <use href="./images/new-icon-sprite.svg#i-wheelchair-alt"></use>
                                    </svg>
                                    Выдать
                                </button>
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
// =================================== СПОСОБ №1 ========================================
// Установка даты окончания
// const endDate = new Date("Apr 23, 2022 12:00:00").getTime();

// // Определяем таймер
// const intervalId = setInterval(
//   function() {
//   // Расчёт оставшегося времени
//   let dateNow = new Date().getTime();
//   let time = endDate - dateNow;

//   if (time >= 0) {
//     // Конвертация UTC в дни, часы, минуты и секунды
//     let days = Math.floor(time / (1000 * 60 * 60 * 24));
//     let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     let mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//     let secs = Math.floor((time % (1000 * 60)) / 1000);

//     // Вывод таймера
//     document.querySelector('span[data-value="days"]').innerHTML = days;
//     document.querySelector('span[data-value="hours"]').innerHTML = ("0"+hours).slice(-2);
//     document.querySelector('span[data-value="mins"]').innerHTML = ("0"+mins).slice(-2);
//     document.querySelector('span[data-value="secs"]').innerHTML = ("0"+secs).slice(-2);
//   } else {
//     // Уведомление для пользователя, когда закончился отсчёт
//     document.getElementById("timer-1").innerHTML = "The countdown is over!";
//     clearInterval(intervalId);
//   };
// }, 1000);

// ====================================== СПОСОБ №2 ==========================================
// class CountdownTimer {
//     constructor({ selector, targetDate }) {
//         this.intervalId = null;
//         this.selector = selector;
//         this.targetDate = targetDate;
//         this.start();

//         this.refs = {
//             days: document.querySelector(`${this.selector} span[data-value="days"]`),
//             hours: document.querySelector(`${this.selector} span[data-value="hours"]`),
//             mins: document.querySelector(`${this.selector} span[data-value="mins"]`),
//             secs: document.querySelector(`${this.selector} span[data-value="secs"]`),
//         };
//     }

//     calcTheTime() {
//         let dateNow = Date.now();
//         let deltaTime = this.targetDate - dateNow;

//         this.timerReview(deltaTime); // ???

//         this.getTimeComponents(deltaTime);
//     }

//     // Проверка на время
//     timerReview(time) {
//         // ???
//         if (time < 0) {
//             document.querySelector(`${this.selector}`).innerHTML =
//                 'The countdown is over!';

//             clearInterval(intervalId);
//         }
//     }

//     getTimeComponents(time) {
//         let days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//         let hours = this.pad(
//             Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//         );
//         let mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//         let secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

//         this.updateComponents(days, hours, mins, secs);
//     }

//     updateComponents(days, hours, mins, secs) {
//         this.refs.days.textContent = days;
//         this.refs.hours.textContent = hours;
//         this.refs.mins.textContent = mins;
//         this.refs.secs.textContent = secs;
//     }

//     pad(value) {
//         return String(value).padStart(2, '0');
//     }

//     start() {
//         this.intervalId = setInterval(() => {
//             this.calcTheTime();
//         }, 1000);
//     }
// }

// const timeToMyBithday = new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Apr 23, 2022'),
// });

// ================================ ТЕКУЩАЯ ДАТА И ВРЕМЯ - В МОДАЛКЕ (БЕЛЫЙ) =================================
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

// ========================================= THEME_TOGGLE =================================================
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

////////////////////////////////////////////////// ----------------------   ////////////////

// btn.addEventListener('click', () => {
//     const btnClass = btn.getAttribute('class');
//     if (btnClass === 'dark') {
//         btn.setAttribute('class', 'light');
//         btn.textContent = 'Lighten';
//         overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
//     } else {
//         btn.setAttribute('class', 'dark');
//         btn.textContent = 'Darken';
//         overlay.style.backgroundColor = 'rgba(0,0,0,0)';
//     }
// });

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
