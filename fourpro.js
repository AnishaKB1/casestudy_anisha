//Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not. 
var NumArray=[];
//function for gettina an array
function CreateArray(length) {
   
   for (var i=2 ;i<=length;i++) {
     NumArray.push(i); 
   }
   console.log("The Array is :"+NumArray);
}
CreateArray(12);
//function to check whether the first element of an array is prime or not
function testPrime(num) {
    var j,flag=0;
    for (j= 2; j <=num/2; j++) {
        if (num%j==0) {
            flag=1;
            break;
        }
        
    }
    if (flag==0) {
        console.log(num+" "+"is a prime number");
        
    }
    else{
        console.log(num+" "+"is not a prime number");
    }
}
testPrime(NumArray[0]);


// Write a JavaScript program to find the most frequent item of an array
var FreqArray=['a','b',3,5,6,5,5,3];
var freq =1; //setting maximum frequency as 1
var m=0; //counting the number
var item; // storing most frequent number as item
for(var p=0;p<FreqArray.length;p++){
    for(var q=p;q<FreqArray.length;q++){
        if(FreqArray[p]==FreqArray[q]){
            m++;
            if(freq<m)
            {
                freq=m;
                item=FreqArray[p];
            }
        }
    }
    m=0;
}
console.log("The most frequent item is :"+" "+item);


//Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, check if the current number is odd or even, and display the message to the screen as odd or even.

for(var x=0;x<=15;x++){
    if(x===0){
        console.log(x+" "+"is an Even number");
    }
    else if(x%2===0){
        console.log(x+" "+"is an Even number");
    }
    else{
        console.log(x+" "+"is an Odd number");
    }
}


//Write a JavaScript program to find the sum of squares of the elements of an array.

function sumSquare(array){
    var sum=0;
    len=array.length;
    while(len--){
        sum+=Math.pow(array[len],2);
    }
    console.log("The array is :"+array);
    console.log("The sum is :"+sum);

}
sumSquare([3,5,6,8,10]);