// logo
// Автопроверка домашних заданий по JavaScript

// Задача 14 / 41
// Модуль:
// 3


// Скрыть задание
// Обратная связь
// ↔
// Задача.Подсчёт свойств 2.0
// Задание
// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, цикл for...of.

//   Тесты
// Объявлена функция countProps(object).
// Вызов countProps({}) возвращает 0.
// Вызов countProps({ name: 'Mango', age: 2 }) возвращает 2.
// Вызов countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }) возвращает 3.
// Функция подсчитывает только собственные свойства объекта.
// Функция использует метод Object.keys() и, возможно, цикл for...of.
// Редактор JavaScript:
// 1
// function countProps(object) {
//   2
//   // Пиши код ниже этой строки
//   3
//   let propCount = 0;
//   4

//   5
//   for (const key in object) {
//     6
//     if (object.hasOwnProperty(key)) {
//       7
//       propCount += 1;
//       8
//     }
//     9
//   }
//   10

//   11
//   return propCount;
//   12
//   // Пиши код выше этой строки
//   13
// }
// 14

// Проверить
// Сбросить
// Скрыть секцию результатов
// Результаты:
// (обновляются при нажатии на кнопку - Проверить)

// ©
// 2020
//   |
//   Политика конфиденциальности

function countProps(object) {
  // Пиши код ниже этой строки
  let propCount = 0;

  let keys = Object.keys(object)

  for (const key of keys) {
    propCount += 1
  }

  return propCount;
  // Пиши код выше этой строки
}

console.log(countProps({}));