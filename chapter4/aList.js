let arrayToList = array => {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {
      value: array[i],
      rest: list
    };
  }
  return list;
};

let listToArray = list => {
  let array = [];
  for (let nodo = list; nodo; nodo.rest) {
    array.push(nodo.value);
  }
  return array;
};

let prepend = (value, list) => {
  return {
    value,
    rest: list
  };
};

let nth = (list, n) => {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
};

// Test
console.log(arrayToList([1, 2, 3]));
console.log(prepend(0, arrayToList([1, 2, 3])))
console.log(nth(arrayToList([1, 2, 3]), 2))