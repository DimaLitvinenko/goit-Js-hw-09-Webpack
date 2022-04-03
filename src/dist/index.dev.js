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
// ===============================================================================================
var refs = {
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
  COLORS: ['white', 'green', 'orange', 'red']
};
var closeModalButton = refs.closeModalButton,
    backdrop = refs.backdrop,
    container = refs.container,
    list = refs.list,
    modal = refs.modal,
    input = refs.input,
    MAX_PILLS = refs.MAX_PILLS,
    idNumbers = refs.idNumbers,
    COLORS = refs.COLORS; // ------------------ ПОДСЧЁТ ЕЛЕМЕНТОВ СПИСКА 'MAX_PILLS'

var countItems = function countItems(length) {
  for (var i = 1; i <= length; ++i) {
    idNumbers.push.apply(idNumbers, [i]);
  }

  return idNumbers;
};

countItems(MAX_PILLS); // ------------------- РЕНДЕРИТ РАЗМЕТКУ ЕЛЕМЕНТОВ(таблеток) СПИСКА от первого до maxPills

var createItemsMarkup = function createItemsMarkup(items) {
  getDateToDay();
  filterbyNumber();
  items.forEach(function (item, index) {
    return list.insertAdjacentHTML('beforeend', "<li class=\"elements-list__item\">\n                <div class=\"circle\">\n                    <div class=\"noise animated\"></div>\n                </div>\n\n                <button \n                 id=\"btn-".concat(index + 1, "\"\n                 class=\"elements-button\" \n                 data-action=\"open-modal\" \n                 data-identifier=\"").concat(index + 1, "\"\n                 data-color=\"white\"\n                 type=\"button\">\n                    ").concat(item, "\n                </button>\n            </li>"));
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
// ---------------------------- ДАТА/ВРЕМЯ


function getDateToDay() {
  var monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  var dayNames = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  var newDate = new Date();
  newDate.setDate(newDate.getDate());
  setInterval(function () {
    //-Get hours
    var hours = new Date().getHours();
    document.getElementById('hours').innerHTML = (hours < 10 ? '0' : '') + hours; //-Get minutes

    var minutes = new Date().getMinutes();
    document.getElementById('minutes').innerHTML = (minutes < 10 ? '0' : '') + minutes; //-Get seconds

    var seconds = new Date().getSeconds();
    document.getElementById('seconds').innerHTML = (seconds < 10 ? '0' : '') + seconds;
    document.getElementById('month').innerHTML = monthNames[newDate.getMonth()];
    document.getElementById('date').innerHTML = newDate.getDate();
    document.getElementById('day').innerHTML = dayNames[newDate.getDay()];
    document.getElementById('year').innerHTML = newDate.getFullYear();
  }, 1000);
} // ===============================================>> MODAL_WINDOW <<==========================================================
// ------------------- ОТКРЫТИЕ МОДАЛЬНОГО ОКНА ПО НАЖАТИЮ НА КНОПКУ 'BUTTON' из списка


var modalOpenHandler = function modalOpenHandler(_ref) {
  var target = _ref.target;

  // console.log(target);
  if (target.nodeName !== 'BUTTON') {
    console.log(target.nodeName);
    return;
  }

  var color = target.dataset.color;
  console.log(color);
  var id = target.textContent;
  console.log(id);
  var buttonElem = document.querySelector("#".concat(target.id));
  console.log(buttonElem);
  var colt = buttonElem.dataset['color'];
  console.log(colt);
  var newColor = buttonElem.dataset['color'] = 'green';
  buttonElem.style.backgroundColor = newColor;
  modalWindowMarkup(color, id); // image.src = target.dataset.source; //>-Подмена значения атрибута `src` элемента `img.lightbox__image`.

  window.addEventListener('keydown', modalCloseByEscHandler);
  container.classList.add('is-open'); // - Открытие модального окна по клику на элементе галереи.
}; // ------------------ ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА ПО НАЖАТИЮ КЛАВИШИ 'ESC' - `button[data-action="close-lightbox"]`.


var modalCloseByEscHandler = function modalCloseByEscHandler(_ref2) {
  var key = _ref2.key;

  if (key === 'Escape') {
    modalCloseHandler();
  }
}; // ЗАКРЫТИЕ МОДЛАЛЬНОГО ОКНА


var modalCloseHandler = function modalCloseHandler() {
  window.removeEventListener('keydown', modalCloseByEscHandler);
  container.classList.remove('is-open');
};

list.addEventListener('click', modalOpenHandler); //>СПИСОК ИЗ КНОПОК(ТАБЛЕТОК)

closeModalButton.addEventListener('click', modalCloseHandler); //>ЗАКРЫТЬ МОДАЛЬНОЕ ОКНО

backdrop.addEventListener('click', modalCloseHandler); //>ФОН МОДАЛЬНОГО ОКНА
// -------------------------------- СБРОС/ОЧИСТИТКА РАЗМЕТКИ

function reset() {
  return modal.innerHTML = '';
} // --------------------------- РАЗМЕТКА/ПЕРЕРИСОВКА ЕЛЕМЕНТОВ ДЛЯ МОДАЛЬНОГО ОКНА


function modalWindowMarkup(currentColor, id) {
  COLORS.forEach(function (color) {
    if (currentColor === 'white' && modalOpenHandler) {
      reset();
      modal.insertAdjacentHTML('beforeend', "\n                    <div>\n                        <h2 class=\"modal-title\">\u0422\u0430\u0431\u043B\u0435\u0442\u043A\u0430 \u2116".concat(id, "</h2>\n                        <span>").concat(currentColor, "</span>\n                        <p> - C\u0432\u043E\u0431\u043E\u0434\u043D\u0430</p>\n                    </div>\n                    <div>\n                        <h3>\u0412\u044B\u0434\u0430\u0447\u0430:</h3>\n                        <p id=\"datejs\">").concat(getCurrentDate(), "</p>\n                        <div>\n                            <form class=\"modal-form\">\n                                <select>\n                                    <optgroup label=\"\u041D\u0435\u043E\u0431\u044B\u0447\u043D\u044B\u0435 \u0446\u0432\u0435\u0442\u044B\">\n                                        <option>\u0410\u043D\u0433\u0443\u043B\u043E\u044F \u043E\u0434\u043D\u043E\u0446\u0432\u0435\u0442\u043A\u043E\u0432\u0430\u044F</option>\n                                        <option>\u041E\u0431\u0435\u0437\u044C\u044F\u043D\u0438\u0439 \u0434\u0440\u0430\u043A\u0443\u043B\u0430</option>\n                                        <option>\u041F\u0430\u0441\u0441\u0438\u0444\u043B\u043E\u0440\u0430 \u0438\u043D\u043A\u0430\u0440\u043D\u0430\u0442\u043D\u0430\u044F</option>\n                                    </optgroup>\n                                </select>\n                            \n                                <label>\n                                    <input type=\"selection\">\n                                </label>\n\n                                <button class=\"modal-form_submit\" type=\"submit\" method=\"GET\">\n                                    <svg class=\"\" width=\"40\" height=\"40\">\n                                        <use href=\"./images/new-icon-sprite.svg#i-wheelchair-alt\"></use>\n                                    </svg>\n                                    \u0412\u044B\u0434\u0430\u0442\u044C\n                                </button>\n                            </form>\n                        </div>\n                    </div>  \n                "));
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
applyTheme(theme);
themeToggleButton.addEventListener('click', function (event) {
  console.log(event.target);
  var newTheme = theme === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
  theme = newTheme;
}); //////////////////////////////////////////////////////////////////////////////////////////////

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