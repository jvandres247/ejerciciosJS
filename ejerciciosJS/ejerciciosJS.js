//1.-Multiplicar dos numeros sin utilizar el signo de multiplicacion
const multiply = (a,b) => {
    let resultado = 0
    const positivo = Math.abs(b) === b
    for (i=0; i < Math.abs(b); i++){
        resultado = positivo ? resultado + a : resultado - a
    }
    return resultado
}
const a = multiply(10,-10)
console.log("El resultado de la multiplicacion es: ", a)

//2.-Obtener el numero mayor en un arreglo, pero iterando el arreglo solo una vez
const getBiggest = (arr) => arr.reduce((acc, el) => acc > el ? acc : el)
const b = getBiggest([50, 100, 1, 102, 0, 1, 54])
console.log("El numero mayor es: ", b)

//3.-Iterando un arreglo solamente una vez, escribir una funcion que elimine los undefined, false, ceros y null
const clean = (arr) => arr.reduce((acc, el)=> {
    if(el){
        acc.push(el)
    }
    return acc
}, [])
const c = clean([1, null, undefined, 0, 0, null, false, 2, 3, 5])
console.log("El arreglo final es: ", c)

//4.-Escribir una funcion que aplane los arreglos en un nivel
const arr = [[1,2], [[3,4]], [1,[]]]
//Salida esperada: [1,2,[3,4],1,[]]
const flatten = arr => arr.reduce((acc, el) => acc.concat(el), [])
const d = flatten(arr)
console.log("El arreglo aplanado es: ", d)

//5.-Escribir una funcion que cuente la cantidad de veces que se repite una palabra
const repeated = str => {
    const lowered = str.toLowerCase()
    const splitted = lowered.split(' ')
    const reduced = splitted.reduce((acc,el) => {
        if(acc[el]){
            acc[el]++
        }else{
            acc[el] = 1
        } return acc
    }, {})
    return Object.entries(reduced).reduce((acc,el)=> acc[1] > el[1] ? acc : el)
}
const e = repeated('this is a repeated word test this is a a an anhoter a')
console.log("Lo mas repetido es: ", e)

//6.-Verificar si un string es un palindromo
const isPalindrome = (str) => {
    str = str.replace(/\s/g, '')
    const lowered = str.toLowerCase()
    const splitted = lowered.split('')
    const reversed = splitted.reverse()
    const joined = reversed.join('')
    return lowered == joined
}
const f = isPalindrome('anita lava la tina')
console.log("Es palindromo: ", f)