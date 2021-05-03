// logo
// Автопроверка домашних заданий по JavaScript

// Задача 20 / 41
// Модуль:
// 3


// Скрыть задание
// Обратная связь
// ↔
// Задача.Общая стоимость товара
// Задание
// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара.Функция должна вернуть общую стоимость(цена * количество) товара с таким именем из массива products.

//   Тесты
// Объявлена функция calculateTotalPrice(productName).
// Вызов calculateTotalPrice('Бластер') возвращает 0.
// Вызов calculateTotalPrice('Радар') возвращает 5200.
// Вызов calculateTotalPrice('Дроид') возвращает 2800.
// Вызов calculateTotalPrice('Захват') возвращает 10800.
// Вызов calculateTotalPrice('Сканер') возвращает 8100.
// Редактор JavaScript:
// 1
// const products = [
//   2
//   { name: 'Радар', price: 1300, quantity: 4 },
//   3
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   4
//   { name: 'Дроид', price: 400, quantity: 7 },
//   5
//   { name: 'Захват', price: 1200, quantity: 9 },
//   6
// ];
// 7

// 8
// function calculateTotalPrice(productName) {
//   9
//   // Пиши код ниже этой строки
//   10

//   11

//   12

//   13
//   // Пиши код выше этой строки
//   14
// }
// 15

// Проверить
// Сбросить
// Скрыть секцию результатов
// Результаты:
// (обновляются при нажатии на кнопку - Проверить)

// ©
// 2020
//   |
//   Политика конфиденциальности

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
  let totalPrice = 0

  for (const product of products) {

    if (product['name'] === productName) {
      totalPrice = product['price'] * product['quantity']
    }
  }

  return totalPrice

  // Пиши код выше этой строки
}
console.log(calculateTotalPrice('Радар'));
console.log(calculateTotalPrice('Бластер'));
console.log(calculateTotalPrice('Дроид'));