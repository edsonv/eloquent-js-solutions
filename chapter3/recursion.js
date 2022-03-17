


// Esta función toma un número entero (N⁺ ó N⁻) como argumento y calcula si este es par.



// isEven() verifica si un número natural (N) es par
let isEven = (N) => {
  if (N == 0) { // 0 is even
    return true
  } else if (N == 1) { // 1 is odd
    return false
  } else if (N < 0) { // If the number is negative multiply by -1
    return isEven(-N)
  } else { // Recusive calling
    return isEven(N - 2)
  }
}

// Se ejecuta la función isEven.
console.log(isEven(process.argv[2] || 50))
console.log(isEven(process.argv[2] || 75))
console.log(isEven(process.argv[2] || -1))