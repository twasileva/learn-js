// logo
// Автопроверка домашних заданий по JavaScript

// Задача 37 / 41
// Модуль:
// 3


// Скрыть задание
// Обратная связь
// ↔
// Задача.Получаем все зелья
// Задание
// Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.

//   Тесты
// Объявлена переменная atTheOldToad.
// Значение переменной atTheOldToad это объект.
// Значение свойства atTheOldToad.potions это массив['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'].
// Значение свойства atTheOldToad.getPotions это метод объекта.
// Вызов метода atTheOldToad.getPotions() возвращает['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'].
// Редактор JavaScript:
// 1
// const atTheOldToad = {
//   2
//   // Пиши код ниже этой строки
// 3
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   4
//   // Пиши код выше этой строки
// 5
// };
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

const atTheOldToad = {
  // Пиши код ниже этой строки
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  getPotions() {
    return this.potions
  }
  // Пиши код выше этой строки
};
console.log(atTheOldToad.getPotions());