// Уровень 2.1 задачника JavaScript


// №1
// Дана некоторая строка. Найдите позицию первого нуля в строке.

// let str = 'b20ms890mm0'

// function firstZeroStr(string) {
//     let array = string.split('')
//     console.log(array);
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         Number(element) === 0 ? console.log(element, i) : null
//     }
// }
// firstZeroStr(str)


// №2
// Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.


// function foo(delimiter){
//     for (let i = 0; i <= 1000; i++) {
//     let num = i.toString();
//     num = num.split('');
// let fNum = Number(num[0]);
// let sNum = Number(num[1]);
// let thNum = Number(num[2])
// if(num.length === 1 && fNum === delimiter) {
// console.log(fNum);
// continue
// }
// else if(num.length === 2 && fNum+sNum === delimiter){
// console.log(fNum, sNum);
// }
// else if(num.length === 3 && fNum+sNum+ thNum === delimiter){
// console.log(fNum,sNum, thNum);
// }
// }
// }

// foo(5)


// №3
// Дан массив. Удалите из него элементы с заданным значением.
// let arr = [1,2,3, 'wow', 'smtz', 10, 99]

// function foo(array, element) {
//     for (let i = 0; i < array.length; i++) {
//         const el = array[i];
//         if(el.toString() === element) {
//         let indextoDel = array.indexOf(el);
//         array.splice(indextoDel, 1)
//         console.log(array);
//         }
        
//     }
// }

// foo(arr, '10')

// №4
// Дан некоторый массив, например, вот такой:

// [1, 2, 3, 4, 5, 6]
// Найдите сумму первой половины элементов этого массива.


// let arr = [1, 2, 3, 4, 5, 6,7,8,9]


// function foo(array) {
//     let arrDelim = Math.round(array.length / 2);
//     let countNum = 0
//     for (let i = 0; i <= arrDelim; i++) {
//         const el = array[i];
//         countNum += i;
//     }
//     console.log(countNum);
// }


// foo(arr)

// Уровень 2.2 задачника JavaScript
// №1

// Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.
// let array = [-10,-7,-5,-1,0,1,3,4,5,6]
// function countMinNumbers(arr) {
//     let counter = 0
// for (let i = 0; i < arr.length; i++) {
//     const el = arr[i];
//      el < 0 ?  counter += el : null;
// }
// return counter
// }
// let a = countMinNumbers(array);
// console.log(a);


// №2

// Дан массив с числами. Оставьте в нем только положительные числа.

// !!!!!!!!!!!!!!!!!!!!!!!!!!1
// let array = [-10,0,1,3,4,5,6,-5,-15,-30]
// function plusNumbers(arr) {
//     let indextoDel = 0
// for (let i = 0; i < arr.length; i++) {
//     const el = arr[i];
// if(el < 0) {
// indextoDel = arr.indexOf(el);
// arr.splice(indextoDel, 1)
// }
// }
// console.log(arr);
// }
// plusNumbers(array);
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!




// №3

// Дана строка. Удалите предпоследний символ из этой строки.

// let string = 'abcdefgh'


// function delPreLastLetter(str) {
//     let indexLastLett = str.split('').length -2 ;
//     let strToArraay = str.split('');
//     strToArraay.splice(indexLastLett, 1);
//     let pureString = strToArraay.join('');

// return pureString
// }

// let a = delPreLastLetter(string)
// console.log(a);



// №4

// Дан некоторый массив, например, вот такой:

// [1, 2, 3, 4, 5, 6]
// Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.

// let array = [1, 2, 3, 4, 5, 6]

// function foo(arr) {
// let fHalf = Math.round(arr.length / 2);
// let sHalf = arr.length - fHalf;
// let sumFHalf = 0;
// let sumShulf = 0;
// let division = 0;
// for (let i = 0; i < arr.length; i++) {
//     const el = arr[i];
//     i < fHalf ? sumFHalf += el : sumShulf += el
    
// }
// division = sumFHalf / sumShulf

// return division
// }

// let a = foo(array)
// console.log(a);





