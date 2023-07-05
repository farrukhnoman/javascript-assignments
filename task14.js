var a=2;//1

var b=1;//0//1//0

var result=--a- --b+ ++b + b--;

console.log(a)
console.log(b)
console.log(result);
//--a // answer is 1
//--a- --b //1-0//answer is 1
//--a- --b+ ++b//1-0+1// answer is 2
//b--//answer is 1
//--a- --b+ ++b + b--;//1-0+1+1)//1+1+1// answser is 3