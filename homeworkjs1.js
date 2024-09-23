var example1 ='number' + 3 + 3;
console.log(example1);
//результат "number33" з типом "String"
// відбулось склеювання параметру з типом "String" до типу данних "Number". 
// Зі значеннями 3+3 відбулась математична операція додавання 
var example2 = null + 3;
console.log(example2);
// Результат число 3 з типом "Number"
// Значення Null конвертується в число 0 та до нього додається число 3
var example3 = 5 && "qwerty";
console.log(example3);
// Результат qwerty 
// Оператор && повертає другу частину так як дві частини True 
var example4 = +'40' + +'2' + "hillel";
console.log(example4);
// Результат 42hillel з типом "String"
// +'40' конвертується з "String" в число 40
// +'2' конвертується з "String" в число 2
// відбувається додавання двух чисел 40 +2 та до них за допомогою конкантенації додається параметр "hillel" що є стрінгою
var example5 ='10' - 5 === 6;
console.log(example5);
//Результат false
//Параметр '10' з типом "String" конвертується в число 10 
// Від нього віднімаєься значення 5 (отримуємо 5)
// Порівнюємо число 5 з числом 6 за домогою строго порівняння та отримуємо false
var example6 = true + false;
console.log(example6);
// Результат 1 з типом "Number"
// Відбувається конвертація типу Boolean true = 1 та false=0 
// Після цього відбувається операція додавання чисел 1+0 та отримуємо 1 
var example7 ='4px' - 3;
console.log(example7);
// Результат NaN 
// Значення '4px' не можна конвертувати в число тому операція неможлива отримуємо Not a number
var example8 ='4' - 3;
console.log(example8);
//  Результат 1 з типом "Number"
// Параметр '4' конвертується із типу "String" в тип "Number" 
// Отримуємо число 4 та від нього віднімаємо число 3
var example9 = '6' + 3 ** 0;
console.log(example9);
// Результат 61 з типом "String"
// Відбувається операція піднесення до степеня 3 ** 0 та отримуємо 1
// Після цього за допомогою конкантенації до значення '6' додаємо значення 1 та отримуємо 61 
var example10 = 12 / '6';
console.log(example10);
// Результат 2 з типом "Number"
// Параметр '6' конвертується з типу "String" в тип "Number" 
// Число 12 ділимо на 6 та отримуємо 2
var example11 = '10' + (5 === 6);
console.log(example11);
// Результат 10false 
// (5 === 6) число 5 не дорівнює числу 6 тому отримуємо значення false
// до значення '10' за допомогою конкантенації додаємо значення false та отримуємо '10false'
var example12 = null == '';
console.log(example12);
// Результат false 
// Відбувається конвертація null = 0 та '' не дорівнює 0 тому false 
var example13= 3 ** (9 / 3);
console.log(example13);
// Результат 27 з типом "Number"
// Спочатку виконується ділення (9 / 3) = 3
//Потім число 3 підноситься до ступення 3 та отримуємо число 27 
var example14 = !!'false' == !!'true';
console.log(example14);
// Результат true
// Значення 'false' з типом "String" було конвертоване в Fasle a потім в True 
// Значення 'true' з типом "String" було конвертоване в Fasle a потім в True 
// True дорівнює True тому true
var example15 = 0 || '0' && 1;
console.log(example15);
// Результат 1 
// спочатку повертає значення 0 а потім значення 1 отримуємо 1 
var example16 = (+null == false) < 1;
console.log(example16);
// Результат false
// Конвертація +null = 0, false = 0 (0=0 тому true)
// Конвертація true=1, 1 не менше 1 тому false 
var example17 = false && true || true;
console.log(example17);
// Результат true 
// Спочатку порівнюємо false && true. Оператор && повертає  false так як один із них false
// Потім порівнюємо false || true. Оператор || повертає true якщо хоть один true тому результат true
var example18= false && (false || true);
console.log(example18);
// Результат false
// Спочатку порівнюємо (false || true). Оператор || повертає true якщо хоть один true отримуємо true
// Потім порівнюємо false && true. Оператор && повертає  false так як один із них false тому результат false
var example19 = (+null == false) < 1 ** 5;
console.log(example19);
// Результат false
// Конвертація +null = 0, false = 0 (0=0 тому true)
// 1 підноситься до ступення 5 отримуємо 1 
// порівнюємо true (true =1) та 1, 1 не менше за 1 тому false