// Уровень 2.3 задачника JavaScript
// №1

// №1

// Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.
// let word1 = 'wonderfull'
// let word2 = 'Lemberg'


// function foo(str1, str2) {
// let newStr1 = str1.toLowerCase().split('')
// let newStr2 = str2.toLowerCase().split('')



// newStr1[newStr1.length - 1] === newStr2[0] ? 
// console.log('YES') :
// console.log('No');


// }

// foo(word1, word2)


// №2

// Дана некоторая строка. Найдите позицию третьего нуля в строке.
// let string = '0010254656'

// function foo(str) {
// let arrString = str.split('')
// let zeroArr = []
// arrString.findIndex((el,i) => {
// el === '0' ? zeroArr.push(i) : null;
// })
// console.log(zeroArr[2]);
// }

// foo(string)
// №3

// Даны числа, разделенные запятыми:

// '12,34,56'
// Найдите сумму этих чисел.

// let numbers = '12,34,56'
// numbers = numbers.split(',')
// let count = 0
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     count += Number(element)
// }
// console.log(count);


// №4

// Дана дата в следующем формате:

// '2025-12-31'
// Преобразуйте эту дату в следующий объект:

// {
// 	year: '2025',
// 	month: '12',
// 	day: '31',
// }


// let date ='2025-12-31'
// let objA = {
// year: '2024',
// month: '09',
// day: '26',
// }
// function foo(date){
//     date = date.split('-')
// for (let i = 0; i < date.length; i++) {
//     const el = date[i];
// objA[Object.keys(objA)[i]] = el 
// }
// return objA
// }

// let date ='2025-12-31'
// let objA = {}

// function foo(date) {
// date = new Date(date);
//   objA.year = date.getFullYear();
//   objA.month = date.getMonth() +1;
//   objA.day = date.getDate();
// return objA
// }
// let a = foo(date);
// console.log(a);


// Уровень 2.4 задачника JavaScript
// №1

// Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.

// let string ='abc7rt5678vvrtz'
// string = string.split('')
// for (let i = 0; i < string.length; i++) {
//     const element = string[i];
//     if(Number(element)) {
//         console.log(string.indexOf(element))
//         break;
//     }
    
// }
// console.log(string);


// №2

// Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.

// let objA = {
//     name: 'Andrii',
//     age: 31,
//     education: 'Front-End'
// }

// let keys = Object.keys(objA)
// let values = Object.values(objA)
// console.log(keys, values);


// №3

// Дано число. Выведите в консоль количество четных цифр в этом числе.

// let number = 1234567892


// function foo(num) {

// let arrNum = num.toString().split('')
// for (let i = 0; i < arrNum.length; i++) {
//     const el = arrNum[i];
//     if(Number(el) % 2 === 0){
//         console.log(el);
//     }
// }
// console.log(arrNum);
// }
// foo(number)



// №4

// Дана некоторая строка:

// 'abcde'
// Переведите в верхний регистр все нечетные буквы этой 
// строки. В нашем случае должно получится следующее:
// 'AbCdE'

// let string = 'abcde';
// string = string.split('')
// function foo(str) {
//     let pureSring 
//     for (let i = 0; i < str.length; i++) {
//         const el = str[i];
//        if (str.indexOf(el) % 2 === 0) {
// string.splice(str.indexOf(el), 1, el.toUpperCase())

//        }
//     } return string.join('')


// }

// let a = foo(string)
// console.log(a);
// №5

// Дана некоторая строка со словами:

// 'aaa bbb ccc'
// Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее:

// 'Aaa Bbb Ccc'

// let string = 'aaa bbb ccc'
// let arrIndex = [0]

// function foo(str) {
// let newString  = str.split('');

// for (let i = 0; i < newString.length; i++) {
//     const el = newString[i];
//     if(el === ' '){
//         arrIndex.push(i+1)
//     }
    
// }

// for (let i = 0; i < arrIndex.length; i++) {
//     const el = arrIndex[i];
//     newString.splice(
//     el, 1, newString[el].toUpperCase())
// }
// return newString.join('')
// }
// let a = foo(string)

