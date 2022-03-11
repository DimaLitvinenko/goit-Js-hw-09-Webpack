<h1 align="center">Webpack kit</h1>

<p align="center">
<a href="https://https://webpack.js.org/?screen_name=shields_io">
  <img alt="Webpack" src="https://img.shields.io/static/v1?labelColor=darkblue&color=blue&message=v5.53.0&label=Webpack&style=plastic&logo=webpack&url=https://webpack.js.org">
</a> 
 <a href="https://sass-lang.com//?screen_name=shields_io">
  <img alt="SASS" src="https://img.shields.io/static/v1?labelColor=darkviolet&color=violet&message=v1.42.1&label=sass&style=plastic&logo=sass&url=https://sass-lang.com">
</a> 
<a href="https://nodejs.org/en/about/?screen_name=shields_io">
        <img src="https://img.shields.io/static/v1?labelColor=purple&color=darkorchid&message=v14.17.6&label=Node.js&style=plastic&logo=nodedotjs&url=https://nodejs.org/en/about"
             alt="Node.js">
</a>
</p>

==================================================CHECKBOX-==============

```html
<section title=".squaredOne">
    <!-- .squaredOne -->
    <div class="squaredOne">
        <input type="checkbox" value="None" id="squaredOne" name="check" checked />
        <label for="squaredOne"></label>
    </div>
    <!-- end .squaredOne -->
</section>
```

```css
@import 'compass/css3';

/* $activeColor: #c0392b; //red */
$activeColor: #27ae60; //green
$darkenColor: darken($activeColor, 20%);
/* $background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/13460/dark_wall.png'); */
$background: #3498db;
.squaredOne {
    width: 28px;
    height: 28px;
    position: relative;
    margin: 20px auto;
    background: #fcfff4;
    background: linear-gradient(top, #fcfff4 0%, #dfe5d7 40%, #b3bead 100%);
    box-shadow: inset 0px 1px 1px white, 0px 1px 3px rgba(0, 0, 0, 0.5);
    label {
        width: 20px;
        height: 20px;
        position: absolute;
        top: 4px;
        left: 4px;
        cursor: pointer;
        background: linear-gradient(top, #222 0%, #45484d 100%);
        box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.5), 0px 1px 0px rgba(255, 255, 255, 1);
        &:after {
            content: '';
            width: 16px;
            height: 16px;
            position: absolute;
            top: 2px;
            left: 2px;
            background: $activeColor;
            background: linear-gradient(top, $activeColor 0%, $darkenColor 100%);
            box-shadow: inset 0px 1px 1px white, 0px 1px 3px rgba(0, 0, 0, 0.5);
            opacity: 0;
        }
        &:hover::after {
            opacity: 0.3;
        }
    }
    input[type='checkbox'] {
        visibility: hidden;
        &:checked + label:after {
            opacity: 1;
        }
    }
}
```

```js
$(document).ready(function () {
    //   Hide the border by commenting out the variable below
    const $on = 'section';
    $($on).css({
        background: 'none',
        border: 'none',
        'box-shadow': 'none',
    });
});
```

============================================================================
========================================== ORDERS ========================

```js
// Функция order() отображает окно для покупки товара с наименованием "item_25new".
// Названия платёжных событий пишутся в контейнер с id="callbacks".

function order() {
    const params = {
        type: 'item',
        item: 'item_25new',
    };
    VK.callMethod('showOrderBox', params);
}

let callbacksResults = document.getElementById('callbacks');

VK.addCallback('onOrderSuccess', function (order_id) {
    callbacksResults.innerHTML += '<br />onOrderSuccess ' + order_id;
});
VK.addCallback('onOrderFail', function () {
    callbacksResults.innerHTML += '<br />onOrderFail';
});
VK.addCallback('onOrderCancel', function () {
    callbacksResults.innerHTML += '<br />onOrderCancel';
});

// Обратите внимание — в тестовом режиме подписка 5 раз автоматически продлевается раз в 10 минут (для period = month) и раз в 2 минуты для других значений period. После этого подписка автоматически отменяется.

function order() {
    VK.callMethod('showSubscriptionBox', 'create', { item: 'subscription1' });
}

let callbacksResults = document.getElementById('callbacks');

VK.addCallback('onSubscriptionSuccess', function (subscription_id) {
    callbacksResults.innerHTML += '<br />onSubscriptionSuccess ' + subscription_id;
});
VK.addCallback('onSubscriptionFail', function () {
    callbacksResults.innerHTML += '<br />onSubscriptionFail';
});
VK.addCallback('onSubscriptionCancel', function () {
    callbacksResults.innerHTML += '<br />onSubscriptionCancel';
});

// Функция order позволяет отобразить пользователю окно для покупки товара с наименованием 'subscription_25new'. Названия произошедших платёжных событий пишутся в контейнер с id="callbacks".
```

