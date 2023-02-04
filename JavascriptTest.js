// Javascript Test

// Just a quick test to test your javascript understanding.


// 1-	What is ES6?

    //ANSWER:
    // - ES6 or ECMAScript 2015 is the 6th version of the ECMAScript programming language. And it helps in an easy and clear way which lets the code more modern and short.
    // - ES6 provides a huge key features like const, let, arrow functions, template literals, default parameters, and others.



// 2-	Name 3 examples of ES6 features which you learnt.

    //ANSWER:
    // -Arrow Functions: They are defined by the symbol  “=>”
    // Example:
    // let sum = (num1, num2) => {
    // 	    return num1 + num2;
    // 	}

    // -String Literals:
    // Example:
    // let a = 10; 
    // let b = 20; 
    // let result = `The sum of ${a} and ${b} is ${a+b}.`; 
    // console.log(result);


    // -Destructuring
    // Example:
    // let person = {name: "Peter", age: 28}; 
    // let {name, age} = person; 
    // console.log(name);
    // console.log(age);



// 3-	What is the difference between let and const?
    
    //ANSWER:
    // - Let means that the variable can be reassigned, for example in a loop.
    // - Const means that the variable can not be reassigned. That initial value defined in the beginning of the program will be constant.



// 4-	How do you access object values? Give 3 examples
    
    //ANSWER:
    // Using the command object.values().

    //Example:
    // let obj = { movie: "Titanic", type: “Romance”};
    // console.log(Object.values(obj)); // ['Titanic', ‘Romance’]

	//Example:
    // let arrayObj = { Color1: "Blue", Color2: "Yellow", Color3: "Orange" };
    // console.log(Object.values(arrayObj)); // ['Blue', 'Yellow', 'Orange']

    //Example:
    // let arrayObj2 = { 10: "Canada", 2: "Peru", 7: "USA" };
    // console.log(Object.values(arrayObj2)); // ['Peru', 'USA', 'Canada']



// 5-	What does setInterval and setTimeout do?
    
    //ANSWER:
    // - setInterval: It repeats the code according to the defined interval.
    
    // Example:
    // let timer = setInterval(() => {
    //     console.log("Helo World");
    // }, 6000);

    // - setTimeout: It executes the code after waiting a defined interval of time

    // What will be the output of the following ?

    // FIRST
    //  for (var i = 0 ; i < 5 ; i++) {
    //        setTimeout(() => {
    //        console.log(i);
    // }, 0);
    // }

    // Answer:
    // 5
    // 5
    // 5
    // 5
    // 5


    // SECOND
    //  for (let i = 0 ; i < 5 ; i++) {
    //        setTimeout(() => {
    //        console.log(i);
    // }, 0);
    // }

    // Answer:
    // 0
    // 1
    // 2
    // 3
    // 4



// 6-	What are promises?
    
    //ANSWER:
    // They represent the eventual ending of an asynchronous operation giving a value.



// 7- Convert this async function to async/await
// getQuote().then((quote) => {
//   console.log(quote);
// }).catch(function(err) {
//   console.log(err);
// });

// // after this line,

    //ANSWER:
    // let getQuote = new Promise((quote, err) => {
    // 	quote('Quote');
    // 	err('Err');
    // })

    // getQuote.then((response) => {
    // console.log(response);
    // }).catch((error) => {
    // Console.log(error);
    // });



// 8- Convert this code to arrow function.
// function greeting(firstname, lastname) {
//   return `Hello ${firstname} ${lastname}`;
// }
// // after this line,

    //ANSWER:
    // function greeting(firstName) {
    // 	    return function(lastName) {
    // 	        console.log(`Hey ${firstName} ${lastName}`);
    // 	    }
    // 	}

    // 	let greetingFirstOutput = greeting("Ana");	

    // 	greetingFirstOutput("Silva"); 



// 9- Explain what a callback function is.
    
    //ANSWER:
    // The callback function is used to execute code in an orderly and safe way. When you execute a callback function, other code will not be executed until your current code has completed its execution.



// 10- What does the functions pop and push do to an array? And what do they return ?

    //ANSWER:
    // - The function Pop removes the last element in an Array. It returns the removed element.
    // - The function push adds elements to the end of an array. It returns length of the new array.



// 11- What is the expected answer to this code?
// let string = "";
// let object = { a: 1, b: 2, c: 3 };

// for (let key in object) {
//   string += object[key];
// }

// console.log(string);

    // ANSWER: 
    //123



// 12- What data type would Array.map() and Array.filter() return?

    //ANSWER:
    // - Array.map(): It returns a new array and elements as result of a callback function.
    // - Array.filter(): It returns a new array using the given condition(filter).



    // Additionally what will be the output of this ?
    // let array = [1,2,3, 0, 4,10, 0];
    // let output = array.filter((item) => item); 

        // Answer:
        // [ 1, 2, 3, 4, 10 ]



// 13- What data type would Array.includes() and Array.some() return?

    //ANSWER:
    // - Array.includes():It determines whether an array includes a certain value among its entries, returning true or false as appropriate.
    // - Array.some(): It tests whether at least one element in the array passes the test implemented by the provided function, returning true if the element is found in the array, otherwise it returns false. 



// 14- Write down the 4 main methods of rest api
    //  - GET
    //  - PUT
    //  - DELETE
    //  - POST



// 15- What is the difference between JSON and a JavaScript object?

    //ANSWER:
    // The difference is:
    // - JSON data can only be presented in text. It can not contain functions. However, it can be used by other programming languages.
    // - JavaScript can only be used in JavaScript. However, its objects can include other code such as functions and methods. 



// 16 - Use this endpoint and fetch the output using FETCH API and print them on the console. Use both .then and catch and try and catch block as well.
// https://www.boredapi.com/api/activity
// The above API returns what to do when you are bored.


    //ANSWER:
    // fetch(' https://www.boredapi.com/api/activity ')
    // .then((response) => { return response.json();})
    // .then((finalOutput) => { console.log(finalOutput);})
    // .catch((error) => {console.error(error);})