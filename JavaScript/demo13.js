console.log("santosh patil");
document.write("this is document write");
console.warn("this is warning")

// DATATYPES
//Numbers
var num1 = 10;
var num2 = 20;

console.log(num1 + num2);

//String
var str1 = "This is a string"
var str2 = 'This is also a string'

console.log(str1);

//Objects
var marks = {
    santosh: 35,
    sampath: 50
}
console.log(marks);

//Booleans
var a = true;
var b = false;
console.log(a);

//Array
var arr = [2, 4, 6, 8, 10]
console.log(arr[2]);

//Functions
function avg(a,b){
    c = (a+b)/2;
    return c;
}
c1 = avg(10,20);
c2 = avg(20,40);
console.log(c1, c2);


//For-each loop
arr.forEach(function(element){
    console.log(element);

})

//Continue & Break
for(var i=0;i<arr.length;i++){
    if (i==2){
        // continue;
        break;
    }
    console.log(arr[i]);
}

//date
let myDate = new Date();
console.log(myDate);


//DOM
let elem = document.getElementById('click');
console.log(elem);
let elemClass = document.getElementsByClassName('container');
console.log(elemClass);
elemClass[0].classList.add('bg-primary');
console.log(elem.innerHTML);
console.log(elem.innerText);

console.log(elemClass[0].innerHTML);
console.log(elemClass[0].innerText);