==============================================================
============================================ CHECKBOX ======================

```HTML
<label class="b-contain">
    <span>First checkbox</span> <input type="checkbox" />
    <div class="b-input"></div>
</label>
<label class="b-contain">
    <span>Second checkbox</span> <input type="checkbox" checked />
    <div class="b-input"></div>
</label>
<label class="b-contain">
    <input type="checkbox" disabled /> <span>Third checkbox</span>
    <div class="b-input"></div>
</label>
<label class="b-contain">
    <span>Fourth checkbox</span> <input type="checkbox" checked disabled />
    <div class="b-input"></div>
</label>

<label class="b-contain">
    <span>First radio</span>
    <input type="radio" name="radio1" />
    <div class="b-input"></div>
</label>
<label class="b-contain">
    <span>Second radio</span>
    <input type="radio" name="radio1" checked />
    <div class="b-input"></div>
</label>
<label class="b-contain">
    <input type="radio" name="radio2" disabled />
    <span>Third radio</span>
    <div class="b-input"></div>
</label>
<label class="b-contain">
    <span>Fourth radio</span>
    <input type="radio" name="radio2" checked disabled />
    <div class="b-input"></div>
</label>
```

```css
.b-contain *,
.b-contain *::before,
.b-contain *::after {
    box-sizing: content-box !important;
}

.b-contain input {
    position: absolute;
    z-index: -1;
    opacity: 0;
}

.b-contain span {
    line-height: 1.54;
    font-size: 1rem;
    font-family: inherit;
}

.b-contain {
    display: table;
    position: relative;
    padding-left: 1.8rem;
    cursor: pointer;
    margin-bottom: 0.5rem;
}

.b-contain input[type='checkbox'] ~ .b-input {
    position: absolute;
    top: 0;
    left: 0;
    height: 1.25rem;
    width: 1.25rem;
    background: rgba(241, 245, 248, 1);
    transition: background 250ms;
    border: 1px solid rgba(184, 194, 204, 1);
    border-radius: 0.125rem;
}

.b-contain input[type='radio'] ~ .b-input {
    position: absolute;
    top: 0;
    left: 0;
    height: 1.25rem;
    width: 1.25rem;
    background: rgba(241, 245, 248, 1);
    transition: background 250ms;
    border: 1px solid rgba(184, 194, 204, 1);
    border-radius: 2rem;
}

.b-contain input[type='checkbox'] ~ .b-input::after {
    content: '';
    position: absolute;
    display: none;
    left: 0.45rem;
    top: 0.18rem;
    width: 0.25rem;
    height: 0.6rem;
    border: solid rgba(255, 255, 255, 1);
    border-width: 0 2px 2px 0;
    transition: background 250ms;
    transform: rotate(45deg);
}

.b-contain input[type='radio'] ~ .b-input::after {
    content: '';
    position: absolute;
    display: none;
    left: 0.25rem;
    top: 0.25rem;
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 2rem;
    background: rgba(255, 255, 255, 1);
    transition: background 250ms;
}

.b-contain input:disabled ~ .b-input::after {
    border-color: rgba(135, 149, 161, 1);
}

.b-contain input:checked ~ .b-input::after {
    display: block;
}

.b-contain:hover input ~ .b-input,
.b-contain input:focus ~ .b-input {
    background: rgb(231, 238, 243);
}

.b-contain input:focus ~ .b-input {
    box-shadow: 0 0 0 2px rgba(52, 144, 220, 0.5);
}

.b-contain input:checked ~ .b-input {
    background: rgba(0, 130, 243, 1);
    border-color: rgba(0, 130, 243, 1);
}

.b-contain input[type='checkbox']:disabled ~ .b-input {
    background: rgba(241, 245, 248, 1);
    border-color: rgba(184, 194, 204, 1);
    opacity: 0.6;
    cursor: not-allowed;
}

.b-contain input[type='radio']:disabled ~ .b-input {
    background: rgba(241, 245, 248, 1);
    border-color: rgba(184, 194, 204, 1);
    opacity: 0.6;
    cursor: not-allowed;
}

.b-contain input[type='radio']:disabled ~ .b-input::after {
    background: rgba(135, 149, 161, 1);
}

.b-contain input:checked:focus ~ .b-input,
.b-contain:hover input:not([disabled]):checked ~ .b-input {
    background: rgba(13, 143, 255, 1);
    border-color: rgba(13, 143, 255, 1);
}

.b-contain .b-input::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 3rem;
    height: 3rem;
    margin-left: -0.85rem;
    margin-top: -0.85rem;
    background: rgba(0, 130, 243, 1);
    border-radius: 2rem;
    opacity: 0.6;
    z-index: 99999;
    transform: scale(0);
}

@keyframes b-ripple {
    0% {
        transform: scale(0);
    }

    20% {
        transform: scale(1);
    }

    100% {
        opacity: 0;
        transform: scale(1);
    }
}

@keyframes b-ripple-duplicate {
    0% {
        transform: scale(0);
    }

    30% {
        transform: scale(1);
    }

    60% {
        transform: scale(1);
    }

    100% {
        opacity: 0;
        transform: scale(1);
    }
}

.b-contain input + .b-input::before {
    animation: b-ripple 250ms ease-out;
}

.b-contain input:checked + .b-input::before {
    animation-name: b-ripple-duplicate;
}

.b-contain .b-input::before {
    visibility: hidden;
}

.b-contain input:focus + .b-input::before {
    visibility: visible;
}

.b-contain:first-child .b-input::before {
    visibility: hidden;
}
```

