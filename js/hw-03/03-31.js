// logo
// Автопроверка домашних заданий по JavaScript

// Задача 31 / 41
// Модуль:
// 3


// Скрыть задание
// Обратная связь
// ↔
// Операция rest для сбора всех аргументов функции
// Операция ... (rest) позволяет собрать группу независимых элементов в новую коллекцию.Синтаксически это близнец операции распыления, но отличить их просто - распыление это когда ...находится в правой части операции присваивания, а сбор это когда ...находится в её левой части.

// Вернёмся к аналогии с яблоками.Если на полу лежат яблоки и у нас есть пустой ящик, то операция rest позволит «собрать» яблоки в ящик.При этом оригинальные яблоки останутся на полу, а в ящике будет копия каждого яблока.

// Одна из областей применения операции rest это создание функций которые могут принимать произвольное количество аргументов.

// // Как объявить параметры функции так,
// // чтобы можно было передать любое кол-во аргументов?
// function multiply() {
//   // ...
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);
// Если убрать весь «синтаксический шум» и посмотреть на аргументы и параметры функции, то аргументы находятся в правой части операции присваивания, а параметры в левой, потому что значения аргументов присваиваются объявленным параметрам.Значит можно «собрать» все аргументы функции в один параметр используя операцию rest.

// function multiply(...args) {
//   console.log(args); // массив всех аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);
// Имя параметра может быть произвольным.Чаще всего его называют args, restArgs или otherArgs, сокращённое от arguments.

//   Задание
// Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов, считала и возвращала их сумму.

//   Тесты
// Объявлена функция add.
// Функция add использует параметр args.
// Для сбора аргументов в переменную args, в подписи функции используется синтаксис ... (оперетор rest).
// Вызов add(15, 27) возвращает 42.
// Вызов add(12, 4, 11, 48) возвращает 75.
// Вызов add(32, 6, 13, 19, 8) возвращает 78.
// Вызов add(74, 11, 62, 46, 12, 36) возвращает 241.
// Редактор JavaScript:
// 1
// // Пиши код ниже этой строки
// 2
// function add() {
//   3
//   // Пиши код выше этой строки
//   4
// }
// 5

// Проверить
// Сбросить
// Скрыть секцию результатов
// Результаты:
// (обновляются при нажатии на кнопку - Проверить)

// ©
// 2020
//   |
//   Политика конфиденциальности

// Пиши код ниже этой строки
function add(...args) {
  // Пиши код выше этой строки
  let total = 0

  for (const arg of args) {
    total += arg
  }
  return total
}

console.log(add(15, 27));