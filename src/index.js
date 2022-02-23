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
    MAX_PILLS: 70,
    idNumbers: [],
};

const { closeModalButton, backdrop, container, list, MAX_PILLS, idNumbers } = refs;

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
console.log(idNumbers);

// Рендерит разметку списка таблеток от первого до maxPills
const createItemsMarkup = items => {
    items.map(item => {
        return list.insertAdjacentHTML(
            'beforeend',
            `<li class="filter_list--item">
                <button 
                class="filter_list--button" 
                data-action="open-modal" 
                type="button">
                    ${item}
                </button>
            </li>`,
        );
    });
};
const markup = createItemsMarkup(idNumbers, idNumbers.length);

// ================================== MODAL WINDOW =======================================.
// - Закрытие модального окна по нажатию клавиши `ESC`.
const modalCloseByEscHandler = ({ key }) => {
    if (key === 'Escape') {
        modalCloseHandler();
    }
};

// - Открытие модального окна по нажатию клавиши `ESC`.
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

// - Закрытие модального окна.
const modalCloseHandler = () => {
    window.removeEventListener('keydown', modalCloseByEscHandler);
    container.classList.remove('is-open'); // - Закрытие модального окна по клику на кнопку `button[data-action="close-lightbox"]`.
};

list.addEventListener('click', modalOpenHandler);
closeModalButton.addEventListener('click', modalCloseHandler);
backdrop.addEventListener('click', modalCloseHandler);

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