'beforeend', `<li class="filter-list__item"> <a href="#" 
            id="btn-${index + 1}"
            class="filter-list__button" 
            data-action="open-modal"
            data-identifier="${index + 1}"
            data-color="white"> <div class="filter-icon">
<svg class="icon-pills" width="18" height="18">
<use href="./images/icons_moon.svg#enter"></use> </svg> </div>
<h3 class="filter-title">Step
${index + 1}</h3>
                <div class="filter-descr">${item}</div> </a>

            </li>`,

<button 
                id="btn-${index + 1}"
                class="filter-list__button" 
                data-action="open-modal" 
                data-identifier="${index + 1}"
                data-color="white"
                type="button"> ${item} </button>

===================================================================

## Developing

## ClassNames **(БЭМ)**

```css
.block {
    // БЛОК;
}
.block__element {
    // БЛОК__НАЗВАНИЕ ЕЛЕМЕНТА;
}
.block--modificator {
    // БЛОК--НАЗВАНИЕ МОДИФИКАТОРА;
}
```

### • [Настройка Webpack 5 с нуля](https://habr.com/ru/post/524260/)

### • [How to use Webpack 5](https://www.taniarascia.com/how-to-use-webpack/)

### Prerequisites

Для корректной работы SASS-компилятора и других инструментов, необходимо один раз
глобально поставить дополнительные пакеты, выполнив в терминале следующие команды.
Пользователям MacOS ничего делать не нужно.

