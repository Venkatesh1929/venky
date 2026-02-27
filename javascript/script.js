console.log("Hello world");
//Reintialiaze and Redeclare
var a;//Global scope
a=10;
var a;
a=20;
//Reintialize
let b=10;//block scope

//can't Redeclare and Reintialize
const c=30;

console.log(a);
console.log(b);
console.log(c);

var num=10;
var str="venkey";//we can use `` | "" |''
var bool=true;
var un;
var nu=null;
var big=32132444222n;
var symbol=Symbol('li');

console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof un);
console.log(typeof nu);
console.log(typeof big);
console.log(typeof symbol);

var arr=[1,2,3,4,5];
console.log(arr);
console.log(typeof arr);

var obj={name:'venkey',dept:'DS'};
console.log(obj);
console.log(typeof obj);