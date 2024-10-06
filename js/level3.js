// Уровень 3.1 задачника JavaScript
// №1

// Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.
// let number = 123456789

// function foo(num){
// num = num.toString().split('')
// let a =[]
// for (let i = 0; i < num.length -1; i++) {
//     const el = num[i];
// Number(num[i]) < Number(num[i+1])?  a.push('YES'): a.push('NO');
// }
// return a.includes('NO')?  'No': 'Yes'
// }
// console.log(foo(number)) 
// №2

// Дан массив:

// [1, '', 2, 3, '', 5]
// Удалите из массива все пустые строки.

// let array = [1, '', 2, 3, '', 5];

// function foo(arr){
// arr = arr.toString().split(',')
// for (let i = 0; i < arr.length; i++) {
//     const el = arr[i];
//     if(el === '') {
//     arr.splice(i,1)
//     }
// }
//     console.log(arr);
// }
// foo(array)
// №3

// Дан массив:

// [
// 	[2, 1, 4, 3, 5],
// 	[3, 5, 2, 4, 1],
// 	[4, 3, 1, 5, 2],
// ]
// Отсортируйте элементы в каждом подмассиве.
// let array =  [
//     [2, 1, 4, 3, 5],
//     [3, 5, 2, 4, 1],
//     [4, 3, 1, 5, 2],
//             ]

// function foo(arr) {
// for (let i = 0; i < arr.length; i++) {
//     const el = arr[i];
//     el.sort()
// }
//     console.log(arr);
// }
// foo(array)
// №4

// Даны два массива:

// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3, 4, 5];
// Удалите из большего массива лишние элементы с конца так, 
// чтобы длины массивов стали одинаковыми.

// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3, 4, 5];

// function foo(arr1,arr2){
// let arrLength1 = arr1.length;
// let arrLength2 = arr2.length;
// let differenceLength = arrLength2 - arrLength1
// arr2.splice(arrLength1, differenceLength)
// console.log(arr2);
// }

// foo(arr1,arr2)


// Уровень 3.2 задачника JavaScript
// №1

// Выведите в консоль все числа в промежутке от 10 до 1000, 
// у которых предпоследняя цифра четная.
// for (let i = 10; i <= 1000; i++) {
//     i%2===0? console.log(i): null
// }


// №2

// Дан массив. Удалите из него каждый пятый элемент.
// let array = Array.from({length:25}, ((a,b)=>b+1))


// array.filter((_,i)=>(i+1) % 5 !==0 )

// OR


// for (let i = array.length; i > 0; i--) {
//     const el = array[i]
// if(i%5===0){
//     array.splice(i-1, 1);
// }
// }
// console.log(array);






// №3

// Дана некоторая переменная с числом:

// let num = 5;
// Сделайте строку, содержащую столько нулей, сколько указано в
//  переменной. В нашем случае получится такая строка:

// '00000'

// let num = 5;
// let string = [];
// for (let i = 1; i <= num; i++) {
//     console.log(i);
//     string.push(0)
// }
// string = string.join('')
// console.log(string);

// let string = ''.padStart(num,0)
// console.log(string);

// №4

// Дана некоторая строка со словами:

// 'aaa bbb ccc eee fff'
// Удалите из этой строки каждое второе слово. 
// В нашем случае должно получится следующее:
// 'aaa ccc fff'

// let string = 'aaa bbb ccc eee fff'

// function foo(string) {
// string = string.split(' ').filter((_,i)=> i % 2 ===0 )
// console.log(string);
// }
// foo(string)

// №5

// Дан массив:

// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]
// Найдите сумму элементов этого массива.

// let array = [[1, 2, 3], [4, 5, 6], [7, 8, 9],]

// let arrayofSumEl = array.flat()
// .reduce((acc,el)=>{return acc+= el},0)
// console.log(arrayofSumEl);




// Уровень 3.3 задачника JavaScript
// №1

// Дан массив со словами. Удалите из него слова, состоящие более 
// чем из трех символов.
// let array = ['abc', 'efdg', 'zxcvbg', 'av', 'z', 'o', 'aswefc']
// let pureArray = array.filter(el => el.length <= 3 )
// console.log(pureArray);


// №2

// Дано некоторое число:

// 1357
// Проверьте, что все цифры этого числа являются нечетными.
// let number = 1357

// let pureArray = number.toString().split('')
// .every(el => Number(el)%2 !== 0)
// console.log(pureArray);

// №3

// Дано некоторое слово:

// 'abcba'
// Проверьте, что это слово читается одинаково с любой стороны.
// let word = 'abcba';
// word = word.split('');

// let reverseWord = word.reverse().join('')
// reverseWord === word.join('') ? 
// console.log('anagrama'): 
// console.log('not anagrama');
// №4

// Дан массив:

// [
// 	[
// 		[11, 12, 13],
// 		[14, 15, 16],
// 		[17, 17, 19],
// 	],
// 	[
// 		[21, 22, 23],
// 		[24, 25, 26],
// 		[27, 27, 29],
// 	],
// 	[
// 		[31, 32, 33],
// 		[34, 35, 36],
// 		[37, 37, 39],
// 	],
// ]
// Найдите сумму элементов этого массива.

// let array = [
// 	[
// 		[11, 12, 13],
// 		[14, 15, 16],
// 		[17, 17, 19],
// 	],
// 	[
// 		[21, 22, 23],
// 		[24, 25, 26],
// 		[27, 27, 29],
// 	],
// 	[
// 		[31, 32, 33],
// 		[34, 35, 36],
// 		[37, 37, 39],
// 	],
// ]