// console.log(a);


// Уровень 2.5 задачника JavaScript
// №1


// Дана некоторая строка, например, вот такая:

// '023m0df0dfg0'
// Получите массив позиций всех нулей в этой в строке.

// let string = '023m0df0dfg0';

// const foo = (str) => {
//     let arrForZero = []
// let arrString = string.split('');
// for (let i = 0; i < arrString.length; i++) {
//     const el = arrString[i];
//     if(Number(el) === 0) {
//        arrForZero.push(i)
//     }
// }
// return arrForZero
// }

// let a = foo(string)
// console.log(a);
// №2

// Дана некоторая строка:

// 'abcdefg'
// Удалите из этой строки каждый третий символ. 
// В нашем случае должно получится следующее:
// 'abdeg'


// let string = 'abcdefg'

// const foo = (str, position) => {
// str = str.split('')
// let delWord = str.splice((position -1),1)
// return str.join('')

// }
// let a = foo(string, 3)
// console.log(a);

// №3

// Дан некоторый массив, например, вот такой:

// [1, 2, 3, 4, 5, 6]
// Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.

// let array = [1, 2, 3, 4, 5, 6]

// const foo = (arr) => {
//     let chtni = 0;
//     let neChotni = 0;
//     let result = 0
// for (let i = 0; i < arr.length; i++) {
//     const el = arr[i];
// el % 2 === 0? chtni += el : neChotni += el;
// result = chtni / neChotni;
// }
// return result
// }
// let a = foo(array)
// console.log(a);









// Уровень 2.6 задачника JavaScript
// №1

// Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.
// let string = '123abc456qwerty7890'

// const foo = (str) => {
// let indexArr = []
// str = str.split('')
// str.map((el,i)=> {
//     if(Number(el) >= 0) {
// indexArr.push(i)
//     }
// })
// return indexArr
// }
// let a = foo(string)
// console.log(a);
// №2

// Дан массив с некоторыми числами, например, вот такой:

// [123, 456, 789]
// Напишите код, который перевернет числа в этом массиве по следующему принципу:

// [321, 654, 987]

// let array = [123, 456, 789];


// const foo = (arr) => {
// for (let i = 0; i < arr.length; i++) {
//     const el = arr[i].toString();
//     const newEl = el.split('').reverse().join('');
//     arr.splice(i,1, newEl)
// }

//     return arr
// }
// let a = foo(array)
// console.log(a);



// №3

// Дана некоторая строка с числом:

// '1234567'
// Отделите тройки цифр пробелами, начиная с конца 
// числа. В нашем случае должно получится следующее:

// '1 234 567'
// let string = '1234567'


// const foo = (str, delim) => {
// str = str.split('').reverse()
// for (let i = delim; i < str.length; i+= (delim +1)) {
//     const el = str[i];
//     str.splice(i, 0, ' ');
// }
// return str.reverse().join('')
// } 

// let a = foo(string, 3)
// console.log(a);

// №4

// Дана некоторая строка:

// 'AbCdE'
// Смените регистр букв этой строки на противоположный. В нашем случае должно получится следующее:

// 'aBcDe'

// let string = 'AbCdE'

// const foo = (str) => {
//   str =  str.split('')
//   let letter = ''
//     for (let i = 0; i < str.length; i++) {
//         const el = str[i];
//         letter = el.toUpperCase();
// el === letter ? str.splice(i,1,el.toLowerCase())  :
// str.splice(i,1,el.toUpperCase()) ;
        
//     }
  
// return str.join('')
// }

// let a = foo(string)
// console.log(a);


// №5

// Дан некоторый массив с числами, например, 
// вот такой:
// [1, 2, 3, 4, 5, 6]
// Слейте пары элементов вместе:

// [12, 34, 56]


// let array = [1, 2, 3, 4, 5, 6]

// const foo = (arr) => {

// const newArray = arr.reduce((acc, el, i, array)=>{

// i % 2 === 0 ? acc.push(array[i].toString()+array[i+1]) : null

// return acc
// },[])

//     return newArray
// }


