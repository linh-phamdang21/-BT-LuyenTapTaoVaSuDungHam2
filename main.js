function sqr(num) {
    return num * num;
}
function bai1() {
    let inputNum = parseInt(prompt("Enter a number"));
    alert(sqr(inputNum));
}

function cirleArea(radius) {
    return Math.PI * radius * radius;
}

function circlePerimeter(radius) {
    return Math.PI * 2 * radius;
}
function bai2() {
    let inputRadius = prompt("Enter the Radius: ");
    alert("Circle Area = " + cirleArea(inputRadius));
    alert("Circle Perimeter = " + circlePerimeter(inputRadius));
}

function factorial(num) {
    if (num === 2){
        return 2;
    } else {
        return num * factorial(num - 1);
    }
}
function bai3() {
    let inputNum = parseInt(prompt("Enter a number: "));
    alert(factorial(inputNum));
}

function checkNumber(charater) {
    if (charater/1){
        return true;
    }
    else{
        return false;
    }
}
function bai4() {
    let inputCha = prompt("Enter a Character: ");
    alert(checkNumber(inputCha));
}

function findMax(num1, num2, num3) {
    let max = num1;
    if (max < num2){
        max = num2;
    }
    if (max < num3){
        max = num3;
    }
    return max;
}
function bai5() {
    alert("Enter the values of 3 numbers");
    let inputNum1 = parseInt(prompt("Number 1: "));
    let inputNum2 = parseInt(prompt("Number 2: "));
    let inputNum3 = parseInt(prompt("Number 3: "));
    alert("Max = " + findMax(inputNum1, inputNum2, inputNum3));
}

function checkPositiveInt(num) {
    parseInt(num);
    if (num > 0){
        return true
    }
    return false;
}
function bai6() {
    let inputNum = prompt("Enter a number: ");
    alert(checkPositiveInt(inputNum));
}

function swapNumber(num1,num2) {

}
function bai7() {
    let inputNum1 = parseInt(prompt("Enter number 1: "));
    let inputNum2 = parseInt(prompt('Enter number 2: '));
    let temp = inputNum1;
    inputNum1 = inputNum2;
    inputNum2 = temp;
    alert("Number 1: " + inputNum1 + ", Number 2: " + inputNum2);
}

function reverseArr(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >=0; i--){
        newArr.push(arr[i]);
    }
    return newArr;
}
function bai8() {
    let arr = [0,1,2,3,4,5,6,7,8];
    alert("Your array: " + arr);
    alert("Your new array: " + reverseArr(arr));
}

function checkArr(arr,character) {
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === character){
            count += 1;
        }
    }
    if (count === 0){
        return -1;
    } else {
        return count;
    }
}
function inputArr() {
    let arr = [];
    for (let i = 0; i < 6; i++){
        arr[i] = prompt("Enter element " + i + ": ");
    }
    return arr;
}
function inputCharacter() {
    let character = prompt("Enter a character: ");
    return character;
}
function bai9() {
    alert("Appears in array: " + checkArr(inputArr(),inputCharacter()) + " times");
}
