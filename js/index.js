/*Сделайте функцию, которая параметрами принимает 2 числа.
Если эти числа равны - пусть функция вернет true, 
а если не равны - false.*/

/*function comparison(a, b) {

  return a === b ? true : false;
}

alert(comparison(4, 3));*/

/*function comparison(a, b) {
  return a === b;
}
console.log(comparison(4, 3));*/

/*let comparison = (a, b) => a === b;
console.log(comparison(1, 13));/

/*Сделайте функцию, которая параметрами принимает 2 числа. 
Если их сумма больше 10 - пусть функция вернет true, 
а если нет - false.*/

/*function sumNum(a, b) {

  return a + b > 10 ? true: false;
}

alert(sumNum(22, 4));*/

/*function sumNum(a, b) {
  return a + b > 10;
}

console.log(sumNum(22, 1));*/

/*let sumNum = (a, b) => a + b > 10;
console.log(sumNum(13, 30));*/

/*Сделайте функцию, которая параметром принимает число 
и проверяет - отрицательное оно или нет. 
Если отрицательное - пусть функция вернет true, 
а если нет - false.*/

// let checkNumber = (num) => num < 0;

// console.log(checkNumber(-1));

/*let checkNumber = (num) => num < 0;
console.log(checkNumber(30));*/

/*С помощью цикла for сформируйте строку '123456789' 
и запишите ее в переменную str.*/

/*let arr = [];
let str;

for (let i = 0; i < 9; i++) {
  arr[i] = i + 1;
  str = arr.join('');
}

console.log(str);*/

/*let str = '';
for (let i = 1; i < 10; i++) {
  str += i;
}
console.log(str);*/

/*Нарисуйте пирамиду, как показано на рисунке,
только у вашей пирамиды должно быть 
20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx*/

/*let str = '';
let result;

for (let i = 1; i <= 20; i++) {
  str += 'x';

  console.log(str);
}*/

/*С помощью двух вложенных циклов нарисуйте следующую пирамидку:
1
22
333
4444
55555
666666
7777777
88888888
999999999*/


/*for (let i = 1; i < 10; i++) {
  let str = '';

  for (let j = 1; j <= i; j++) {
    str += i;
  }

  console.log(str);
}*/

/*Нарисуйте пирамиду, как показано на рисунке, воспользовавшись циклом for:
xx
xxxx
xxxxxx
xxxxxxxx
xxxxxxxxxx*/

/*let str = '';

  for (let i = 0; i < 5; i++) {
  str = str + 'xx';

  console.log(str);
}*/

/*Давайте выведем на экран следующую пирамидку:
111
222
333
444
555
666
777
888
999*/


/*for (let i = 1; i < 10; i++) {
  let str = '';
    for (let j = 1; j <= 3; j++) {
    str += i;
  } 

  console.log(str);
} */

//Array tasks
/*Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. 
Объедините их вместе.*/

/*let result = [];
const arr1 = ['a', 'b', 'c'];
const arr2 = [1, 2, 3];

console.log(result.concat(arr1, arr2));
console.log(result = [...arr1,...arr2]);*/

/*Дан массив ['a', 'b', 'c']. Добавьте ему в
конец элементы 1, 2, 3.*/

/*const arr1 = ['a', 'b', 'c']; 
const result = [...arr1, 1, 2, 3];
console.log(result);
console.log(arr1.concat([1, 2, 3]));*/

/*Дан массив [1, 2, 3, 4, 5]. С помощью метода 
splice преобразуйте массив в [1, 4, 5].*/

/*const arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);

console.log(arr);*/

/*Дан массив [1, 2, 3, 4, 5]. С помощью метода splice 
запишите в новый массив элементы [2, 3, 4].*/

/*const arr1 = [1, 2, 3, 4, 5];
const arr2 = arr1.splice(1, 3);

console.log(arr2);*/

/*Дан массив [1, 2, 3, 4, 5]. С помощью метода splice 
сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].*/

/*const arr = [1, 2, 3, 4, 5];
arr.splice(3, 0, 'a', 'b', 'c');

console.log(arr);*/

/*Дан массив [1, 2, 3, 4, 5]. С помощью метода splice 
сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].*/

/*const arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, 'a', 'b');
arr.splice(-1, 0, 'c');
arr.splice(8, 0, 'e');

console.log(arr);*/

/*Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.*/
/*const arr = [3, 4, 1, 2, 7];

console.log(arr.sort());*/

/*Дан объект {js:'test', jq: 'hello', css: 'world'}. 
Получите массив его ключей.*/

/*let obj = {
  js: 'test',
  jq: 'hello',
  css: 'world',
};
console.log(Object.keys(obj));*/

