import orderByProps from '../js/app';

describe('функция orderByProps', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const sort = ['name', 'level'];
  const sortAll = ['level', 'name', 'health', 'defence', 'attack'];
  const errorSort = ['name', 'level', 'value'];
  const result = [
    { key: 'name', value: 'мечник' }, // порядок взят из массива с ключами
    { key: 'level', value: 2 }, // порядок взят из массива с ключами
    { key: 'attack', value: 80 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
    { key: 'defence', value: 40 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
    { key: 'health', value: 10 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
  ];
  const anotherResult = [
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
    { key: 'health', value: 10 },
    { key: 'defence', value: 40 },
    { key: 'attack', value: 80 },
  ];

  test('Определена', () => {
    expect(orderByProps).toBeDefined();
  });
  test('Возвращает требуемый объект', () => {
    expect(orderByProps(obj, sort)).toEqual(result);
  });
  test('Сортирует массив по всем свойствам', () => {
    expect(orderByProps(obj, sortAll)).toEqual(anotherResult);
  });
  test('Выдает ошибку в случае если свойство не существует', () => {
    function errorOrder() {
      orderByProps(obj, errorSort);
    }
    expect(errorOrder).toThrowError(
      new Error('свойства value не существует в объекте'),
    );
  });
});
