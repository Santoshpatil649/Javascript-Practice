//Class and objects----1
class Car{
    constructor(model, fuel){
        this.model = model;
        this.fuel = fuel;
    }
    start(){
        console.log("started.. model is :" +this.model + " " +"Engine is : " +this.fuel);
    }
}
let car = new Car("Audi Q3", "petrol");
car.start();


// Let keyword ----2
var a = 10;
var a = 30;                //var can be re-defined and re-assigned and var is global scope
a = 40;

let c = 40;
{
    var a = 20;
    console.log(a);
}
console.log(a);


//checking sum zero ----3
 function getSumPairZero(array){
        for(let number of array){
            for(let j=1; j<array.length; j++){
                if(number + array[j] === 0){
                    return [number, array[j]];
                }
            }
        }
 }
 let result = getSumPairZero([-4, -3, -2, 0, 1, 2, 4, 6]);
 console.log(result);
//  time complexity: O(n^2) quadratic time complexity

 //Another Solution Linear Solution for problem-1----4
 function getSumPairZero(array){
    let left = 0;
    let right = array.length-1;
        while(left < right){
            sum = array[left] + array[right];
            if(sum === 0){
                return [array[left], array[right]];
            }
            else if(sum>0){
                    right--;
            }
            else{
                left--;
            }
        }
 }
 const result1 = getSumPairZero([-4, -3, -2, 0, 1, 2, 4, 6]);
  console.log(result);
  //Time complexity : Linear time complexity O(n)



//String Anagram problrm ----5
function areAnagram(str1, str2){
    if(str1.legth !==str2.legth){
        return false;
    }
    let counter={};
    for(let letter of str1){
        counter[letter] = (counter[letter] || 0) + 1;
        console.log(counter[letter]);
    }

    for(let items of str2){
        if(!counter[items]){                            //if counter of item does not exist
                return false;
        }
        counter[items]-=1;             
}
    return true;
}
  const check = areAnagram('fuck','fcuk');
console.log(check)
//linear time complexity : O(n)

//anagram answer----5
var str1="fuck";
var str2="Fcuk";

function checkAnagram(string1, string2){
    var a = string1.toLowerCase();
    var b = string2.toLowerCase();

    c= a.split("").sort().join("");
    d=b.split("").sort().join("");

    return c===d;
}
console.log(checkAnagram(str1, str2));



//Counting unique numbers - Problem ----6
function uniqueNumCount(array){
    if(array.length>0){
        let i =0;                                                    // i j
        for(j=1; j<array.length; j++){                              // [1,2,4,5,6,7,3,8,8,9,9,9,100]
            if(array[i]!==array[j]){             //if i and j is !== then increase i index and replace j value
                    i++;                                 // to i index
                    array[i]=array[j];
            }
        }
        return i+1;               // cuz i starts from 0
    }else{
        throw new Error("Array is empty");
    }

}
const result2 = uniqueNumCount([1,2,4,5,6,7,3,8,8,9,9,9,100]);
console.log(result);
//time complexity : linear time complexity : O(n)


//Largest sum of consicutive digits - Problem ----7
function findLarsgest(array, num){
    if(num>array){
        throw new Error("num should not be greater than array");
    }else{
        let max = 0;
        for(i=0; i<array.length-4+1; i++){                           //10-4+1
                let temp = 0;
                for(j=0; j<num; j++){
                    temp += array[i + j];                      //i+j = 0+3=4 i.e we need to 
                                                             // add 4 consicutive numbers
                }                                              
                if(temp>max){
                    max=temp;
                }
            }
            return max;
    }
}
const result3 = findLarsgest([2,1,4,5,7,4,9,6,1,50,1,3,4,15], 2);
console.log(result);


//divide & conquerer technique or Binary Search Problem ----8
function findIndex(array, number){
        let min=0;
        let max=array.length-1;
        while(min<=max){
            let midIndex = Math.floor((min+max)/2);
            console.log(min+"=min, "+max+"max "+midIndex+"midIndex")
            if(array[midIndex] < number){
                min = midIndex+1;
            }
            else if(array[midIndex] > number){
                max = midIndex-1;
            }else{
                return midIndex;
            }
        }
        return -1;
}
const result4 = findIndex([1,2,3,4,5,6,7,8,9,10], 8);
console.log(result);
//Time complexity : Binarytime complexity : O(log(n))



//Linear Serach - Problem ----9
const users=[{username:"santu", gmail:"santu@gmail.com"},
            {username:"abc", gmail:"abc@gmail.com"},
            {username:"xyz", gmail:"xyz@gmail.com"}
             ];

