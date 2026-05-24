const calculator=(a,b,c)=>{
  switch(c)
  {
    case '+':return a+b;
    
    case '-':return a-b;

    
    case '*':return a*b;
    case '/':
              if(b===0){

              return '0 is not allowed';
              }
             else{
             return a/b;
             }
    
    default: return "Invalid operator enter!"
  }
}
function calculate(){
let firstNum=
document.getElementById("first").value
firstNum=Number(firstNum);

let secNum=
document.getElementById("second").value
secNum=Number(secNum);

let operator=
document.getElementById("op").value

let result=calculator(firstNum,secNum,operator);

document.getElementById("display").innerText=result;
}