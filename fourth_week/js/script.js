//Lecture 41

// var message = "in global";
// console.log("global: message = " + message);

// var a = function(){
//     var message = "inside a";
//     console.log("a: message = " + message);
//     b();
// }

// function b(){
//     console.log("b: message = " + message);
// }
// a();

//Lecture 42

// var x;
// console.log(x);

// if (x == undefined) {
//     console.log("x is undefined");
// }

// x=5;
// if (x == undefined) {
//     console.log("x is undefined");
// } else {
//     console.log("X has been defined");
// }

// IF statement (all false)
// if (false || null || undefined || "" || 0 || NaN) {
//     console.log("This line won't ever executer");
// } else {
//     console.log("All false");
// }

// // IF statement (all true)
// if (true && "hello" && 1 && -1 && "false") {
//     console.log("All true");
// }

//Lecture 44 Default value
// function orderChickwith(sideDish) {
//     // if (sideDish === undefined) {
//     //     sideDish = "whatever!";
//     // }
//     sideDish = sideDish || "whatever!";//
//     console.log("Chicken with " + sideDish);
// }

// orderChickwith("noodles");
// orderChickwith();

//Lecture 45 Object creation
// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.favColor = "blue";
// console.log(company);
// console.log("Company CEO name is: " + company.ceo.firstName);
// console.log(company.ceo["firstName"]);
// var stockPropName = "stock of company"
// company[stockPropName] = 110;
// console.log("Stock price is: " + company[stockPropName]);

//Lecture 45 part2
// var facebook = {
//     name: "Facebook",
//     ceo: {
//         firstName: "Mark",
//         favColor: "blue"
//     },
//     "stock of company": 110
// };

// console.log(facebook);

//Lecture 46
// function multiply(x,y) {
//     return x * y;
// }

// console.log(multiply(3,5));

// //Function factory
// function makeMultiplier(multiplier){
//     var myFunc = function (x) {
//         return multiplier * x;
//     }
//     return myFunc;
// }
// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10));
// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(100));

// //Passing functions as arguments
// function doOperationOn(x, operation) {
//     return operation(x);
// }

// var result = doOperationOn(5, multiplyBy3);
// console.log(result);
// result = doOperationOn(100, doubleAll);
// console.log(result);

//Lecture 47
//Copy by Reference VS by Value
//By Value:
// var a = 7;
// var b = a;
// console.log("a: "+ a);
// console.log("b: "+ b);

// b = 5;
// console.log("after b update:");
// console.log("a: " + a);
// console.log("b: " + b);

//By Reference:
// var a = { x: 7 };
// var b = a;
// console.log(a);
// console.log(b);

// b.x = 5;
// console.log("after b.x update:");
// console.log(a);
// console.log(b);

// b = { x: 8 };
// console.log("after b update:");
// console.log(a);
// console.log(b); //print out {x: 8}

//Pass by reference vs by value
//by value
// function changePrimitive(primValue) {
//     console.log("in changePrimitive...");
//     console.log("before:");
//     console.log(primValue);

//     primValue = 5;
//     console.log("after:");
//     console.log(primValue);
// }

// var value = 7;
// changePrimitive(value);
// console.log("after changePrimitive, orig value:");
// console.log(value);

//by reference
// function changeObject(objValue) {
//     console.log("in changeObject...");
//     console.log("before:");
//     console.log(objValue);//print{x:7}

//     objValue.x = 5;
//     console.log("after:");
//     console.log(objValue);//print{x:5}
// }
// var value = {x: 7};
// changeObject(value);
// console.log("after changePrimitive, orig value:");
// console.log(value);//print{x:5}

//Lecture48 Function Constructors, prototype, and the 'this' Keyword
// function Circle(radius) {
//     this.radius = radius;

// }
// Circle.prototype.getArea =
//     function(){
//         return Math.PI * Math.pow(this.radius, 2);
//     }

// var myCircle = new Circle(10);//new Object();
// console.log(myCircle.getArea());//print 314.15926...

// var myOtherCircle = new Circle(20);
// console.log(myOtherCircle.getArea());

//Lecture 49: Object Literals and the 'this' Keyword
// var literalCircle = {
//     radius: 10,

//     getArea: function () {
//         var self = this;
//         console.log(this);
//         var increaseRadius = function () {
//             self.radius = 20;
//         };
//         increaseRadius();
//         console.log(this.radius);//will be still 10, this points to window
//         return Math.PI * Math.pow(this.radius, 2);
//     }
// };

// console.log(literalCircle.getArea());

//quiz
// function Dog(name) {
//     this.name = name;
// }

// Dog.prototype.bark = function () {
//     console.log(this.name + " likes barking! Bark!");
// };

// var max = new Dog("Max");
// max.bark();



//Lecture 50 Arrays part1
// var array = new Array();
// array[0] = "cyk";
// array[1] = 2;
// array[2] = function (name) {
//     console.log("Hello " + name);
// }
// array[3] = {course: "HTML, CSS & JS"};

// console.log(array);
// array[2]("cyk");//call function of the array
// array[2](array[0]);//can also works
// console.log(array[3].course);

// //short hand array creation
// var names = ["cyk","ben","choi"];
// console.log(names);

// for (var i = 0; i < names.length; i++) {
//     console.log("Hello " + names[i]);   
// }

//Lecture 50 Arrays part2
// var names2 = ["cyk","ben","choi"];

// // var myObj = {
// //     name: "cyk",
// //     course: "HTML/CSS/JS",
// //     platform: "Coursera"
// // };
// // for(var prop in myObj){
// //     console.log(prop + ": "+ myObj[prop]);
// // }

// names2.greeting = "Hi!";
// console.log(names2);
// for (var name in names2){
//     console.log("Hello "+ names2[name]);
// }

//Lecture51 Closures
// function makeMultiplier(multiplier) {
//     function b(){
//         console.log("Multiplier is: " + multiplier);
//     }
//     b();
//     return(
//         function (x){
//             return multiplier * x;
//         }
//     );
// }

// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(10));//its own exec env

// Lecture 52 part2 
// (function (name) {
//     console.log("Hello "+ name +"!");
// })("Coursera");

(function (window){
    var cykGreeter = {};
    cykGreeter.name = "cyk";
    var greeting = "Hi ";
    cykGreeter.sayHi = function () {
        console.log(greeting + cykGreeter.name);
    }
    window.cykGreeter = cykGreeter;

})(window);

cykGreeter.sayHi();