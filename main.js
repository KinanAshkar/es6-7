// 31 - Generators Part - 1 Intro And Whats Generators:

/* function * generateTickets() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}
let iterator = generateTickets();

console.log(typeof iterator);

console.log(iterator.next().value);

console.log("*".repeat(10));

console.log(`we will do somthing beforeyielding the next ticket`);
console.log(iterator.next().value);

console.log("*".repeat(10));

console.log(`function stop excution after each yield`);
console.log(iterator.next().value);

console.log("*".repeat(10));

console.log(`function give you the control to yield`);
console.log(iterator.next().value);

console.log("*".repeat(10));

let myNumbers = [10, 20, 30, 40, 50];
function * generateNumbers(nums) {
    for(let i = 0; i < nums.length; i++){
        yield nums[i];
    }
}
let generator = generateNumbers(myNumbers);

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

console.log("*".repeat(10));

function * generateNums() {
    yield * [1,2,3,4,5,6];
    yield 7;
}

let theGenerator = generateNums();

console.log(theGenerator.next().value);
console.log(theGenerator.next().value);
console.log(theGenerator.next().value);
console.log(theGenerator.next().value);
console.log(theGenerator.next().value);
console.log(theGenerator.next().value);
console.log(theGenerator.next().value);
console.log(theGenerator.next()); */

// ____________________________________

// Generators Part 2 Functionality And Return:

/* function orderBook(){
    window.alert('you clicked on button to order the book');
    console.log('you clicked on button to order the book');

    window.alert('you added the book to cart');
    console.log('you added the book to cart');

    window.alert('payment is done');
    console.log('payment is done');


}
let theOrder = orderBook(); */

// Other Example With *
/* function * orderBook(){
    window.alert('you clicked on button to order the book');
    console.log('you clicked on button to order the book');

    window.alert('you added the book to cart');
    console.log('you added the book to cart');

    window.alert('payment is done');
    console.log('payment is done');


}
let theOrder = orderBook(); */

// Other Example
/* function * mySkills(){
    yield "html";
    yield "css";
    yield "php";
    yield "python";
    yield "javascript";
} */

/* let theSkills = mySkills();

for(let skill of theSkills){
    console.log(skill);
} */

/* for(let skill of mySkills()){
    console.log(skill);
} */

// Other Example
/* function * sayNames(){
    yield "kinan";
    yield "ahmed";
    return "anas";
    yield "fares"
}
let theNames = sayNames();
console.log(theNames.next());
console.log(theNames.next());
console.log(theNames.next());
console.log(theNames.next()); */

// ____________________________________

// Generators Part 3 Create Infinite Numbers:

/* function * infinitNumber(){
    let i = 0;
    while(true){
        yield i++;
    }
}
let theIterator = infinitNumber();
console.log(theIterator.next());
console.log(theIterator.next());
console.log(theIterator.next());
console.log(theIterator.next());
console.log(theIterator.next());
console.log(theIterator.next());

for(let number of theIterator){
    if(number > 20){
        break;
    }
    console.log(number);
} */

// ____________________________________

// Generators Part 4 Delegating Generators:

/* function * generateNums(){
    yield 1;
    yield 2;
    yield 3;
}
function * generateNames(){
    yield "kinan";
    yield "majed";
    yield "lina";
}
function * generateAll(){
    yield * generateNums();
    yield * generateNames();
}
let genAll =generateAll();
console.log(genAll.next());
console.log(genAll.next());
console.log(genAll.next());
console.log(genAll.next());
console.log(genAll.next());
console.log(genAll.next());
console.log(genAll.next()); */

// ____________________________________

// New Array Methods Part 1:

// Array.of
// Array.from
// Array.fill


/* // Array.of
let myArr = Array(100);
console.log(myArr);
console.log(myArr.length);

let newArr = Array.of(100);
console.log(newArr);
console.log(newArr.length);

console.log("*".repeat(10));

// Array.from(iterable, mapFn, this)
let myName = "kinan";
let arrayOfLetters = Array.from(myName);

console.log(myName);
console.log(arrayOfLetters);

let myNumbers = Array(10,20,30,15,18,100,60);

let numbersMinusTen = Array.from(myNumbers, number => number -10);
console.log(numbersMinusTen);

console.log("*".repeat(10));

// Array.fill(value to fill, start: default value 0, end: default value array.length)

let theNumbers = new Array(1,10,30,70,90);
// theNumbers.fill(100); // all wil be 100
// theNumbers.fill(100, 2); // from 30
theNumbers.fill(100, 1, 3); // will fill 10 and 30
console.log(theNumbers); */

// ____________________________________

// New Array Methods Part 2:

// array.find() not returning all values
/* let myNumbers1 = [1,10,20,30,40];
let found1 = myNumbers1.find(element => element > 10);
console.log(found1);

console.log("*".repeat(10));

// array.findIndex() not returning all values
let myNumbers2 = [1,10,20,30,40];
let found2 = myNumbers2.findIndex(element => element > 10);
console.log(found2);

console.log("*".repeat(10));

let myLetters = ["a", "b", "c", "d", "e", "f", "g", "h"];
myLetters.copyWithin(1, 5, 7);
console.log(myLetters);
*/