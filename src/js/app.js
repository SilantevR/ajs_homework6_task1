export default function orderByProps(obj, props) {
  const result = [];
  const keys = Object.keys(obj);
  keys.sort();
  let element;

  for (const i of props) {
    element = i;
    if (keys.includes(element)) {
      result.push({ key: element, value: obj[element] });
      keys.splice(keys.indexOf(element), 1);
    } else {
      throw new Error(`свойства ${element} не существует в объекте`);
    }
  }
  if (keys.length > 0) {
    for (const i of keys) {
      element = i;
      result.push({ key: element, value: obj[element] });
    }
  }
  return result;
}
