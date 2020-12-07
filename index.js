// 1. Ways To print in Javascript

//console.log("Hello World");
// alert("Me");
//document.write("Inside the Document");

// 2. Javascript Console API

//console.log("Hello World", 4+6, "Is Here!");
//console.warn("This is warning");
//console.error("This is an Erorr.");
//console.clear();
//console.assert(4==6);
//console.assert(4==(8-4));

// 3. Javascript Variables
//use ctr + fwd slash (ctr+/)
// for comment out multiple lines do select multiple lines + ctr + / do same for uncomment it
// gffg
// fddf
// dfd

// or use /* text */
/*
DynamicsCompressorNode
dcjsncs
msContentScript
cjsncsncn */

// Variables:Container To store data values.

var num = 34;
var num1 = 36;
//console.log(num + num1);

// 4. Data Types in javascript

//numbers
var num1 = 344;

//strings
var str1 = "this is a string";
var str2 = "this is a string";

//objects
var marks = {
  ravi: 43,
  ABHI: 56,
  Harry: 26.55,
};

// console.log(num1);
// console.log(str1);
// console.log(marks);

//Booleans
var a = true;
var b = false;
//console.log(a, b);

var und = undefined;
var x;
// undefined means we haven't assigned a value to it
//console.log(und, x);

//not likewise
var n = null;
var g;
//console.log(n,g);

/*
At a very high level there a 2 types of data types
1. Primitive data Types: undefined,null,boolean,number,string,symbol
2. Reference Data Types: Arrays & Objects
*/

//Arrays

var arr = [1, 2, "bablu", 5, 6];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

//5.Operators in Javascript

//Arithmetic operators
var a = 43;
var b = 56;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);

//Assingment Operators

var c = b;
c += a + b;
//console.log(c);

//comparison Operator
var x = 34;
var y = 44;
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);
// console.log(x>y);
// console.log(x<y);

//Logical Operators

//logical AND
// console.log(true && true);
// console.log(false && true);
// console.log(false && false);
// console.log(true && false);

//logical OR
// console.log(true || true);
// console.log(false || true);
// console.log(false || false);
// console.log(true || false);

//logical NOT
// console.log(!false);
// console.log(!true);

// 6. Functions in JavaScript
// DRY = Do not Repeat Yourself

function avg(a, b) {
  return a + b / 2;
}

c1 = avg(4, 6);
c2 = avg(43, 65);
c3 = avg(44, 65);
//console.log(c1,c2,c3);

// 7. conditionals in javascript

var age = 34;
/*
//simple if-else
if(age>8){
    console.log("Your are not a kid!");
}
else{
    console.log("You are a kid!");
}

// if-else ladder

if(age>20){
    console.log("You cannot drink");
}
else if(age>25){
    console.log("Mard Ban gaye");
}
else{
    console.log("Ypu can do anything");
}
console.log("End of Ladder");
*/

// 8. Loops

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//console.log(arr);

// for(var i=0;i<arr.length;i++)
// {
//     if(i==5){
//         //break;//set counter out of the loop & terminates
//         continue;//skip this iteration(loop), do nothing & move to the next iteration(loop)
//     }
//     console.log(arr[i]);//this will not run for i==5 as we cancel this iteration
// }

// it runs for every element of array
// arr.forEach(function (element) {
//   console.log(element);
// });

let j = 0;
// variable of let have scope in a block like in a curly braces of a satement or a function
// it is the latest way of using on javascript & var is old one
// helps in good memory management

const ac = 0;
// const is used for setting value of a variable strongly & can't change futher else gives error

// while(j<arr.length)
// {
//     console.log(arr[j]);
//     j++;
// }

// this do while loop runs atleast once
// do {
//   console.log(arr[j]);
//   j++;
// } while (j < arr.length);

// 9. Operations with Array & it's methods
/*
let myarry = ["fan", "Boom", "Heyy!", "Blast", 45, 56.78]

//Array Methods
console.log(myarry.length);
console.log(myarry);
myarry.pop();//delete last element
console.log(myarry);
console.log(myarry.length);
myarry.push("Bhim");//adds one elment ot the array
console.log(myarry);
console.log(myarry.length);
myarry.shift();//deletes 1st element from array
console.log(myarry);
console.log(myarry.length);
console.log(myarry.unshift("Bhim"));//return length of array
console.log(myarry);
console.log(myarry.length);
const u=myarry.toString();
console.log(u);// return whole array as a string
myarry.sort();// sorts in alphbatical order
*/

//String Methods

