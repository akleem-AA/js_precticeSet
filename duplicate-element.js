console.log('hello duplicate element get an array ')

const yourArray = [1, 1, 2, 3, 4, 5, 5,6,5,6]
let duplicates = []

const tempArray = [...yourArray].sort()

for (let i = 0; i < tempArray.length; i++) {
  if (tempArray[i + 1] === tempArray[i]) {
    duplicates.push(tempArray[i])
  }
}

console.log(duplicates) //[ 1, 5 ,6]
let str= 'hello';
let str3=0;
str3=str.length;
console.log(str3)
// ........................end duplicates array .........



/////////////////////////////how to get factorial by using the recursive function
///factorial of number ...
 function fact(num){
    if(num==0||num==1)
	 return 1;
	else
	   return num*fact(num-1)
}
let num1=5;

console.log('no of factorial',fact(num1))
//solve problem then feeling is fantastic recursive functoin always work like a loop autometic call dynamicly workk.
// ...........end.....








//how to get fabonacci series by using recursive function.........
function fibn(n){
	if(n==0)
		return 0;
	if(n==0||n==2)
		return 1;
	else 
		return fibn(n-1)+fibn(n-2);
}
let n=5;
for (let i=0; i<n; i++) {
	console.log('fibnonicc no',fibn(i));
}
// ...end.fibnonicc series.......