/*Дана строка, например, '123456'. Переверните эту строку 
(сделайте из нее '654321') не используя цикл.*/
/*const str = '123456';

console.log(str.split('').reverse().join(''));*/

/*Дана строка. Сделайте заглавным первый символ этой 
строки не используя цикл. Найдите два решения.*/

/*const str = 'hello';

console.log(str.charAt(0).toUpperCase() + str.slice(1));*/

/*const str = 'hello';
console.log(str[0].toUpperCase() + str.slice(1));*/

//Проверьте, что строка начинается на http://.
/*const str = 'http://hello, world';

console.log(str.startsWith('http://'));*/

//Проверьте, что строка заканчивается на .html
/*const str = 'I learn javascript';

console.log(str.endsWith('html'));*/

/*Дан массив с числами. Проверьте, что в этом массиве есть число 5. 
Если есть - выведите 'да', а если нет - выведите 'нет'.*/

/*const arr = [1, 2, 6, 3, 9];
if (arr.includes(5)) {
  alert ('да');
} else {
  alert ('нет');
}*/

/*const arr = [1, 2, 6, 3, 9];
let result = arr.includes(5) ? 'да' : 'нет';

alert(result);*/


/*Дано число, например 31. Проверьте, что это число 
не делится ни на одно другое число кроме себя самого 
и единицы. То есть в нашем случае нужно проверить, что число 
31 не делится на все числа от 2 до 30. Если число не делится - 
выведите 'false', а если делится - выведите 'true'.*/
/*let num = 31;
for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    alert(false);
  } else {
    alert(true);
  }
}*/

/*let primeNum = (num) => {
  for (let i = 0; i < num; i++) {
    return num % 2 !== 0;
  }
};
alert(primeNum(31));*/

/*Дан массив с числами. Проверьте, есть ли в нем два 
одинаковых числа подряд. Если есть - выведите 'да', 
а если нет - выведите 'нет'*/

/*function similarNums(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {

      return (alert('true'));
    } 
    }

    return (alert('false'));
  }

similarNums([1, 4, 4, 3, 6, 7, 7, 8]);*/

/*let similarNums = (arr, i) => arr[i] === arr[i - 1];
console.log(similarNums([1, 4, 4, 3, 6, 7, 7, 8]));*/

/*Fill. Напишите функцию, которая заполняет новый массив предоставленным значением.

* Описание задачи: Напишите функцию, которая заполняет новый массив предоставленным значением.
* Ожидаемый результат: (3, 'a') => ['a', 'a', 'a']

/*const fill = (arraySize, value) => {
  const arr = [];

  for (let i = 0; i < arraySize; i++) {
    arr.push(value);
  }

  return arr;
  };


const data = 3;
const valueToFill = 'a';

console.log(fill(data, valueToFill)) // ['a', 'a', 'a']
console.log(fill(3, 'a'));*/

/*Reverse. Напишите функцию, которая разворачивает массив в 
обратном порядке. Пожалуйста, не используйте array.reverse(), 
чтобы сделать задачу более интересной.

  * Описание задачи: Напишите функцию, которая разворачивает массив в обратном порядке.
  * Ожидаемый результат: [1, 2, 3] => [3, 2, 1]
  * Сложность задачи: 1 of 5
  * @param {Array} array - Массив любых элементов
  * @returns {Array}*/

/*const reverse = (array) => {
  let result = [];

  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }

  return result;
};

const arr = [1, 2, 3];

console.log(reverse(arr));*/

/*Compact. Напишите функцию, которая очищает массив от 
нежелательных значений, таких как false, undefined, 
пустые строки, ноль, null.

  * Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
  * Сложность задачи: 1 of 5
  * @param {Array} array - Массив любых элементов
  * @returns {Array}*/

// const data = [0, 1, false, 2, undefined, '', 3, null];
// const compact = data.filter(num => typeof num === 'number' && num > 0);

// console.log(compact);

/*From Pairs. Напишите функцию, которая возвращает объект, 
составленный из значений вложенных массивов. Первое элемент 
массива - ключ, второй - зачение. (используем метод массива reduce)

  * Ожидаемый результат: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
  * Сложность задачи: 2 of 5
  * @param {Array} array - массив, значения которого массивы пар
  * @returns {Array}*/

/*const fromPairs = (list) => {
  const result = list.reduce(function(obj, item) {
    obj[item[0]] = item[1]; // ['a', 1]
    
    return obj;
  },{});

  return result;
};

const data = [['a', 1], ['b', 2]];

console.log(fromPairs(data));*/

/*Without. Напишите функцию, возвращает новый массив без 
предоставленных значений. Используйте примитивные типы.*/

