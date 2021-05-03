
// logo
// Автопроверка домашних заданий по JavaScript

// Задача 3 / 41
// Модуль:
// 3


// Скрыть задание
// Обратная связь
// ↔
// Доступ к свойствам через точку
// Первый способ получить доступ к свойству объекта это синтаксис обьект.ключ_свойства.Синтаксис «через точку» используется в большинстве случаев и подходит тогда, когда мы заранее знаем имя(ключ) свойства к которому хотим получить доступ.

// На место обращения будет возвращено значение свойства с таким именем.
// Если в объекте нет свойства с таким именем, на место обращения вернётся undefined.
// const book = {
//   title: 'Последнее королевство',
//   author: 'Бернард Корнуэлл',
//   genres: ['историческая проза', 'приключения'],
//   public: true,
//   rating: 8.38,
// };

// const bookTitle = book.title;
// console.log(bookTitle); // 'Последнее королевство'

// const bookGenres = book.genres;
// console.log(bookGenres); // ['историческая проза', 'приключения']

// const bookPrice = book.price;
// console.log(bookPrice); // undefined
// Задание
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

//   aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.
//   Тесты
// Объявлена переменная apartment.
// Значение переменной apartment это объект.
// У объекта переменной apartment присутствуют свойства imgUrl, descr, rating, price и tag со значениями.
// Объявлена переменная aptRating.
// Значение переменной aptRating это число 4.
// Объявлена переменная aptDescr.
// Значение переменной aptDescr это строка 'Просторная квартира в центре'.
// Объявлена переменная aptPrice.
// Значение переменной aptPrice это число 2153.
// Объявлена переменная aptTags.
// Значение переменной aptTags это массив строк['premium', 'promoted', 'top'].
// Редактор JavaScript:
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// // Пиши код ниже этой строки
// const aptRating = apartment;
// const aptDescr = apartment;
// const aptPrice = apartment;
// const aptTags = apartment;
// // Пиши код выше этой строки
// 1
// const apartment = {
//   2
//     imgUrl: 'https://via.placeholder.com/640x480',
//   3
//     descr: 'Просторная квартира в центре',
//   4
//     rating: 4,
//   5
//     price: 2153,
//   6
//     tags: ['premium', 'promoted', 'top'],
//   7
//   };
// 8

// 9
// // Пиши код ниже этой строки
// 10
// const aptRating = apartment;
// 11
// const aptDescr = apartment;
// 12
// const aptPrice = apartment;
// 13
// const aptTags = apartment;
// 14
// // Пиши код выше этой строки
// Проверить
// Сбросить
// Скрыть секцию результатов
// Результаты:
// (обновляются при нажатии на кнопку - Проверить)

// ©
// 2020
//   |
//   Политика конфиденциальности

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};

// Пиши код ниже этой строки
const aptRating = apartment.rating
const aptDescr = apartment.descr
const aptPrice = apartment.price
const aptTags = apartment.tags
// Пиши код выше этой строки
console.log(aptRating, aptDescr);