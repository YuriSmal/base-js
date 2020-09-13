//1 Запитайте у юзера скільки йому років: «Привіт мені - “” років!».

let age = +prompt('How old are you?');

alert(`Hello, I am - ${age} years old.`);

//2. Запитайтесь якого року народження юзер, теперішній рік візьмемо за константу. Виведемо скільки йому років. 

const YEAR = 2020;
let userBirthYear = +prompt('In which year were you born?');
let userAge = YEAR - userBirthYear;

alert(`You are ${userAge} years old.`);

//3. Запитайтесь у юзера довжини сторін прямокутника та виведіть його периметр. 

let rectangleWidth = +prompt('Please enter rectangle width');
let rectangleHeight = +prompt('Please enter rectangle height');
let rectanglePerimeter = rectangleWidth * 2 + rectangleHeight * 2;

alert(`Rectangle perimeter = ${rectanglePerimeter}.`);

//4. Запитайтесь в юзера радіус кола та виведіть його площу.(число пі) 

let circleRadius = +prompt('Please enter circle raduis');
const PI = 3.14;
let circleArea = PI * Math.pow(circleRadius, 2);

alert(`Circle area = ${circleArea}`);

//5. Водій їде з середньою швидкістю 50 км в годину. Запитайтесь у нього скільки ще йому необхідно часу їхати, та виведіть відстань.

let avgSpeed = 50;
let hours = +prompt('In how many hours you will reach your destination point?');
let distanceRemained = avgSpeed * hours;

alert(`${distanceRemained} kilometers left to reach the destination point`);

//6. Реалізуємо конвертер кілометрів в милі і навпаки =) 

let km = +prompt('Please enter a kilometers value');
let toMl = km * 0.621371;
alert(`${km} km = ${toMl} ml.`);

let ml = +prompt('Please enter a miles value');
let toKm = ml * 1.60934;
alert(`${ml} ml = ${toKm} km.`);

//7. Юзер вводить скільки коштів на його картці та ціну одного літра бензину. 
// Виводимо скільки бензину він може купити та скільки грошей у нього залишиться.

let balance = +prompt('Enter your debit card balance');
let gasPrice = +prompt('Enter the price for 1 liter of gasoline');
let gasNeeded = +prompt('Enter the amount of gasoline (in liters) you would like to order');

let gasAmount = gasPrice * gasNeeded;
let remainingBalance = balance - gasAmount;

if (remainingBalance >= 0) {
    alert(`You can purchase ${gasAmount} liters of gas, the remaining balance would be $${remainingBalance}.`);
} else {
    alert(`No enough balance to proceed with your order. Please replenish your card balance for $${gasAmount - balance} or choose less amount of gasoline`);
}