Пользователям **Windows**, в режиме администратора.
[Как запусттить Powershell](https://youtu.be/p2tFnxcymwk) в режиме администратора.

```shell
npm install --global --production windows-build-tools
```

Вот как выглядит процесс успешной установки для пользователей **Windows**.

![Установка windows-build-tools](https://user-images.githubusercontent.com/1426799/45007904-bde9f280-afb4-11e8-8a35-c77dffaffa2a.gif)

Пользователям **Linux**.

```shell
sudo apt-get install gcc g++ make
```

### Setting up Dev

Для быстрого старта необходимо склонировать репозиторий.

```shell
git clone https://github.com/luxplanjay/webpack-starter-kit.git
```

Переименовать папку сборки именем вашего проекта.

```shell
mv webpack-starter-kit имя_проекта
```

Затем перейти в папку проекта.

```shell
cd имя_проекта
```

Находясь в папке проекта удалить папку `.git` связанную с репозиторием сборки выполнив
следующую команду.

```shell
npx rimraf .git
```

Установить все зависимости.

```shell
npm install
```

И запустить режим разработки.

```shell
npm start
```

Во вкладке браузера перейти по адресу [http://localhost:4040](http://localhost:4040).

### Building

Для того чтобы создать оптимизированные файлы для хостинга, необходимо выполнить следующую
команду. В корне проекта появится папка `build` со всеми оптимизированными ресурсами.

```shell
npm run build
```

### Deploying/Publishing

Сборка может автоматически деплоить билд на GitHub Pages удаленного (remote) репозитория.
Для этого необходимо в файле `package.json` отредактировать поле `homepage`, заменив имя
пользователя и репозитория на свои.

```json
"homepage": "https://имя_пользователя.github.io/имя_репозитория"
```

После чего в терминале выполнить следующую команду.

```shell
npm run deploy
```

Если нет ошибок в коде и свойство `homepage` указано верно, запустится сборка проекта в
продакшен, после чего содержимое папки `build` будет помещено в ветку `gh-pages` на
удаленном (remote) репозитории. Через какое-то время живую страницу можно будет посмотреть
по адресу указанному в отредактированном свойстве `homepage`.

[Введение в инфраструктуру проектов](https://youtu.be/XpPC4QBCfo4)

### Libs:

    ▴  https://github.com/mattboldt/typed.js
    ▴  https://atomiks.github.io/tippyjs/
    ▴  https://flatpickr.js.org/
    ▴  https://sciactive.com/pnotify/
    ▴  ttps://pawelgrzybek.github.io/siema/
    ▴  https://basiclightbox.electerious.com/

### [Шпаргалка Bach](https://tproger.ru/translations/bash-cheatsheet/)

### [Шпаргалка Bach 2](https://habr.com/ru/company/ruvds/blog/445270/)

## + Терминал

### • Открыть:

        ▪ (Ctrl + ~) (Ctrl + `)
        ▪ view > teminal
        ▪ через палитру (Ctrl + Shift + p)

### • Выйти из REPL:

        ▪ (Ctrl + c)

### • Основные полезные команды:

        ▪ путь (pwd)
        ▪ лист (ls)
        ▪ навигация (cd):
            ▴ (cd ~) - перемещение в домашний каталог;
            ▴ (cd -) - в предыдущий каталог;
            ▴ (cd ..) - на один уровень выше;
            ▴ (cd Directory1/Directory2) - в каталог Directory2 по указанному пути;
        ▪ очистка (clear) или (Ctrl + l)
        ▪ создание файлов (touch)
        ▪ создание папок (mkdir)
        ▪ переименование/перемещение (mv) (mv file src/file)
        ▪ удаление (rm):
            ▴ (rm -rf src) - удаление со всем комплектующим
        ▪ информация о команде (man) (man mkdir)

## + [Node.js и npm:](https://nodejs.org/en/about/)

### • [npmjs.com](https://www.npmjs.com/) - сайт с документацией о пакетах

### • работа с пакетами:

        ▪ установка (npm install namePackage)
        ▪ удаление (npm uninstall namePackage)

### • CommonJS модули

### • npm-скрипты:

        ▪ pre и post

## + Транспиляция кода:

### • [Babel](https://babeljs.io/) - компилятор JavaScript

### • CLI и npm-скрипты

### • Пресеты

### • [Browserslist](https://github.com/browserslist/browserslist)

## + [Сборщик Parcel](https://parceljs.org/)

## + [Сборщик Webpack](https://webpack.js.org/):

## + [ECMAScript модули](https://exploringjs.com/es6/ch_modules.html):

### • Дефолтный (default) експорт и импорт

### • Именованный (named) експорт и импорт

### • Импорт пространства имён (namespace)
