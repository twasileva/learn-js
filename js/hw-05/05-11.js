// logo
// Автопроверка домашних заданий по JavaScript

// Задача 11 / 19
// Модуль:
// 5


// Скрыть задание
// Обратная связь
// ↔
// Приватные свойства
// Инкапсуляция - это концепция позволяющая скрыть внутренние детали класса.Пользователь класса должен получать доступ только к публичному интерфейсу - набору публичных свойств и методов класса.

// В классах инкапсуляция реализуется приватными свойствами, доступ к которым можно получить только внутри класса.Это одно из отличий классов и функций - конструкторов - в классах легко объявить приватные свойства.

// Допустим почта пользователя должна быть недоступна из вне, то есть приватна.Добавляя к имени свойства символ # мы делаем его приватным.Объявление приватного свойства до инциализации в конструкторе - обязательно.

// class User {
//   // Необязательное объявление публичных свойств
//   name;
//   // Обязательное объявление приватных свойств
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({ name: 'Манго', email: 'mango@mail.com' });

// mango.changeEmail('mango@supermail.com');
// console.log(mango.getEmail()); // mango@supermail.com
// console.log(mango.#email); // Будет ошибка, это приватное свойство
// Методы класса также могут быть приватными, то есть доступны только в теле класса.Для этого перед их именем необходимо поставить символ #.

//   Задание
// Выполни рефакторинг класса Car так, чтобы свойство brand было приватным и добавь два метода для публичного интерфейса, для чтения и изменения этого свойства.

//   getBrand() - возвращает значение приватного свойства brand.
//     changeBrand(newBrand) - изменяет значение приватного свойства brand на newBrand.
//       Тесты
// Объявлен класс Car.
// Свойство brand в классе Car объявлено приватным.
// Конструктор класса принимает объект со свойствами brand, model и price.
// В результате вызова new Car({ brand: 'Audi', model: 'Q3', price: 36000 }) получится объект { model: 'Q3', price: 36000 }.
// В результате вызова new Car({ brand: 'BMW', model: 'X5', price: 58900 }) получится объект { model: 'X5', price: 58900 }.
// В результате вызова new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }) получится объект { model: 'Murano', price: 31700 }.
// У экземпляра нет публичного свойства brand.
// Метод getBrand() возвращает значение приватного свойства brand.
// Метод changeBrand('Honda') изменяет значение приватного свойства brand на 'Honda'.
// Редактор JavaScript:
// 1
// class Car {
//   2
//   constructor({ brand, model, price }) {
//     3
//     this.brand = brand;
//     4
//     this.model = model;
//     5
//     this.price = price;
//     6
//   }
//   7
// }
// Проверить
// Сбросить
// Скрыть секцию результатов
// Результаты:
// (обновляются при нажатии на кнопку - Проверить)

// ©
// 2020
//   |
//   Политика конфиденциальности

class Car {

  #brand

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }

  getBrand() {
    return this.#brand
  }

  changeBrand(newBrand) {
    return this.#brand = newBrand
  }
}
const car = new Car({ brand: 'Audi', model: 'Q3', price: 36000 })

console.log(car);
console.log(car.getBrand());
car.changeBrand('Honda')
console.log(car);
