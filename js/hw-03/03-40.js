// logo
// Автопроверка домашних заданий по JavaScript

// Задача 40 / 41
// Модуль:
// 3


// Скрыть задание
// Обратная связь
// ↔
// Задача.Обновляем зелье
// Задание
// Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.

//   Тесты
// Объявлена переменная atTheOldToad.
// Значение переменной atTheOldToad это объект.
// Значение свойства atTheOldToad.potions это массив['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'].
// Значение свойства atTheOldToad.updatePotionName это метод объекта.
// После первого вызова метода atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'), в свойстве potions будет массив['Зелье скорости', 'Полиморф', 'Каменная кожа'].
// После второго вызова метода atTheOldToad.updatePotionName('Каменная кожа', 'Невидимка'), в свойстве potions будет массив['Зелье скорости', 'Полиморф', 'Невидимка'].
// Редактор JavaScript:
// 1
// const atTheOldToad = {
//   2
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   3
//   updatePotionName(oldName, newName) {
//     4
//     // Пиши код ниже этой строки
// 5

// 6
//     // Пиши код выше этой строки
// 7
//   },
// 8
// };
// 9

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
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  updatePotionName(oldName, newName) {
    // Пиши код ниже этой строки
    const indexName = this.potions.indexOf(oldName)
    this.potions.splice(indexName, 1, newName)
    return this.potions
    // Пиши код выше этой строки
  },
};

console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));
console.log(atTheOldToad.potions);
