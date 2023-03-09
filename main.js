let numero1 = 10;
let numero2 = 5

//Igual (==)
console.log(`Igual (==)`)
console.log(`\t${numero1} == "${numero1}" ${numero1==numero1}`)

//No es igual (!=)
console.log(`No es igual (!=)`)
console.log(`\t${numero1} != "${numero2}" ${numero1!=numero2}`)

//Estrictamente igual (===)
console.log(`Estrictamente igual (===)`)
console.log(`\t${numero1} === ${numero1} ${numero1===numero1}`)
console.log(`\t${numero1} === "${numero1}" ${numero1===numero2}`)

//Desigualdad estricta (!==)
console.log(`Desigualdad estricta (!==)`)
console.log(`\t${numero1} !== "${numero1}" ${numero1!==numero2}`)
console.log(`\t${numero1} !== ${numero1} ${numero1!==numero1}`)


//Mayor que (>)
console.log(`Mayor que (>)`)
console.log(`\t${numero1} > ${numero2} ${numero1 > numero2}`)

//Mayor o igual que (>=)
console.log(`Mayor o igual que (>=)`)
console.log(`\t${numero1} >= ${numero1} ${numero1 >= numero1}`)

//Menor que (<)
console.log(`Menor que (<)`)
console.log(`\t${numero2} < ${numero1} ${numero2 < numero1}`)

//Menor o igual (<=)
console.log(`Menor o igual (<=)`)
console.log(`\t${numero1} <= ${numero1} ${numero1 <= numero1}`)