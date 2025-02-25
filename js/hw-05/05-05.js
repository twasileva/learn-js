// logo
// Автопроверка домашних заданий по JavaScript

// Задача 5 / 19
// Модуль:
// 5


// Скрыть задание
// Обратная связь
// ↔
// Свойство prototype
// Мы уже знаем что такое прототип объекта, свойство __proto__ и как происходит поиск отсутствующих свойств объекта по цепочке прототипов.Во время вызова функции - конструктора через new и создания нового объекта со свойствами, ему также устанавливается прототип.

// У каждой функции, кроме стрелочных, есть свойство prototype, значение которого это объект с единственным свойством constructor, указывающим на саму функцию - конструктор.

// function User() { }
// console.log(User.prototype); // { constructor: User }
// При вызове функции - конструктора и создании объекта через new, объект в свойстве prototype функции - конструктора будет прототипом создаваемого объекта.

// const mango = new User();
// console.log(User.prototype.isPrototypeOf(mango)); // true
// В свойство prototype можно записывать свойства и методы, которые будут доступны всем объектам созданным этой функцией - конструктором.Методы в prototype будут вызываться объектами созданными функцией - конструктором, поэтому для доступа к свойствам вызываемого объекта в методах используется ключевое слово this.

// function User({ name, email }) {
//   this.name = name;
//   this.email = email;
// }

// User.prototype.getEmail = function () {
//   return this.email;
// };

// User.prototype.changeEmail = function (newEmail) {
//   this.email = newEmail;
// };

// const mango = new User({ name: 'Манго', email: 'mango@mail.com' });

// console.log(mango.getEmail()); // mango@mail.com
// mango.changeEmail('mango@supermail.com');
// console.log(mango.getEmail()); // mango@supermail.com
// Задание
// Добавь в свойство prototype функции - конструктора Car два метода:

// getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
//   changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.
//     Тесты
// Объявлена функция Car({ brand, model, price }).
// Вызов Car.prototype.hasOwnProperty('getPrice') возвращает true.
// Значение Car.prototype.getPrice это функция.
// Вызов Car.prototype.hasOwnProperty('changePrice') возвращает true.
// Значение Car.prototype.changePrice это функция.
// У объекта, созданного вызовом new Car({ brand: 'Audi', model: 'Q3', price: 36000 }), вызов метода getPrice() вернет число 36000.
// У объекта, созданного вызовом new Car({ brand: 'Audi', model: 'Q3', price: 36000 }), вызов метода changePrice(35000) и последующем вызове getPrice() вернет число 35000.
// Редактор JavaScript:
// 1
// function Car({ brand, model, price }) {
//   2
//   this.brand = brand;
//   3
//   this.model = model;
//   4
//   this.price = price;
//   5
// }
// 6

// Проверить
// Сбросить
// Скрыть секцию результатов
// Результаты:
// (обновляются при нажатии на кнопку - Проверить)

// ©
// 2020
//   |
//   Политика конфиденциальности

function Car({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

Car.prototype.getPrice = function () {
  return this.price
}

Car.prototype.changePrice = function (newPrice) {
  return this.price = newPrice
}

const car = new Car({ brand: 'Audi', model: 'Q3', price: 36000 })


// console.log(Car.prototype.hasOwnProperty('getPrice'));
console.log(car.getPrice());
car.changePrice(35000)
console.log(car.getPrice());
