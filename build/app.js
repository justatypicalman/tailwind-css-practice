// // Lesson 1
// // function makeUser(name, age) {
// //   return {
// //     name: name,
// //     age: age,
// //   };
// // }

// // let name = prompt("What is your name");
// // let age = prompt("How old are you?");

// // let user = makeUser(name, age);

// // alert("You are " + user.name + " and you are " + user.age + " years old");

// //Lesson 2

// function sumOfTripledEvens(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     // Step 1: If the element is an even number
//     if (array[i] % 2 === 0) {
//       // Step 2: Multiply this number by three
//       const tripleEvenNumber = array[i] * 3;

//       // Step 3: Add the new number to the total
//       sum += tripleEvenNumber;
//     }
//   }
//   return sum;
// }
// // answer

// function sumOfTripedEvens1(array) {
//   let sum1 = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//       const result = array[i] * 3;
//       sum1 += result;
//     }
//   }
//   return sum1;
// }

// alert(sumOfTripledEvens(array) + " " + sumOfTripedEvens1(array));
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenOnly = array.filter((num) => num % 2 == 0);
// const mappedResult = evenOnly.map((num) => num - 1);
// console.log(evenOnly);

// let array = ["Eric", "Pogi", "Sobra", "hehe"];
// let filteredArray = array.filter((index) => index.length === 4);
// let capitalization = filteredArray.filter(
//   (num) => filteredArray[num] !== "Eric"
// );
// let lowerCaseArray = capitalization.toLowerCase();
// let result = lowerCaseArray.join(" ");

// alert(result);

//ARROW FUNCTION

<button
  onClick={() => {
    console.log("hello");
  }}
></button>;
//Ternary Operator
let age = 10;
const name = "Eric";

//OR

const Component = () => {
  return age > 10 ? <div>Pedro</div> : <div>Eric</div>;
};

//destructuring objects

const person = {
  name,
  age,
  married: false,
};

// const { name, age, married } = person;

const person2 = {
  name,
  age,
  married: false,
};

const person3 = { ...person, name: "Eric2" };

//React Way of adding arrays

const names = ["Eric", "Michael", "Roy"];
const names2 = [...names, "Dango"];
console.log(names2);

/*
.map()
.filter()
.reduce() //not that important
*/

names.map((name) => {
  return <h1>{name}</h1>;
});
