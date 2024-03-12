//Array Chap no 5

//Question no 1

let studentName = [``];

//Question no 2

//Question no 3

let number = [12, 45, 78, 90];
console.log(number);

//Question no 4

let string = ["Ashar", "Ibrahim", "Raza", "Rafy"];
console.log(string);

//Question no 5

let boolean = [true, false, false, true];
console.log(boolean);

//Question no 6

let items = ["Desk", true, 34];

console.log(items);

//Question no 7

let mobileNetworks = ["Zong", "Ufone", "Jazz", "Telenor"];
console.log(mobileNetworks);

//Question no 8

let education=[''];
education.push('1) SSC ')
education.push('2) HSC ')
education.push('3) BCS ')
education.push('4) BCOM ')
education.push('5) BS ')
education.push('6) BCOM ')
education.push('7) MS ')
education.push('8) PHD ')

document.write(education.join("<br>"));
document.write("<br>")


//Question no 9

let movies=['']
movies.push('1) Avengers');
movies.push('2) inside out');
movies.push('3) Captain America');
movies.push('4) Fast and ferious');


document.write('The top movies of 2015 Are:' + movies.join("<br>"));
document.write("<br>");
document.write("The total movies in the list is " + movies.length);




//Question no 10

let cars = ["Audi", "Ferarri", "Vigo", "Fortuner"];

console.log(`First index  of Array ` + cars.indexOf("Audi"));
console.log(`Car at first index of Array ` + cars[0]);

console.log(`last index of the Array ` + cars.indexOf("Fortuner"));
console.log(`Car at last index of Array ` + cars[3]);




//Question no 11



let totalScore = 500;
let student = ["Ashar", "Bilal", "Hamza"];
let obtainedScore = [Number(488), Number(345), Number(443)];
let percentage = (obtainedScore / totalScore) * 100;

console.log(
  "The  score of michale is " +
    obtainedScore[0] +
    (obtainedScore[0] / totalScore) * 100 + " % "
);

console.log(
  "The  score of Jonny " +
    obtainedScore[1] +
    (obtainedScore[1] / totalScore) * 100 + " % "
);

console.log("The  score of Tony " + obtainedScore[2] + obtainedScore[2]/totalScore*100 + " % ");





//Question no 12






//Question no 13

let studentScore=['320' , '230' , '480' , '120'];
console.log(studentScore.sort());


//Question no 14

let fruits=['apple' , 'banana' , 'orange' , 'strawberry'];

console.log(fruits.sort());


