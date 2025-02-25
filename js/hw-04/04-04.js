// logo
// Автопроверка домашних заданий по JavaScript

// Задача 4 / 10
// Модуль:
// 4


// Скрыть задание
// Обратная связь
// ↔
// Несколько колбэков
// Функция может принимать произвольное количество колбэков.Например, представим что мы пишем логику принятия звонков для телефона.Программа должна включить автоответчик если абонент недоступен, или соединить звонок в противном случае.Доступность абонента будем имитировать генератором случайного числа, чтобы между разными вызовами функции можно было получить различные результаты.

// function processCall(recipient) {
//   // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
//     // Логика активации автоответчика
//   } else {
//     console.log(`Соединяем с ${recipient}, ожидайте...`);
//     // Логика принятия звонка
//   }
// }

// processCall('Манго');
// Проблема такого подхода в том, что функция processCall делает слишком много и привязывает проверку доступности абонента к двум заранее определённым действиям.Что если в будущем вместо автоответчика нужно будет оставлять голограмму ?

//   Мы могли бы написать функцию так, чтобы она возвращала какое - то значение и потом по результату её выполнения делать проверки и выполнять нужный код.Но проверки не относятся к внешнему коду и будут его засорять.

// Выполним рефакторинг функции так, чтобы она принимала два колбэка onAvailable и onNotAvailable, и вызывала их по условию.

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступеность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }

// processCall('Манго', takeCall, activateAnsweringMachine);
// processCall('Поли', takeCall, leaveHoloMessage);
// Колбэки применяются для обработки действий пользователя на странице, при обработке запросов на сервер, выполнения заранее неизвестных функций и т.п.В этом и заключается их суть - это функции предназначенные для отложенного выполнения.

//   Задание
// Необходимо написать логику обработки заказа пиццы.Выполни рефакторинг метода order так, чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.

// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onError, передавая ему аргументом строку 'В ассортименте нет пиццы с названием <имя пиццы>.'
// Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.
// После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов.Пожалуйста ничего там не меняй.

//   Тесты
// Метод order объявляет три параметра.
// Вызов pizzaPalace.order('Аль Копчино', makePizza, onOrderError) возвращает 'Ваш заказ принят. Готовим пиццу Аль Копчино.'.
// Вызов pizzaPalace.order('Четыре нарезона', makePizza, onOrderError) возвращает 'Ваш заказ принят. Готовим пиццу Четыре нарезона.'.
// Вызов pizzaPalace.order('Биг майк', makePizza, onOrderError) возвращает 'Ошибка! В ассортименте нет пиццы с названием Биг майк.'.
// Вызов pizzaPalace.order('Венская', makePizza, onOrderError) возвращает 'Ошибка! В ассортименте нет пиццы с названием Венская.'.
// Редактор JavaScript:
// 1
// const pizzaPalace = {
//   2
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   3
//   order(pizzaName) { },
// 4
// };
// 5
// // Пиши код выше этой строки
// 6

// 7
// // Колбэк для onSuccess
// 8
// function makePizza(pizzaName) {
//   9
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
//   10
// }
// 11

// 12
// // Колбэк для onError
// 13
// function onOrderError(error) {
//   14
//   return `Ошибка! ${error}`;
//   15
// }
// 16

// 17
// // Вызовы метода с колбэками
// 18
// pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
// 19
// pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
// 20
// pizzaPalace.order('Биг майк', makePizza, onOrderError);
// 21
// pizzaPalace.order('Венская', makePizza, onOrderError);
// 22

// Проверить
// Сбросить
// Скрыть секцию результатов
// Результаты:
// (обновляются при нажатии на кнопку - Проверить)

// ©
// 2020
//   |
//   Политика конфиденциальности

const pizzaPalace = {
  pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
  order(pizzaName, onSuccess, onError) {
    if (!this.pizzas.includes(pizzaName)) {
      return onError(pizzaName)
    }
    return onSuccess(pizzaName)
  }
};
// Пиши код выше этой строки

// Колбэк для onSuccess
function makePizza(pizzaName) {
  return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
}

// Колбэк для onError
function onOrderError(error) {
  return `Ошибка! В ассортименте нет пиццы с названием ${error}.`;
}

// Вызовы метода с колбэками
console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError));
console.log(pizzaPalace.order('Четыре нарезона', makePizza, onOrderError));
console.log(pizzaPalace.order('Биг майк', makePizza, onOrderError));
console.log(pizzaPalace.order('Венская', makePizza, onOrderError));