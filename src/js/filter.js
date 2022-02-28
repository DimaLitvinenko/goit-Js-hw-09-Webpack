//DAY END
//get the number of hours until the end of the day
function getHoursUntilEndOfDay(date) {
    var endOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    var hours = Math.ceil((endOfDay.getTime() - date.getTime()) / (1000 * 60 * 60));
    return hours;
}

//get the number of minutes until the end of the day
function getMinutesUntilEndOfDay(date) {
    var endOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    var minutes = Math.ceil((endOfDay.getTime() - date.getTime()) / (1000 * 60));
    return minutes;
}

//get the number of seconds until the end of the day
function getSecondsUntilEndOfDay(date) {
    var endOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    var seconds = Math.ceil((endOfDay.getTime() - date.getTime()) / 1000);
    return seconds;
}

//get today's date
function getToday() {
    var today = new Date();
    return today;
}

setInterval(() => {
    let today = getToday();

    document.querySelector('.hoursLeftDay').innerHTML = getHoursUntilEndOfDay(today);
    document.querySelector('.minutesLeftDay').innerHTML = getMinutesUntilEndOfDay(today);
    document.querySelector('.secondsLeftDay').innerHTML = getSecondsUntilEndOfDay(today);
}, 100);
//////////////////////////////////////////////////////////////////////////////////////////////

// // const saveBtnAction = saveBtn.dataset.action;
// const refs = {
//     closeModalButton: document.querySelector(
//         `button[data-action="modal-close"]`,
//     ),
//     backdrop: document.querySelector('.js-backdrop'),
//     container: document.querySelector('.js-container'),
//     list: document.getElementById('filter'),
//     idNumbers: [],
//     // MAX_PILLS: 70,
// };
// const {
//     openModalButton,
//     closeModalButton,
//     backdrop,
//     container,
//     list,
//     // idNumbers,
//     // MAX_PILLS,
// } = refs;

// const { isArguments } = require('lodash');

// const MAX_PILLS = [70];
// let array = [];

// // ПОДСЧЁТ ЕЛЕМЕНТОВ СПИСКА maxPills
// function countItems() {
//     for (let i = 1; i <= MAX_PILLS; i += 1) {
//         console.log(i);
//         // renderItemMarkup(i);
//         const idNumbers = array.push(i);
//         console.log(idNumbers);
//         return createItemsMarkup(idNumbers, idNumbers.length);
//     }
// }

// // Рендерит разметку списка таблеток от первого до maxPills
// function createItemsMarkup(items) {
//     return list.insertAdjacentHTML(
//         'beforeend',
//         items.map(index => {
//             // console.log(item);
//             return `<li class="filter_list--item">

//                         <button
//                         class="filter_list--button"
//                         data-action="open-modal"
//                         type="button"
//                         >
//                             ${index}
//                         </button>

//                 </li>`;
//         }),
//     );
// }
// // const murkap = createItemsMarkup(numbers, numbers.length);

// // list.addEventListener('click', toggleModal);
// // closeModalButton.addEventListener('click', toggleModal);

// // function toggleModal() {
// //     // if (!refs.modal.classList.contains)
// //     container.classList.toggle('is-open');
// //     // backdrop.classList.toggle('is-hidden');
// // }

// // - Закрытие модального окна по нажатию клавиши `ESC`.
// const modalCloseByEscHandler = ({ key }) => {
//     if (key === 'Escape') {
//         modalCloseHandler();
//     }
// };

// /*
// const scrollGalleryHandler = ({ key }) => {
//     let currentIndex = galleryItems.findIndex(
//         item => item.description === image.alt || item.original === image.src,
//     );
//     if (key === 'ArrowLeft') {
//         // - Пролистывание изображений галереи в открытом модальном окне стрелками "влево".
//         if (currentIndex !== 0) {
//             currentIndex -= 1;
//         } else {
//             currentIndex = 0;
//         }
//     }
//     if (key === 'ArrowRight') {
//         // - Пролистывание изображений галереи в открытом модальном окне стрелками "вправо".
//         if (currentIndex !== galleryItems.length - 1) {
//             currentIndex += 1;
//         } else {
//             currentIndex = galleryItems.length - 1;
//         }
//     }

