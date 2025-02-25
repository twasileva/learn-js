// logo
// Автопроверка домашних заданий по JavaScript

// Задача 24 / 41
// Модуль:
// 3


// Скрыть задание
// Обратная связь
// ↔
// Деструктуризация в циклах
// При переборе массива объектов циклом for...of получаются множественные обращения к свойствам объекта.

// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     rating: 8.38,
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//   console.log(book.title);
//   console.log(book.author);
//   console.log(book.rating);
// }
// Для того, чтобы сократить количество повторений, можно деструктуризировать свойства объекта в локальные переменные в теле цикла.

//   for(const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }
// Если в объекте немного свойств, деструктуризацию можно выполнить прямо в месте объявления переменной book.

//   for(const { title, author, rating } of books) {
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }
// Задание
// Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта..

//   Тесты
// Объявлена переменная colors.
// Значение переменной colors это массив.
// Объявлена переменная hexColors.
// Значение переменной hexColors это массив['#f44336', '#2196f3', '#4caf50', '#ffeb3b'].
// Объявлена переменная rgbColors.
// Значение переменной rgbColors это массив['244,67,54', '33,150,243', '76,175,80', '255,235,59'].
// Для перебора массива используется цикл for...of.
// В цикле for...of используется деструктуризация объекта.
// Редактор JavaScript:
// 1
// const colors = [
//   2
//   { hex: '#f44336', rgb: '244,67,54' },
//   3
//   { hex: '#2196f3', rgb: '33,150,243' },
//   4
//   { hex: '#4caf50', rgb: '76,175,80' },
//   5
//   { hex: '#ffeb3b', rgb: '255,235,59' },
//   6
// ];
// 7

// 8
// const hexColors = [];
// 9
// const rgbColors = [];
// 10
// // Пиши код ниже этой строки
// 11

// 12
// for (const color of colors) {
//   13
//   hexColors.push(color.hex);
//   14
//   rgbColors.push(color.rgb);
//   15
// }
// 16

// Проверить
// Сбросить
// Скрыть секцию результатов
// Результаты:
// (обновляются при нажатии на кнопку - Проверить)

// ©
// 2020
//   |
//   Политика конфиденциальности

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Пиши код ниже этой строки

for (const { hex, rgb } of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}
console.log(rgbColors);