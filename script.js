// Повторить то, что делали на семинаре, либо

// Задание 1
// 1. Поиск в интернете (бесплатные api примеры).
// 2. Найти любые данные, на произвольную тему.
// 3. Создать файл data.js.
// 4. Создать переменную которая будет хранить данные из публичных api.

// Задание 2
// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка загловок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию).

const divEl = document.querySelector('div.container');
const parsResult = JSON.parse(dataCur);
parsResult.forEach(element => {
    const newDiv = document.createElement('div');
    newDiv.classList.add('newDivEl');
    const textData = document.createElement('p');
    textData.innerHTML = element.Date;
    const textCur = document.createElement('p');
    textCur.innerHTML = element.Cur_Abbreviation;
    const curScal = document.createElement('p');
    curScal.innerHTML = element.Cur_Scale;
    newDiv.appendChild(curScal);
    newDiv.appendChild(textCur);
    newDiv.appendChild(textData);
    divEl.appendChild(newDiv);
    
});