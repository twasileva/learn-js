// logo
// Автопроверка домашних заданий по JavaScript

// Задача 12 / 19
// Модуль:
// 5


// Скрыть задание
// Обратная связь
// ↔
// Задача.Хранилище 2.0
// Задание
// Выполни рефакторинг заменив функцию - конструктор Storage на класс с методами.Сделай так, чтобы свойство items было приватным.

// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты.Пожалуйста ничего там не меняй.

//   Тесты
// Объявлен класс Storage.
// Свойство items в классе Storage объявлено приватным.
// Конструктор класса принимает свойство items.
// Вызов Storage.prototype.hasOwnProperty('getItems') возвращает true.
// Вызов Storage.prototype.hasOwnProperty('addItem') возвращает true.
// Вызов Storage.prototype.hasOwnProperty('removeItem') возвращает true.
// В результате вызова new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']) значение переменной storage это объект.
// Вызов Storage.prototype.isPrototypeOf(storage) возвращает true.
// У объекта storage нет свойства items.
// Первый вызов storage.getItems(), сразу после инциализации экземпляра, возвращает массив["Нанитоиды", "Пролонгер", "Антигравитатор"].
// Второй вызов, storage.getItems(), после вызова storage.addItem('Дроид'), возвращает массив["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"].
// Третий вызов storage.getItems(), после вызова storage.removeItem('Пролонгер'), возвращает массив["Нанитоиды", "Антигравитатор", "Дроид"].
// Редактор JavaScript:
// 1
// function Storage(items) {
//   2
//   this.items = items;
//   3
// }
// 4

// 5
// Storage.prototype.getItems = function () {
//   6
//   return this.items;
//   7
// };
// 8

// 9
// Storage.prototype.addItem = function (newItem) {
//   10
//   this.items.push(newItem);
//   11
// };
// 12

// 13
// Storage.prototype.removeItem = function (item) {
//   14
//   const itemIndex = this.items.indexOf(item);
//   15
//   this.items.splice(itemIndex, 1);
//   16
// };
// 17

// 18
// // Пиши код выше этой строки
// 19
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// 20
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// 21
// storage.addItem("Дроид");
// 22
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// 23
// storage.removeItem("Пролонгер");
// 24
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]
// 25

// Проверить
// Сбросить
// Скрыть секцию результатов
// Результаты:
// (обновляются при нажатии на кнопку - Проверить)

// ©
// 2020
//   |
//   Политика конфиденциальности

// function Storage(items) {
//   this.items = items;
// }

// Storage.prototype.getItems = function () {
//   return this.items;
// };

// Storage.prototype.addItem = function (newItem) {
//   this.items.push(newItem);
// };

// Storage.prototype.removeItem = function (item) {
//   const itemIndex = this.items.indexOf(item);
//   this.items.splice(itemIndex, 1);
// };

class Storage {
  #items

  constructor(items) {
    this.#items = items
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(item) {
    const itemIndex = this.#items.indexOf(item);
    this.#items.splice(itemIndex, 1);
  }
}

// Пиши код выше этой строки
const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem("Дроид");
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem("Пролонгер");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]