// let mystring= "Bhim is Very Very Strong";
// console.log(mystring.length);
// console.log(mystring.indexOf("Strong"));
// console.log(mystring.indexOf("Very"));//gives index of 1st occurence
// console.log(mystring.lastIndexOf("Very"));//gives index of last occurence
// console.log(mystring.slice(3,8)); //3 to 7 here 8 is excluded
// console.log(mystring.replace("Bhim","Krishna"));//replace bhim with krishna(replce only 1st occurence)
// console.log(mystring);

// 10. Dates

// let myDate = new Date(); //Here new keyword is used for making new date for our convinence
// console.log(myDate);

// //Methods of Dates
// console.log(myDate.getTime());// give time in Seconds
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

//Explore More on this

// 11. Document Object Model (DOM) Manupulation

// let elem=document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName("container"); //for get such a big name just type 'gEbc'
// console.log(elemClass);
// elemClass[0].style.background = 'red';

// adding new class
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");

//removing class
// elemClass[0].classList.remove("text-success");

//Accessing HTML of elements
// console.log(elemClass[0].innerHTML);// for this try 'inerHT'
// //Accessing text of elements
// console.log(elemClass[0].innerText);// try inerxT
// console.log(document.getElementsByTagName('button')); //gebtn

//creating/apppending new element
// let tn = document.getElementsByTagName('div');
// console.log(tn);
// createdElement = document.createElement('p');
// createdElement.innerText = "This is my paragraph.";
// tn[0].appendChild(createdElement);
// createdElement1 = document.createElement('b');
// createdElement1.innerText = "This is my new paragraph.";
// tn[0].replaceChild(createdElement1,createdElement);
// use mdn explore their different methods like removeChild(element)

//RUn this in console
// document.title
// "JavaScript Tutorial"
// document.URL;
// "http://127.0.0.1:5500/"
// document.images
// HTMLCollection []length: 0__proto__: HTMLCollection
// document.domain;
// "127.0.0.1"

// 12. Selecting using Query
// sel = document.querySelector('.container');
// console.log(sel);
// sel1 = document.querySelectorAll('.container');
// console.log(sel1);

// 13. Events
// eg:onclick,onmousedown,onmouseup,mouseover,onload...etc explore more events

// function clicked() {
//   console.log("The Button Was Clicked!");
// }

// window.onload = function () {
//   console.log("The Document window was Loaded");
// };

// Firstcontainer.addEventListener('click', function(){ // 'addEventListener is a buitin function for rendering events
//     document.querySelectorAll('.container')[1].innerHTML = "<b>We have Clicked</b>";
//     console.log("You have successfully clicked in the 1st container.");
// })

// Firstcontainer.addEventListener('mouseover', function(){
//     console.log("Mouse hovered in the 1st container."); //working same as mouseup event may be it is old javascript or it doesnt't support
// })

// Firstcontainer.addEventListener('mouseout', function(){
//     console.log("Mouse is outside the 1st container.");
// })

// 14. Set-Timeout & Set-Interval

//Arrow Functions

// sum = (a, b) => {
//   return a + b; //call in console or here itself
// };

// login = () => {
//   document.querySelectorAll(".container")[1].innerHTML =
//     "<b>Set Interval Fired</b>";
//   console.log("I'm Yours!");
// };

//setTimeout(login, 2000); //2000 millisecons = 5 seconds
// for cancelling setTimeout use clearInterval
//clr = setTimeout(login, 5000); //5000 millisecons = 5 seconds
//clearInterval(clr);//run in console

// setInterval(login,2000);//runs after every 2 seconds
// //for stopping aove event
// clr = setInterval(login,2000);//runs after every 2 seconds
// clearInterval(clr);//stops above event


// 15. Javascript LocalStorage
    
//Local storage and Session storage are the web srorage objects. Session storage is destroyed once the user closes the browser whereas, Local storage stores data with no expiration date.
//With web storage, web applications can store data locally within the user's browser.

// Before HTML5, application data had to be stored in cookies, included in every server request. Web storage is more secure, and large amounts of data can be stored locally, without affecting website performance.

// Unlike cookies, the storage limit is far larger (at least 5MB) and information is never transferred to the server.

// Web storage is per origin (per domain and protocol). All pages, from one origin, can store and access the same data.

// localStorage.setItem('name',"Bhushan");
// undefined
// localStorage;
// Storage {name: "Bhushan", length: 1}
// localStorage.getItem('name');
// "Bhushan"
// localStroge.removeItem('name')
// localStorage.clear()

// 16. JavaScript Object Notation(JSON) is lieghtweight data-interchange format.

// obj = {name:"Bheem", length: 1, a:{this: 'tha"t'}} //JSON objects must be string
// jso = JSON.stringify(obj); //converts objects to string
// console.log(typeof jso)
// console.log(jso)//after making object to string we can easily use & tronspoert it's contents
// parsed = JSON.parse(`{"name":"Bheem","length":1,"a":{"this":"that"}}`)

