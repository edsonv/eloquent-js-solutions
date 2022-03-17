let countBs = (string) => {
  return countChar(string, "B")
}

let countChar = (string, testChar = 'B') => {
  let count = 0
  for (let char in string) {
    if (string[char] == testChar) {
      count++
    }
  }
  return count
}

/*
    Destructuring assignment for the arguments passed when calling the .js file
    to the variables string and testChar used by the functions defined here
*/
// let { string, testChar } = { string: process.argv[2], testChar: process.argv[3] }

// if (process.argv[3]) { // 
//   console.log(countChar(string, testChar))
// } else {
//   console.log(countBs(string))
// }

console.log(countBs(`Betty Botter
  Betty Botter had some butter,
  "But," she said, "this butter's bitter.
  If I bake this bitter butter,
  it would make my batter bitter.
  But a bit of better butter--
  that would make my batter better."
  So she bought a bit of butter,
  better than her bitter butter,
  and she baked it in her batter,
  and the batter was not bitter.
  So 'twas better Betty Botter
  bought a bit of better butter.`))

console.log(countChar(`Betty Botter
  Betty Botter had some butter,
  "But," she said, "this butter's bitter.
  If I bake this bitter butter,
  it would make my batter bitter.
  But a bit of better butter--
  that would make my batter better."
  So she bought a bit of butter,
  better than her bitter butter,
  and she baked it in her batter,
  and the batter was not bitter.
  So 'twas better Betty Botter
  bought a bit of better butter.`, "b"))