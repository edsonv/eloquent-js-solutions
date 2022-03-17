let arrays = JSON.parse(process.argv[2]);
console.log(arrays.reduce((flat, current) => flat.concat(current), []));
