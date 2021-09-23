# Webpack starter kit &middot; [![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/npm/npm) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)


## Developing

### • [Настройка Webpack 5 с нуля](https://habr.com/ru/post/524260/)
### • [How to use Webpack 5](https://www.taniarascia.com/how-to-use-webpack/)

### Prerequisites

Для корректной работы SASS-компилятора и других инструментов, необходимо один
раз глобально поставить дополнительные пакеты, выполнив в терминале следующие
команды. Пользователям MacOS ничего делать не нужно.

Пользователям **Windows**, в режиме администратора.
[Как запусттить Powershell](https://youtu.be/p2tFnxcymwk) в режиме
администратора.

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

Находясь в папке проекта удалить папку `.git` связанную с репозиторием сборки
выполнив следующую команду.

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

Во вкладке браузера перейти по адресу
[http://localhost:4040](http://localhost:4040).

### Building

Для того чтобы создать оптимизированные файлы для хостинга, необходимо выполнить
следующую команду. В корне проекта появится папка `build` со всеми
оптимизированными ресурсами.

```shell
npm run build
```

### Deploying/Publishing

Сборка может автоматически деплоить билд на GitHub Pages удаленного (remote)
репозитория. Для этого необходимо в файле `package.json` отредактировать поле
`homepage`, заменив имя пользователя и репозитория на свои.

```json
"homepage": "https://имя_пользователя.github.io/имя_репозитория"
```

После чего в терминале выполнить следующую команду.

```shell
npm run deploy
```

Если нет ошибок в коде и свойство `homepage` указано верно, запустится сборка
проекта в продакшен, после чего содержимое папки `build` будет помещено в ветку
`gh-pages` на удаленном (remote) репозитории. Через какое-то время живую
страницу можно будет посмотреть по адресу указанному в отредактированном
свойстве `homepage`.

[Введение в инфраструктуру проектов](https://youtu.be/XpPC4QBCfo4)

  
 ### Libs:
    ▴  https://github.com/mattboldt/typed.js
    ▴  https://atomiks.github.io/tippyjs/
    ▴  https://flatpickr.js.org/
    ▴  https://sciactive.com/pnotify/
    ▴  ttps://pawelgrzybek.github.io/siema/
    ▴  https://basiclightbox.electerious.com/


   ###  [Шпаргалка Bach](https://tproger.ru/translations/bash-cheatsheet/)
   ###  [Шпаргалка Bach 2](https://habr.com/ru/company/ruvds/blog/445270/)
   
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