// let arrayOfSum = array.flat(2)
// .reduce((acc, el)=> acc + el , 0)
// console.log(arrayOfSum);





// Уровень 3.4 задачника JavaScript
// №1

// Выведите в консоль все числа в промежутке от 10 до 1000, 
// у которых первая цифра четная.
// for (let i = 10; i <= 1000; i++) {
//     Number(i.toString()[0])% 2 === 0 ?
//     console.log(i):
//     null
// }
// №2

// Дан некоторый массив, например, вот такой:

// [1, 2, 3, 4, 5, 6]
// Поменяйте местами пары элементов этого массива:

// [2, 1, 4, 3, 6, 5]

// let array = [1, 2, 3, 4, 5, 6]
// function foo(arr){
// let newArray = []
// let part = []
// for (let i = 0; i < arr.length -1; i++) {
//     const el = arr[i];
//     i%2 === 0? part = arr.slice(i, i+2): null
//     newArray.includes(part)? null:newArray.push(part)
// }
// let sortArray = []
// for (let i = 0; i < newArray.length; i++) {
//     const el = newArray[i];
//     sortArray.push(el.sort((a,b)=> b-a));
// }
//     return sortArray.flat();
// }


// let sortArray = foo(array)
// console.log(sortArray);
// let part = [];
// let newArray = array.reduce((acc,_,i,arr)=>{
//     i%2 === 0? 
//     part = arr.slice(i, i+2): null
//     acc.includes(part)? null:
//     acc.push(part
//         .sort((a,b)=>b-a))
//     return acc
// },[]).flat()

// console.log(newArray);



// №3

// Дан следующий объект:

// let obj = {
// 	1: {
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	2: {
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	3: {
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// }
// Найдите сумму элементов этого объекта.

// let object = {
// 	1: {
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	2: {
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	3: {
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// }
// const firstLevel = Object.values(object);
// let pureArray = []
// firstLevel.map((el)=>{pureArray.push(Object.values(el))})
// pureArray = pureArray.flat().reduce((acc,el)=> acc+= el)
// console.log(pureArray);


// const sum = Object.values(object)
// .flatMap(el=>Object.values(el))
// .reduce((acc,el)=> acc += el);

// console.log(sum);




// Уровень 3.5 задачника JavaScript
// №1
// Дан текст со словами. Запишите в массив все слова, начинающиеся на букву 'a'.
let text = 'Добрий день. Андрій. Завтра буде альфа, післязавтра буде арбалет, а потім вже і антропологія. Також буде астрофізика, астрономія та анатомія. Буде весело. Не всім. Я Андрюха'
// let pureArray = []
// function foo(text){
//     text = text.split(' ')
//     for (let i = 0; i < text.length; i++) {
//         const el = text[i];
//         el[0].toLowerCase() === 'а'? pureArray.push(el):null
//     }
// console.log(pureArray);
// }

// function foo(text){
// text = text.split(' ')
// text = text.reduce((acc,el)=> {
//     el[0] === 'а' ? acc.push(el): null
//     return acc
// }, [])
// console.log(text);
// }

// foo(text)
// №2

// Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5.
// let array = Array.from({length: 40}, (a,b)=>b )
// console.log(array);

// let pureArray = array.reduce((acc,el)=> {
//     el % 5 === 0 ? acc.push(el):null
//     return acc
// },[])
// console.log(pureArray);
// №3

// Дан массив с числами. Оставьте в нем только те числа, которые содержат
//  цифру ноль.
// let array = Array.from({length: 40}, (a,b)=>b )

// let pureArray = array.reduce((acc,el)=>{
//     el.toString().includes('0')? acc.push(el):null;
//     return acc
// },[])
// console.log(pureArray);

// №4

// Дан массив со числами. Проверьте, что в нем есть число, содержащее в себе цифру 3.
// let array = Array.from({length: 40}, (a,b)=>b )
// let array1 = [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29]
// let pureArray = array.some((el)=> el === 3)
// console.log(pureArray);
// №5

// Дано некоторое число:

// 35142
// Отсортируйте цифры этого числа. В нашем случае должно получится следующее:

// 12345

// let number =  35142;
// number = number.toString().split('')
// let sortedNumber = parseInt(number.sort().join(''))
// console.log(sortedNumber);
// №6

// Напишите программу, которая сформирует следующую строку:

// '-1-2-3-4-5-'
function foo(){
    let array = Array.from({length:5}, (a, b)=> b+1)
    return  array ='-'+array.join('-')+'-'
}

console.log(foo());
// №7

// Дан следующий объект:

// let obj = {
// 	1: {
// 		1: {
// 			1: 111,
// 			2: 112,
// 			3: 113,
// 		},
// 		2: {
// 			1: 121,
// 			2: 122,
// 			3: 123,
// 		},
// 	},
// 	2: {
// 		1: {
// 			1: 211,
// 			2: 212,
// 			3: 213,
// 		},
// 		2: {
// 			1: 221,
// 			2: 222,
// 			3: 223,
// 		},
// 	},
// 	3: {
// 		1: {
// 			1: 311,
// 			2: 312,
// 			3: 313,
// 		},
// 		2: {
// 			1: 321,
// 			2: 322,
// 			3: 323,
// 		},
// 	},
// }
// Найдите сумму элементов этого объекта.