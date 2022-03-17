
let reverseArray = (array) => {
  let newArray = []
  for (let item of array) {
    newArray.unshift(item)
  }
  return newArray
}

let reverseArrayInPlace = (array) => {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i]
    array[i] = array[array.length - 1 - i]
    array[array.length - 1 - i] = old
  }
  return array
}

// Test
console.log(reverseArray(JSON.parse(process.argv[2])))
console.log(reverseArrayInPlace(JSON.parse(process.argv[2])))