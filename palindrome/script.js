let num=121;


function isPalindrome(data) {
 let start = 0;
 let end = data.length -1;
 let result = true;
 while (end>start){
 if(data[end]!=data[start]){
 result= false;
 
 }
   start++;
   end--;
 }
return result ;
    
}
console.log(isPalindrome(num));