function isExist(array, val){
    for(let item of array){
        if(item['username']===val){
            return true;
        }
    }
    return false;
}
const result5 = isExist(users, 'santu');
console.log(result);
//Time complexity : Linear O(n)


//Find duplicate elements in given array----10
const duplicateArray = [10,20,30,20,50,40,10];
const duplicates = duplicateArray.filter((ele, index, arr)=>arr.indexOf(ele) !== index);
console.log(duplicates);

// sorting arreay of numbers----11
const sorted = duplicateArray.sort();
console.log(sorted);

//count of duplicates in an array----12
const months = ["jan", "feb", "mar", "apr", "may", "may", "jan", "feb"];
// const months = [2,5,4,6,2,4,6,8];
const duplicatesCount = months.reduce((obj, month)=> {
    if(obj[month]==undefined){
        obj[month]=1;
        return obj;
    }else{
        obj[month]++;
        return obj;
    }
}, {});

console.log(duplicatesCount);


//sort a number array----13
const num = [50,10,40,100,12,80,45,30,444];
const sortedArray = num.sort((a,b)=>{
        return a-b;
});
console.log(sortedArray);


//sort an array of strings----14
const months1 = ["jan", "feb", "mar", "apr", "may", "may", "jan", "feb"];
const sorted1 = months.sort();
console.log(sorted);


//find maximum value from a numbers array----15
const num1 = [50,10,40,100,12,80,45,30,444];
function findMax(arr){
    return arr.reduce(function(pre, cur){
        return pre > cur ? pre : cur;
    })
}
console.log(findMax(num));



//find avg value of numbers from numbered array----16
const nums=[10,10,10,10,10];
const countNums = nums.reduce((a,b)=> a+b);
const length = nums.length;
console.log(countNums/length);


//Uppercase the first character of the string array----17
days=["sunday", "monday", "Tuesday", "wednesday", "thursday", "saturday"];
for(let day of days){
    d = day.charAt(0).toUpperCase() + day.substring(1, 3);
    console.log(d);
}


//make a sentence out of givrn array and make first letter to uppercase----18
const arr=["meditation", "for", "human", "integration"];
const outputArr = arr.join(" ");
const a1 = outputArr.charAt(0).toUpperCase() + outputArr.substring(1);
console.log(a1);



// check if an array contains any ele of another array----19
const stuId=[1,2,5,6,7,10];
const passedId=[25,45,4,10];
const result6 = stuId.some(ele => passedId.includes(ele));
console.log(result);


//extract few fields from JSON obj and form a array----20
const input={
    students :[
        {
    name: "santosh",
    age: 24,
    id: 125
    },
    {
    name: "sampat",
    age: 25,
    id: 120
    },
    {
        name: "aashray",
        age: 25,
        id: 126
        }
]}

const output = input.students.map(function(item){
    let stuobj = {
        name: item.name,
        age: item.age
    }
    return stuobj;
})
console.log(output);


//filter a given obj based on certain condition----21
const input1={
    students :[
        {
    name: "santosh",
    age: 23,
    id: 125
    },
    {
    name: "sampat",
    age: 25,
    id: 120
    },
    {
        name: "aashray",
        age: 25,
        id: 126
        }
]}
var output1 = input.students.filter(function(item){
    return item.age > 24 ? item : "";
});
console.log(output1);


//reverse each word in sentence----22
const str="Meditation for human integration";

function revString(inputStr, separator){
   return inputStr.split(separator).reverse().join(separator);
}
const op = revString(str, "");
console.log(op);


//IIFE - Immidiately Invoked Function Expression----23
function getData(){
    console.log("Im outside the IIFE");
}
(function getData(){                             //IIFE
    console.log("Im inside the IIFE");
}) ();
getData();


//How to empty an array----24
var students = ["san", "sat", "aks"];
//technique-1
// student = [];

//technique-2
//students.length=0;

//technique-3
// while(students.length > 0){
//     students.pop();
// }

//technique-4
students.splice(0, students.length);
console.log(students);


//to check the string is palindrome or not----25
function checkPal(str){
    str = str.toLowerCase();
    return (str == str.split('').reverse().join(''));
}

console.log(checkPal("madaM"));



//combine 2 arrays into third array----26
const arr1=[1,2,3,4,5,6,7];
const arr2=[7,6,5,4,3,2,1];

const arr3=[...arr1, ...arr2];
console.log(arr3);


//reversing the index of string array----27
let students1 = ['ab','bc','cd','da'];
const op1 = students1.slice().reverse();
console.log(op1);


//replace ele at sprinfic index of array----28
const arr4=[10,20,30,40,50,60];
const replaceAt = 1;
const ele=15;

const op2=[...arr4.slice(0, replaceAt), ele, ...arr4.slice(replaceAt, arr4.length)];
console.log(op2);