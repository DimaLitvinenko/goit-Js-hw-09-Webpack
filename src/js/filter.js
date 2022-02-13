// const saveBtnAction = saveBtn.dataset.action;
const refs = {
    openModalButton: document.querySelector(`[data-action="open-modal"]`),
    closeModalButton: document.querySelector(`[data-action="modal-close"]`),
    backdrop: document.querySelector('.js-backdrop'),
    container: document.querySelector('.js-container'),
    list: document.getElementById('filter'),
    // idNumbers: [],
    // MAX_PILLS: 70,
};
const {
    openModalButton,
    closeModalButton,
    backdrop,
    container,
    list,
    // idNumbers,
    // MAX_PILLS,
} = refs;

const MAX_PILLS = 70;
let idNumbers = [];

// ПОДСЧЁТ ЕЛЕМЕНТОВ СПИСКА maxPills
function countItems() {
    for (let i = 1; i <= MAX_PILLS; i += 1) {
        console.log(i);
        // renderItemMarkup(i);
        const pillsArray = idNumbers.push(i);
        console.log(pillsArray);
        createItemsMarkup(pillsArray, pillsArray.length);
    }
}

// Рендерит разметку списка таблеток от первого до maxPills
function createItemsMarkup(items) {
    return list.insertAdjacentHTML(
        'beforeend',
        items.map(index => {
            console.log(index);
            `<li class="filter_list--item">
                    <a
                    class="filter_list--link"
                    href="#!"
                    data-index="${index}"
                    >
                        <button 
                        class="filter_list--button" 
                        data-action="open-modal" 
                        type="button" 
                        >
                            ${index}
                        </button>
                    </a>
                </li>`;
        }),
    );
}
// const murkap = createItemsMarkup(numbers, numbers.length);

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

const modalOpenHandler = ({ event, target, currentTarget }) => {
    if (target.nodeName !== 'BUTTON') {
        return;
    }
    console.log(target);
    console.log(currentTarget);

    event.preventDefault();
    window.addEventListener('keydown', modalCloseByEscHandler);
    // window.addEventListener('keydown', scrollGalleryHandler);

    container.classList.add('is-open'); // - Открытие модального окна по клику на элементе галереи.
    // image.src = target.dataset.source; // - Подмена значения атрибута `src` элемента `img.lightbox__image`.
    // image.alt = target.alt;
    // console.log(image.alt);
};

const modalCloseHandler = () => {
    window.removeEventListener('keydown', modalCloseByEscHandler);

    container.classList.remove('is-open'); // - Закрытие модального окна по клику на кнопку `button[data-action="close-lightbox"]`.
};

list.addEventListener('click', modalOpenHandler);
closeModalButton.addEventListener('click', modalCloseHandler);
backdrop.addEventListener('click', modalCloseHandler);