// let a = foo(array)
// console.log(a);

// Уровень 2.7 задачника JavaScript
// №1

// Дана некоторая строка:

// 'a bc def ghij'
// Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее:

// 'A BC DEF ghij'


// let string = 'a bc def ghij iwant'

// const func = (str, size)=>{
// str = str.split(' ')
// let newStr = str.map((el)=>{
// return el.length <= size ? el.toUpperCase(): el

// })
// return newStr
// }




// let a = func(string,3)
// console.log(a);
// №2

// Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.

// let c = 'C';
// let b = 'b';

// function func(a) {
//     a === a.toUpperCase()? console.log(`${a} is in upper register`) : console.log(`${a} is in lower register`)
// }
// func(c)
// №3

// Дано некоторое число, например, такое:

// 123789
// Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат:

// 28

// let number = 123789

// function func(num) {
//     num = num.toString().split('')
//     let pureNum = num.filter(el =>{ return el%2=== 0})
//     return Number(pureNum.join(''));
// }

// let a = func(number);
// console.log(a);



// 12 + 34 + 56

// Уровень 2.9 задачника JavaScript
// №1

// Дано некоторое число:

// 123456
// Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее:

// 12 + 34 + 56

// let number = 12345678

// function func(num) {
// num = num.toString().split('')
// let counter = 0;
// for (let i = 0; i < num.length; i+= 2 ) {
//   const el = num[i];
//   let part = num.slice(num[i-1], num[i+1]);
//   counter += Number(part.join('')) 
// }
// return counter
// }

// let a = func(number)
// console.log(a);

// function func(num) {
//     num = num.toString().split('');
//     let pureNum = []
//     let mainSum = 0
//     for (let i = 0; i < num.length; i++) {
//         const el = num[i];
//         i % 2 === 0 && num[i+1] ?pureNum.push(Number(num[i] + num[i+1])): null
//     }
//     console.log(pureNum);
//     for (let i = 0; i < pureNum.length; i++) {
//         const element = pureNum[i];
//         mainSum += element
        
//     }
//     return mainSum
    
// }
// func(number);








// №2

// Дан массив с числами:

// [1, 2, 3, 4, 5]
// Выведите в консоль элементы этого массива в обратном порядке.

// let array = [1, 2, 3, 4, 5]
// console.log(array.reverse());



// Уровень 2.10 задачника JavaScript
// №1

// Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.

// let string = '123abc45DE60fz'

// function foo(str){
// str = str.split("")
// let count = 0

// for (let i = 0; i < str.length; i++) {
//     const el = str[i].toLowerCase();
// el.toUpperCase() !== el? count+=1 : null
// }
// console.log(count);
// count > 3? console.log('More than 3 letter'): console.log('Not more than 3 letter');
// }
// foo(string)

// №2

// Дано число. Получите первую четную цифру с конца этого числа.

// let number = 123456789

// function foo(num){
// num = num.toString().split('')
// let pureArr = []
// for (let i = 0; i < num.length; i++) {
//     const el = num[i];
//     el%2!==0 ? num.splice(i,1): null
// }
// console.log(Number(num[num.length-1]));
// }
// foo(number)
// №3

// Дана некоторая строка:

// 'abcde abcde abcde'
// Замените в ней первый символ каждого слова на '!':
// '!bcde !bcde !bcde'
// let string = 'abcde abcdf abcdg'
// function foo(str){
// str = str.split(' ')
// for (let i = 0; i < str.length; i++) {
//     const el = str[i].split('');
//     el.splice(0,1,'!')
//     str.splice(i,1,el.join(''));
// }
//     console.log(str.join(' '));
// }
// foo(string)

// №4

// Дан массив с числами:

// [1, 2, 3, 3, 4, 5]
// Проверьте, что в этом массиве есть два одинаковых элемента подряд.


// let array = [1, 2, 3, 3, 4, 5,2,1]


// function foo(arr){
// for (let i = 0; i < arr.length; i++) {
//     const el = arr[i];
// el === arr[i-1]? console.log(el):null
//     }
// }
// foo(array)















