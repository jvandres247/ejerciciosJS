//1.-Multiplicar dos numeros sin utilizar el signo de multiplicacion
const multiply = (a, b) => {
  let resultado = 0;
  const positivo = Math.abs(b) === b;
  for (i = 0; i < Math.abs(b); i++) {
    resultado = positivo ? resultado + a : resultado - a;
    console.log("ACA:"+ (i+1) + ' ' + resultado);
  }
  return resultado;
};
const a = multiply(10, -10);
console.log("El resultado de la multiplicacion es: ", a);

//2.-Obtener el numero mayor en un arreglo, pero iterando el arreglo solo una vez
const getBiggest = (arr) => arr.reduce((acc, el) => (acc > el ? acc : el));
const b = getBiggest([50, 100, 1, 102, 0, 1, 54]);
console.log("El numero mayor es: ", b);

//3.-Iterando un arreglo solamente una vez, escribir una funcion que elimine los undefined, false, ceros y null
const clean = (arr) =>
  arr.reduce((acc, el) => {
    if (el) {
      acc.push(el);
    }
    return acc;
  }, []);
const c = clean([1, null, undefined, 0, 0, null, false, 2, 3, 5]);
console.log("El arreglo final es: ", c);

//4.-Escribir una funcion que aplane los arreglos en un nivel
const arr = [[1, 2], [[3, 4]], [1, []]];
//Salida esperada: [1,2,[3,4],1,[]]
const flatten = (arr) => arr.reduce((acc, el) => acc.concat(el), []);
const d = flatten(arr);
console.log("El arreglo aplanado es: ", d);

//5.-Escribir una funcion que cuente la cantidad de veces que se repite una palabra
const repeated = (str) => {
  const lowered = str.toLowerCase();
  const splitted = lowered.split(" ");
  const reduced = splitted.reduce((acc, el) => {
    if (acc[el]) {
      acc[el]++;
    } else {
      acc[el] = 1;
    }
    return acc;
  }, {});
  return Object.entries(reduced).reduce((acc, el) =>
    acc[1] > el[1] ? acc : el
  );
};
const e = repeated("this is a repeated word test this in th this word, this word work with this");
console.log("Lo mas repetido es: ", e);

//6.-Verificar si un string es un palindromo
const isPalindrome = (str) => {
  str = str.replace(/\s/g, "");
  const lowered = str.toLowerCase();
  const splitted = lowered.split("");
  const reversed = splitted.reverse();
  const joined = reversed.join("");
  return lowered == joined;
};
const f = isPalindrome("anita lava la tina");
console.log("Es palindromo: ", f);

//7.- Dado un string, hacer el reverso de ese string
const reverseInPlace = (str) => {
  var words = [];
  words = str.match(/\S+/g);
  var result = "";
  for (var i = 0; i < words.length; i++) {
    result += words[i].split("").reverse().join("") + " ";
  }
  return result;
};
const g = reverseInPlace("anita me puso a trabajar");
console.log("La palabra reversa es: ", g);

//8.-Metodo de la burbuja ascendente
const bubbleSortAsc = (bubbleArrAsc) => {
  const l = bubbleArrAsc.length;
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < l - 1 - i; j++) {
      if (bubbleArrAsc[j] > bubbleArrAsc[j + 1]) {
        [bubbleArrAsc[j], bubbleArrAsc[j + 1]] = [
          bubbleArrAsc[j + 1],
          bubbleArrAsc[j],
        ];
      }
    }
  }
  return bubbleArrAsc;
};
const bubbleArrAsc = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1];
const resultAsc = bubbleSortAsc(bubbleArrAsc);

console.log("El arreglo ordenado ascendente: ", resultAsc);

//8.-Metodo de la burbuja descendente

const bubbleSortDesc = (bubbleArrDesc) => {
  const l = bubbleArrDesc.length;
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < l - 1 - i; j++) {
      if (bubbleArrDesc[j] > bubbleArrDesc[j - 1]) {
        [bubbleArrDesc[j], bubbleArrDesc[j - 1]] = [
          bubbleArrDesc[j - 1],
          bubbleArrDesc[j],
        ];
      }
    }
  }
  return bubbleArrDesc;
};
const bubbleArrDesc = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1];
const resultDesc = bubbleSortDesc(bubbleArrDesc);

console.log("El arreglo ordenado descendente: ", resultDesc);

//9.-Insertion sort

const insertionSort = (arrInsertionSort) => {
  const l = arrInsertionSort.length;
  let j, temp;
  for (let i = 1; i < l; i++) {
    j = i;
    temp = arrInsertionSort[i];
    while (j > 0 && arrInsertionSort[j - 1] > temp) {
      arrInsertionSort[j] = arrInsertionSort[j - 1];
      j--;
    }
    arrInsertionSort[j] = temp;
  }
  return arrInsertionSort;
};
const arrInsertionSort = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1];
const result = insertionSort(arrInsertionSort);

console.log("El resultado con insertion sort es: ", result);
let wordArr = ["sheep", "sheep", "sheep", "peehs", "sheep"];
let tempArr = wordArr.slice().sort();
if (tempArr[0] !== tempArr[1]) {
  console.log(wordArr.indexOf(tempArr[0]));
} else {
  console.log(wordArr.indexOf(tempArr[tempArr.length - 1]));
}

//
//Reverse array
const reverseStringArr = (str) => {
  var words = [];
  var result = "";

  words = str.match(/\S+/g);
  for (var i = 0; i < words.length; i++) {
    result += words[i].split("").reverse().join("") + " ";
  }

  return result;
};

var input = [
  "Ripplenami is awesome",
  "Candidates pass Interview",
  "best candidates are selected",
];

for (var j = 0; j < input.length; j++) {
  console.log(reverseStringArr(input[j]));
}

//Reverse array with loop

function reverseNumber(arr) {
  var array1 = [];
  for (var i = 0; i < arr.length; i++) {
    console.log("Valor de i: ",i);
    console.log("Tamaño de arreglo: ",arr.length);
    console.log("i: ",i);
    array1[i] = arr[arr.length - i - 1];
    console.log(array1[i]);
  }
  return array1;
}

console.log(reverseNumber([1, 2, 3, 4, 5, 6, 7]));

function binaryToDecimal(str) {
  const input = String(str);
  const binary = String(str)
    .split('')
    .filter(i => i === '1' || i === '0');

  if (input.length !== binary.length) {
    return 'Invalid input';
  }

  return binary.reduce((acc, curr, index, arr) => {
    return acc + Number(curr) * Math.pow(2, arr.length - 1 - index);
  }, 0);
}

console.log(binaryToDecimal(1)); // 1
console.log(binaryToDecimal(10)); // 2
console.log(binaryToDecimal('1001')); // 9
console.log(binaryToDecimal(10001101000)); // 1128
console.log(binaryToDecimal('carrot')); // invalid input
console.log(binaryToDecimal(12)); // invalid input