//     image.alt = galleryItems[currentIndex].description;
//     image.src = galleryItems[currentIndex].original;
// };
// */

// const modalOpenHandler = ({ target, currentTarget }) => {
//     if (target.nodeName !== 'BUTTON') {
//         console.log(target.nodeName);
//         return;
//     }
//     console.log(target);
//     console.log(currentTarget);

//     event.preventDefault();
//     window.addEventListener('keydown', modalCloseByEscHandler);
//     // window.addEventListener('keydown', scrollGalleryHandler);

//     container.classList.add('is-open'); // - Открытие модального окна по клику на элементе галереи.
//     // image.src = target.dataset.source; // - Подмена значения атрибута `src` элемента `img.lightbox__image`.
//     // image.alt = target.alt;
//     // console.log(image.alt);
// };

// const modalCloseHandler = () => {
//     window.removeEventListener('keydown', modalCloseByEscHandler);

//     container.classList.remove('is-open'); // - Закрытие модального окна по клику на кнопку `button[data-action="close-lightbox"]`.
// };

// list.addEventListener('click', modalOpenHandler);
// closeModalButton.addEventListener('click', modalCloseHandler);
// backdrop.addEventListener('click', modalCloseHandler);
// closeModalButton;

// ===============================----------------------===============================================

const refs = {
    closeModalButton: document.getElementById('modal-close'),
    backdrop: document.querySelector('.js-backdrop'),
    container: document.querySelector('.js-container'),
    list: document.getElementById('filter'),
};

const {
    // openModalButton,
    closeModalButton,
    backdrop,
    container,
    list,
} = refs;

const MAX_PILLS = 70;
let idNumbers = [];
// ПОДСЧЁТ ЕЛЕМЕНТОВ СПИСКА maxPills
const countItems = arg => {
    for (let i = 0; i < arg.length; i++) {
        console.log(i);

        idNumbers.push(arg[i]);
        console.alert(idNumbers);
    }
    return idNumbers;
};
countItems(MAX_PILLS);
// Рендерит разметку списка таблеток от первого до maxPills
const createItemsMarkup = () => {
    return list.insertAdjacentHTML(
        'beforeend',
        `<li class="filter_list--item">
            <button class="filter_list--button" data-action="open-modal" type="button">
                ${idNumbers}
            </button>
        </li>`,
    );
};
// createItemsMarkup(idNumbers, idNumbers.length);

const markup = createItemsMarkup(idNumbers, idNumbers.length);

// list.addEventListener('click', toggleModal);
// closeModalButton.addEventListener('click', toggleModal);

// function toggleModal() {
//     // if (!refs.modal.classList.contains)
//     container.classList.toggle('is-open');
//     // backdrop.classList.toggle('is-hidden');
// }

// - Закрытие модального окна по нажатию клавиши `ESC`.
const modalCloseByEscHandler = ({ key }) => {
    if (key === 'Escape') {
        modalCloseHandler();
    }
};

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

const modalOpenHandler = ({ target }) => {
    if (target.nodeName !== 'BUTTON') {
        console.log(target.nodeName);
        return;
    }

    window.addEventListener('keydown', modalCloseByEscHandler);
    // window.addEventListener('keydown', scrollGalleryHandler);

    container.classList.add('is-open'); // - Открытие модального окна по клику на элементе галереи.
    // image.src = target.dataset.source; // - Подмена значения атрибута `src` элемента `img.lightbox__image`.
};

const modalCloseHandler = () => {
    window.removeEventListener('keydown', modalCloseByEscHandler);

    container.classList.remove('is-open'); // - Закрытие модального окна по клику на кнопку `button[data-action="close-lightbox"]`.
};

list.addEventListener('click', modalOpenHandler);
closeModalButton.addEventListener('click', modalCloseHandler);
backdrop.addEventListener('click', modalCloseHandler);
