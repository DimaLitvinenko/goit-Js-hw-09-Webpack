// import item from '../templates/list.hbs';
const maxPills = 70;

// Рендерит разметку списка таблеток от первого до maxPills
function renderItemMarkup(number) {
    let list = document.getElementById('filter');
    // let itemBtn = document.querySelector('.filter_list--button');
    // itemBtn.textContent = `${number}`;
    // console.log(item);

    // return list.append(item);
    list.insertAdjacentHTML(
        'beforeend',
        `<li class="filter_list--item">
            <button data-modal-open type="button" class="filter_list--button" >
                ${number}
            </button>
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

function openModal() {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-open]'),
        closeModalBtn: document.querySelector('[data-modal-close]'),
        modal: document.querySelector('[data-backdrop]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        console.log(event.target);
        // if (!refs.modal.classList.contains)
        document.body.classList.toggle('modal-open');
        refs.modal.classList.toggle('is-hidden');
    }

    // function openModalHandler() {
    //     document.body.classList.toggle('.modal-open');
    //     refs.modal.classList.toggle('.is-hidden');
    // }
    // function closeModalHandler() {
    //     document.body.classList.toggle('.modal-open');
    //     refs.modal.classList.toggle('is-hidden');
    // }
}
openModal();
