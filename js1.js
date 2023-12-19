// Задание 1

let result = prompt('Введите значение');
let num = +result;
if (typeof num != 'number' || isNaN(num)) {
	console.log('Упс, кажется, вы ошиблись')
 } else if (num % 2 === 0) {
 	console.log('Чётное число')
 } else {
 	console.log('Нечётное число')
 }


