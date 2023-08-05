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