/*const without = (array, ...args) => {
  const arr = array.filter(item => !args.includes(item));

  return arr;
}

const data = [1, 2, 3, 1, 2];

console.log(without(data, 1, 2));*/

/*const without = (array, ...args) => array.filter(item => !args.includes(item));
const data = [1, 2, 3, 1, 2];

console.log(without(data, 1, 2));*/

/*Unique. Напишите функцию, которая убирает повторяющиеся значения.

  * Описание задачи: Напишите функцию, которая убирает повторяющиеся значения.
  * Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]
  * Сложность задачи: 2 of 5
  * @param {Array<string | number>} array - Массив с примитивными значениями
  * @returns {Array}*/

/*const unique = (array) => Array.from(new Set(array));


const data = [1, 2, 1, 2, 3];

console.log(unique(data));

/*IsEqual. Напишите функцию, которая сравнивает два массива
 и возвращает true, если они идентичны.*/

// const isEqual = (firstArray, secondArray) => {

//   for (let i = 0; i < firstArray.length; i++) {
//     if (
//       firstArray.length !== secondArray.length
//     ) {
//     return false;
//   }
  
//     if (
//       firstArray[i] !== secondArray[i] 
//     ) {
//       return false;
//     }
//     }
//     return true;
//   };

// const arr1 = [1, 2, 3, 4];
// const arr2 = [1, 2, 3, 4];
// const arr3 = [1, 2, 5, 4];
// const arr4 = [1, 2, 3, 4, 5];
// console.log(isEqual(arr1, arr2)); // true
// console.log(isEqual(arr1, arr3)); // false
// console.log(isEqual(arr1, arr4)); // false

/*Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. 
Найдите сумму элементов этого массива. Массив, конечно же, может 
быть произвольным.*/

/*const arr = [[1, 2, 3], [4, 5], [6]];
let result = 0;

for (let valuearr of arr ) {
  for (let elem of valuearr) {
    result += elem;
  }
}

console.log(result);*/

/*Дан массив с числами. Создайте из него новый массив, 
где останутся лежать только положительные числа. 
Создайте для этого вспомогательную функцию isPositive(), 
которая параметром будет принимать число и возвращать true, 
если число положительное, и false - если отрицательное.*/

/*let isPositive = (num) => num > 0 ? true : false;

// const arr = [1, 4, -9, 17, -4, -5, -9, 3];
// let result = arr.filter(num => num > 0);
// console.log(result);


/*Сделайте функцию getDigitsSum (digit - это цифра), 
которая параметром принимает целое число и возвращает 
сумму его цифр.*/

/*function getDigitsSum(num) {
  let sum = 0;
  let arr = String(num).split('');
  for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
  }

  return sum;
}

console.log(getDigitsSum(15));*/

/*Дана строка. Сделайте заглавным первый символ каждого слова этой 
строки. Для этого сделайте вспомогательную функцию ucfirst, 
которая будет получать строку, делать первый символ этой строки 
заглавным и возвращать обратно строку с заглавной первой буквой.*/

/*let ucfirst = (str) => str[0].toUpperCase() + str.slice(1);
const str = 'hello dear world';
const result = str.split(' ').map(word => {

  return ucfirst(word);
}).join(' ');

console.log('result', result);*/

/*Дана строка, например, '123456'. Сделайте из нее '214365'.*/
/*const str = '123456';
const arr = str.split('');

  for (let i = 0; i < arr.length; i += 2) {
  [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
}

console.log(arr.join(''));*/
//поменять местами

/*Chunk. Напишите функцию, которая разделяет массив на части заданного размера.

  * Описание задачи: Напишите функцию, которая разделяет массив на части заданного размера.
  * Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
  * Сложность задачи: 3 of 5
  * @param {Array} array - Массив элементов
  * @param {number} size - Размер чанков
  * @returns {Array}*/

/*const chunk = (arr, size) => {
  const subarr = [];
  for (let i = 0; i < arr.length; i += size) {
    subarr.push(arr.slice(i, i + size));
  }

  return subarr;
};

const data = [1, 2, 3, 4, 5, 6, 7];

console.log(chunk(data, 2)); // [[1, 2], [3, 4], [5, 6], [7]]
console.log(chunk(data, 3)); // [[1, 2, 3], [4, 5, 6], [7]]*/

/*Дана строка. Сделайте заглавным первый символ каждого слова этой 
строки. Для этого сделайте вспомогательную функцию ucfirst, 
которая будет получать строку, делать первый символ этой строки 
заглавным и возвращать обратно строку с заглавной первой буквой.*/

/*function ucfirst(str) {

  return str[0].toUpperCase() + str.slice(1);
}

const result = str => str.split(' ').map(ucfirst).join(' ');
console.log(result('hello my lovely family'));*/





























