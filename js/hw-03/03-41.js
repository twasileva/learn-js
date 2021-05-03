// logo
// Автопроверка домашних заданий по JavaScript

// Задача 41 / 41
// Модуль:
// 3


// Скрыть задание
// Обратная связь
// ↔
// Задача.Расширяем инвентарь
// Задание
// Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками.Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

// {
//   name: 'Дыхание дракона',
//     price: 700
// }
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

//   getPotions() - метод для получения всех зелий.Возвращает значение свойства potions.
//     addPotion(newPotion) - добавляет зелье newPotion(уже объект) в массив в свойстве potions.
//       removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
//         updatePotionName(oldName, newName) - обновляет свойство name объекта - зелья с названием oldName на newName в массиве potions.
//           Тесты
// Объявлена переменная atTheOldToad.
// Значение переменной atTheOldToad это объект.
// Значение свойства atTheOldToad.getPotions это метод объекта.
// Вызов метода atTheOldToad.getPotions() для исходного объекта возвращает[{ name: 'Зелье скорости', price: 460 }, { name: 'Дыхание дракона', price: 780 }, { name: 'Каменная кожа', price: 520 }].
// Значение свойства atTheOldToad.addPotion это метод объекта.
// Для исходного объекта после вызова метода atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }), в массиве potions последним элементом будет этот объект.
// Для исходного объекта после вызова метода atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 }), в массиве potions последним элементом будет этот объект.
// Значение свойства atTheOldToad.removePotion это метод объекта.
// Для исходного объекта после вызова метода atTheOldToad.removePotion('Дыхание дракона'), в свойстве potions будет массив[{ name: 'Зелье скорости', price: 460 }, { name: 'Каменная кожа', price: 520 }].
// Для исходного объекта после вызова метода atTheOldToad.removePotion('Зелье скорости'), в свойстве potions будет массив[{ name: 'Дыхание дракона', price: 780 }, { name: 'Каменная кожа', price: 520 }].
// Значение свойства atTheOldToad.updatePotionName это метод объекта.
// Для исходного объекта после вызова метода atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'), в свойстве potions будет массив[{ name: 'Зелье скорости', price: 460 }, { name: 'Полиморф', price: 780 }, { name: 'Каменная кожа', price: 520 }].
// Для исходного объекта после вызова метода atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости'), в свойстве potions будет массив[{ name: 'Зелье скорости', price: 460 }, { name: 'Дыхание дракона', price: 780 }, { name: 'Зелье неуязвимости', price: 520 }].
// Редактор JavaScript:
// 1
// const atTheOldToad = {
//   2
//   potions: [
//     3
//     { name: 'Зелье скорости', price: 460 },
//   4
//     { name: 'Дыхание дракона', price: 780 },
//   5
//     { name: 'Каменная кожа', price: 520 },
//   6
//   ],
// 7
// // Пиши код ниже этой строки
// 8
// getPotions() {
//   9
//   return this.potions;
//   10
// },
// 11
// addPotion(potionName) {
//   12
//   if (this.potions.includes(potionName)) {
//     13
//     return `Зелье ${potionName} уже есть в инвентаре!`;
//     14
//   }
//   15

//   16
//   this.potions.push(potionName);
//   17
// },
// 18
// removePotion(potionName) {
//   19
//   const potionIndex = this.potions.indexOf(potionName);
//   20

//   21
//   if (potionIndex === -1) {
//     22
//     return `Зелья ${potionName} нет в инвентаре!`;
//     23
//   }
//   24

//   25
//   this.potions.splice(potionIndex, 1);
//   26
// },
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
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {

    for (const potion of this.potions) {

      if (potion.name === potionName.name) {
        return `Зелье ${potionName.name} уже есть в инвентаре!`;
      }
    }

    this.potions.push(potionName);
  },
  removePotion(potionName) {

    for (let i = 0; i < this.potions.length; i += 1) {
      const potion = this.potions[i]

      if (potionName === potion.name) {
        return this.potions.splice(i, 1);
      }
    }
    return `Зелья ${potionName} нет в инвентаре!`;
  },
  updatePotionName(oldName, newName) {

    for (let i = 0; i < this.potions.length; i += 1) {
      const potion = this.potions[i]

      if (oldName === potion.name) {
        const keys = Object.keys(potion)

        for (const key of keys) {

          if (potion[key] === oldName) {
            potion[key] = newName
            return this.potions
          }
        }
      }
    }
    return `Зелья ${oldName} нет в инвентаре!`;
  },
  // Пиши код выше этой строки
};

console.log(atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости'));
