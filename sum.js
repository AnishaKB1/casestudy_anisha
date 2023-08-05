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