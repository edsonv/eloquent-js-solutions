for (let i = 1; i <= 100; i++) {
  switch (true) {
    case (!(i % 3) && !(i % 5)):
      console.log("FizzBuzz")
      break
    case (!(i % 3)):
      console.log("Fizz")
      break
    case (!(i % 5)):
      console.log("Buzz")
      break
    default:
      console.log(i)
  }
}