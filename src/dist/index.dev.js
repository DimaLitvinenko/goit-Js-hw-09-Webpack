"use strict";

require("./scss/Utils/variables.scss");

require("./scss/Utils/visually-hidden.scss");

require("./scss/Utils/media-queries.scss");

require("./scss/Base/common.scss");

require("./scss/Base/container.scss");

require("./scss/Components/header.scss");

require("./scss/Components/main-content.scss");

require("./scss/Components/modal-window.scss");

require("./images/new-icon-sprite.svg");

var _refs = _interopRequireDefault(require("./js/references/refs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// ============== STYLES ================
// import './templates/style.scss';
// ------------- UTILS --------------
// ------------- BASE ---------------
// ---------- COMPONENTS ------------
// import './scss/Components/backdrop.scss';
// import './scss/Components/sidebar.scss';
// ============== IMAGES ================
// import './images/icons_moon.svg';
// import './images/app-icons-sprite.svg';
// import './images/icon-new_sprite.svg';
// import './images/background/sky-bg_1280.jpg';
// ============ JavaScript ==============
// import './js/filter.js';
// ============== Template ==============
// import btnContent from './templates/index.hbs';
// ===============================================================================================
var closeModalButton = _refs["default"].closeModalButton,
    backdrop = _refs["default"].backdrop,
    container = _refs["default"].container,
    list = _refs["default"].list,
    modal = _refs["default"].modal,
    input = _refs["default"].input,
    modalBtnSubmit = _refs["default"].modalBtnSubmit,
    modalBtnCancel = _refs["default"].modalBtnCancel,
    MAX_PILLS = _refs["default"].MAX_PILLS,
    idNumbers = _refs["default"].idNumbers,
    COLORS = _refs["default"].COLORS; // ------------------ ПОДСЧЁТ ЕЛЕМЕНТОВ СПИСКА 'MAX_PILLS'

var countItems = function countItems(length) {
  for (var i = 1; i <= length; ++i) {
    idNumbers.push.apply(idNumbers, [i]);
  }

  return idNumbers;
};

countItems(MAX_PILLS); // ------------------- РЕНДЕРИТ РАЗМЕТКУ ЕЛЕМЕНТОВ(таблеток) СПИСКА от первого до maxPills

var createItemsMarkup = function createItemsMarkup(items) {
  // getDateToDay();
  filterbyNumber();
  items.forEach(function (item, index) {
    return list.insertAdjacentHTML('beforeend', "<li class=\"elements-list__item\">\n                <div class=\"circle\">\n                    <div class=\"noise animated\"></div>\n                </div>\n    \n                <button \n                 id=\"btn-".concat(index + 1, "\"\n                 class=\"elements-button\" \n                 data-action=\"open-modal\" \n                 data-identifier=\"").concat(index + 1, "\"\n                 data-color=\"white\"\n                 type=\"button\"\n                >\n                    ").concat(item, "\n                </button>\n            </li>"));
  });
};

var markup = createItemsMarkup(idNumbers, idNumbers.length); // ------------------- FILTER/ФИЛЬТР ЕЛЕМЕНТОВ СПИСКА ПО НОМЕРУ

function filterbyNumber() {
  input.addEventListener('keyup', function () {
    var filter = input.value.toLowerCase(),
        filterItems = document.querySelectorAll('#filterElem li');
    filterItems.forEach(function (item) {
      if (item.innerHTML.toLowerCase().indexOf(filter) > -1) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
} // const filterToItemsHandler = event => {};
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
// function getDateToDay() {
//     let monthNames = [
//         'Январь',
//         'Февраль',
//         'Март',
//         'Апрель',
//         'Май',
//         'Июнь',
//         'Июль',
//         'Август',
//         'Сентябрь',
//         'Октябрь',
//         'Ноябрь',
//         'Декабрь',
//     ];
//     let dayNames = [
//         'Воскресенье',
//         'Понедельник',
//         'Вторник',
//         'Среда',
//         'Четверг',
//         'Пятница',
//         'Суббота',
//     ];
//     let newDate = new Date();
//     newDate.setDate(newDate.getDate());
//     setInterval(function () {
//         //-Get hours
//         let hours = new Date().getHours();
//         document.getElementById('hours').innerHTML = (hours < 10 ? '0' : '') + hours;
//         //-Get minutes
//         let minutes = new Date().getMinutes();
//         document.getElementById('minutes').innerHTML =
//             (minutes < 10 ? '0' : '') + minutes;
//         //-Get seconds
//         let seconds = new Date().getSeconds();
//         document.getElementById('seconds').innerHTML =
//             (seconds < 10 ? '0' : '') + seconds;
//         document.getElementById('month').innerHTML = monthNames[newDate.getMonth()];
//         document.getElementById('date').innerHTML = newDate.getDate();
//         document.getElementById('day').innerHTML = dayNames[newDate.getDay()];
//         document.getElementById('year').innerHTML = newDate.getFullYear();
//     }, 1000);
// }
// ===============================================>> MODAL_WINDOW <<==========================================================
// ------------------- ОТКРЫТИЕ МОДАЛЬНОГО ОКНА ПО НАЖАТИЮ НА КНОПКУ 'BUTTON' из списка


var modalOpenHandler = function modalOpenHandler(_ref) {
  var target = _ref.target;

  if (target.nodeName !== 'BUTTON') {
    console.log(target.nodeName);
    return;
  }

  var currentColor = target.dataset.color;
  var btnIndex = target.textContent;
  modalWindowMarkup(currentColor, btnIndex);
  var buttonElem = document.querySelector("#".concat(target.id));
  console.log(buttonElem);
  var newColor = buttonElem.dataset['color'] = 'green';
  buttonElem.style.backgroundColor = newColor; // image.src = target.dataset.source; //>-Подмена значения атрибута `src` элемента `img.lightbox__image`.

  window.addEventListener('keydown', modalCloseByEscHandler);
  container.classList.add('is-open'); // - Открытие модального окна по клику на элементе галереи.
}; // ------------------ ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА ПО НАЖАТИЮ КЛАВИШИ 'ESC' - `button[data-action="close-lightbox"]`.


var modalCloseByEscHandler = function modalCloseByEscHandler(_ref2) {
  var key = _ref2.key;

  if (key === 'Escape') {
    modalCloseHandler();
  }
}; // ЗАКРЫТИЕ МОДЛАЛЬНОГО ОКНА


function modalCloseHandler() {
  window.removeEventListener('keydown', modalCloseByEscHandler);
  container.classList.remove('is-open');
}

list.addEventListener('click', modalOpenHandler); //>СПИСОК ИЗ КНОПОК(ТАБЛЕТОК)

closeModalButton.addEventListener('click', modalCloseHandler); //>ЗАКРЫТЬ МОДАЛЬНОЕ ОКНО

backdrop.addEventListener('click', modalCloseHandler); //>ЗАКРЫТЬ НАЖАВ НА ФОН МОДАЛЬНОГО ОКНА
// modalBtnCancel.addEventListener('click', modalCloseHandler); //> ЗАКРЫТЬ НАЖАВ КНОПКУ CANCEL
// -------------------------------- СБРОС/ОЧИСТИТКА РАЗМЕТКИ

function reset() {
  return modal.innerHTML = '';
} // --------------------------- РАЗМЕТКА/ПЕРЕРИСОВКА ЕЛЕМЕНТОВ ДЛЯ МОДАЛЬНОГО ОКНА


function modalWindowMarkup(currentColor, id) {
  COLORS.map(function (color) {
    if (currentColor === 'white' && modalOpenHandler) {
      reset();
      modal.insertAdjacentHTML('beforeend', "\n                    <div>\n                        <h2 class=\"modal-title\">\u0422\u0430\u0431\u043B\u0435\u0442\u043A\u0430 \u2116".concat(id, "</h2>\n                        <span>").concat(currentColor, "</span>\n                        <p> - C\u0432\u043E\u0431\u043E\u0434\u043D\u0430</p>\n                    </div>\n                    <div>\n                        <h3>\u0412\u044B\u0434\u0430\u0447\u0430:</h3>\n                        <p id=\"datejs\">").concat(getCurrentDate(), "</p>\n                        <div>\n                            <form class=\"modal-form\" id=\"modalForm\">\n                                <select id=\"pet-select\" name=\"pet\" size=\"4\">\n                                    <optgroup label=\"\u041D\u0435\u043E\u0431\u044B\u0447\u043D\u044B\u0435 \u0446\u0432\u0435\u0442\u044B\">\n                                        <option value=\"half-hour\">30\u043C\u0438\u043D</option>\n                                        <option value=\"one-hour\">1\u0447.</option>\n                                        <option value=\"two-hours\">2\u0447.</option>\n                                        <option value=\"three-hours\">3\u0447.</option>\n                                    </optgroup>\n                                </select>\n                            \n                                <div>\n                                    <label for=\"appt-time\">Choose an appointment time (opening hours 12:00 to 18:00): </label>\n                                    <input id=\"appt-time\" type=\"time\" name=\"appt-time\"\n                                        min=\"12:00\" max=\"18:00\">\n                                    <span class=\"validity\"></span>\n                                </div>\n                                \n                                <div class=\"stepper\">\n                                    <!-- Minus button -->\n                                    <button type=\"button\" class=\"stepper__button\">-</button>\n\n                                    <!-- Input container -->\n                                    <div class=\"stepper__content\">\n                                        <input \n                                        type=\"text\" \n                                        name=\"chose-time\" \n                                        class=\"stepper__input\" \n                                        min=\"0:30\" \n                                        max=\"4:00\"\n                                        value=\"0:30\"\n                                        />\n                                    </div>\n\n                                    <!-- Plus button -->\n                                    <button type=\"button\" class=\"stepper__button\">+</button>\n                                </div>\n\n                                <button \n                                    class=\"modal-form__submit\" \n                                    id=\"modalSubmit\"\n                                    data-color=\"").concat(currentColor, "\"\n                                    type=\"submit\" \n                                    method=\"POST\"\n                                >   \n                                    \u0412\u044B\u0434\u0430\u0442\u044C\n                                    <svg class=\"\" width=\"30\" height=\"30\">\n                                        <use href=\"./images/new-icon-sprite.svg#i-wheelchair-alt\"></use>\n                                    </svg>\n                                </button>\n                                <button \n                                    type=\"reset\"\n                                    id=\"cancelBtn\"\n                                >\n                                    \u041E\u0442\u043C\u0435\u043D\u0430\n                                </button>\n                                <input \n                                    type=\"reset\" \n                                    value=\"Reset\"\n                                />\n                            </form>\n                        </div>\n                    </div>  \n                "));
    } else if (currentColor === 'green' && modalOpenHandler) {
      reset();
      modal.insertAdjacentHTML('beforeend', "   \n                    <div>\n                        <h2 class=\"modal-title\">\u0422\u0430\u0431\u043B\u0435\u0442\u043A\u0430 \u2116".concat(id, "</h2>\n                        <p><span>").concat(currentColor, "</span> - \u0417\u0430\u043D\u044F\u0442\u0430</p>\n                    </div>\n                    <div></div>\n                "));
    } else if (currentColor === 'orange' && modalOpenHandler) {
      reset();
      modal.insertAdjacentHTML('beforeend', "   \n                    <div>\n                        <h2 class=\"modal-title\">\u0422\u0430\u0431\u043B\u0435\u0442\u043A\u0430 \u2116".concat(id, "</h2>\n                        <p><span>").concat(currentColor, "</span> - \u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C 10 \u043C\u0438\u043D.</p>\n                    </div>\n                    <div></div>\n                "));
    } else if (currentColor === 'red' && modalOpenHandler) {
      reset();
      modal.insertAdjacentHTML('beforeend', "\n                    <div>\n                        <h2 class=\"modal-title\">\u0422\u0430\u0431\u043B\u0435\u0442\u043A\u0430 \u2116".concat(id, "</h2>\n                        <p><span>").concat(currentColor, "</span> - \u0412\u0440\u0435\u043C\u044F \u0432\u044B\u0439\u0448\u043B\u043E</p>\n                    </div>\n                    <div></div>\n                "));
    }
  });
} // =================================== СПОСОБ №1 ========================================
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
  var date = new Date(); // формат вывода

  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  var localeUk;
  return localeUk = date.toLocaleString('Uk-uk', options); // текущая дата
} // ========================================= THEME_TOGGLE =================================================


var getTheme = function getTheme() {
  return localStorage.getItem('theme') || 'dark';
};

var colorScheme = document.querySelector('meta[name="color-scheme"]');

var applyTheme = function applyTheme(theme) {
  document.body.className = theme;
  colorScheme.content = theme;
  localStorage.setItem('theme', theme);
};

var themeToggleButton = document.querySelector('.theme-toggle');
var theme = getTheme();
applyTheme(theme); // const detectTheme = () => {
//     if (theme || colorScheme.matches === 'dark') {
//         applyTheme(theme);
//         document.themeToggleButton.removeAttribute(checked);
//     }
// };
// detectTheme();

themeToggleButton.addEventListener('click', function (event) {
  console.log(event.target);
  var newTheme = theme === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
  theme = newTheme;
}); ////////////////////////////////////////////////// ----------------------   ////////////////
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