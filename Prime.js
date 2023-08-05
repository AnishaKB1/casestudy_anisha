//Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not. 
var NumArray=[];

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

