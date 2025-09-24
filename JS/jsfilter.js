const number=[1,2,3,4,5,6,7,8,9];
const newnumber=number.filter((num)=>(num>5))
console.log(newnumber);
const newnum1=number.filter((num)=>(num%2!=0))
console.log(newnum1);

const num1=number.map((num)=>(num*5))
console.log(num1);
const sum=number.reduce((num,count)=>num+count,11)
console.log(sum);
