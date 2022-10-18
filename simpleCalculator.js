// const buttons=document.getElementsByClassName('number')
// const operators=document.getElementsByClassName('operator')
// const display=document.getElementsByClassName('screen')


// // let number1=0;
// // let number2=0;
// // let operator='';

// // //____.toExonantial()  10hurtelh orontoi toog zogsoono js- dder bichne
// // // display.innerHTML=num1;
// // for(let i=0;i<buttons.length; i++) {
// //     buttons[i].addEventListener('click',(event)=>{
// //     if(display.innerHTML==="0"){
// //         display.innerHTML=event.target.innerHTML;
// //     } else {
// //         display.innerHTML+=event.target.innerHTML;
// //     }
// //     })

// // }

// // <script>


// const container = document.getElementsByClassName('container')
// const bttns = document.getElementsByClassName('number')
// const opps = document.getElementsByClassName('operator')
// const screen = document.getElementById('screen')
// let total = 0
// const stack = []
// const operators = {
//   multiply: '*',
//   divide: '/',
//   add: '+',
//   minus: '-'
// }
// const getScreen = () => screen.innerHTML
// const setScreen = (text) => screen.innerHTML = text
// const clearScreen = ()=> screen.innerHTML = ''
// let screenNum = ''

// const onBttnClick = (e) => {
//   if(stack.length > 0) clearScreen()
//   const val = e.target.attributes[1].value
//   screen.innerHTML += val
// }

// const onOperatorClick = (e) => {
//   const val = e.target.outerText
//   if(getScreen().length > 0 || getScreen() !== '0') {
//     stack.push(getScreen())
//   }
//   if(stack.length < 3) stack.push(val)
//   else {
//     console.log('poplohoos umnu: ',stack)
//     const lastNum = stack.pop();
//     const operator = stack.pop();
//     const firstNum = stack.pop();

//     console.log( operator);
//     switch(operator) {
//       case '+': {
//         total = parseInt(lastNum) + parseInt(firstNum)
//         setScreen(total)
//         stack.push(total)
//         break
//       }
//       case '-': {
//         console.log("HASAH")
//         break;
//       }
//       case '=': {
//         console.log('dsdsadsada: '+total)
//         setScreen(total)
//       }

//       default : ''
//     }
//   }
//   console.log(stack)

// }

// for(let i =0; i < bttns.length; i ++) {
//   bttns[i].addEventListener('click', onBttnClick)
// }

// for(let i =0; i < opps.length; i ++) {
//   opps[i].addEventListener('click', onOperatorClick)
// }




// //number op-oo elementeer n abna

// const display=document.getElementById("screen")
// const operators=document.getElementsByClassName("operator")
// const numbers=document.getElementsByClassName("number")
// const equalbttn=document.getElementById("equal")
// const clearbttn=document.getElementById("clear")

// ///toogoo gargadag bolgo for loopeer
// let num1=0
// let num2=0
// let op=null
// let initialCal= true

// display.innerHTML=num1

// for(let i=0;i<numbers.length;i++){
//   numbers[i].addEventListener('click',(e)=>{
//     console.log(initialCal,op)
//     if(initialCal===false && !op){
//       display.innerHTML=""
//     }
//     if(display.innerHTML==="0") display.innerHTML+=e.target.innerHTML;
//     else if(op && num2){
//       display.innerHTML+=e.target.innerHTML;
//       num2=display.innerHTML
      
//     } 
    
    
//     else if(op){
//       display.innerHTML=e.target.innerHTML ///op irj bga ued num1-eer n l bailgana
//       num2=display.innerHTML;
//     }
    
//     else(display.innerHTML+=e.target.innerHTML);
//   })

// }
// ///operatoroo gargadag bolgo for loopeer
// for (let i=0;i<operators.length;i++){
//   operators[i].addEventListener('click',(e)=>{
//     op=e.target.innerHTML;
//     num1=display.innerHTML
//   })
// }

// equalbttn.addEventListener('click',()=>{

//   if(op==="+"){
//     display.innerHTML=parseInt(num1)+parseInt(num2)
//   }
//   if(op==="-"){
//     display.innerHTML=parseInt(num1)-parseInt(num2)
//   }
//   if(op==="/"){
//     display.innerHTML=parseInt(num1)/parseInt(num2)
//   }
//   if(op==="*"){
//     display.innerHTML=parseInt(num1)*parseInt(num2)
//   }
//   num2=null
//   op=null
//   initialCal=false
// })

// //clear darah ued utga ustah ystoi

// clearbttn.addEventListener('click',()=>{
//   console.log(e.target.innerHTML)
//   num1=0
//   num2=0
//   op=""

//   display.innerHTML=num1
// })

const display = document.getElementById("screen");
const clearbtn = document.getElementById("clear");
const equalsbtn = document.getElementById("equal");
const operators = document.getElementsByClassName("operator");
const buttons = document.getElementsByClassName("number");
const dotbttn=document.getElementById("dot")
// let operatorResult= false
let num1 = 0;
let num2 = 0;
let op = null;
let initialCal = true; // ymar neg yumnas ehelj bgaga hadg
const calculate=()=>{
    if (op === "+") {
        num1=parseFloat(num1) + parseFloat(num2);
        display.innerHTML = num1;
        
      }
      if (op === "-") {
        num1=parseFloat(num1) - parseFloat(num2);
        display.innerHTML = num1;
      }
      if (op === "*") {
        num1=parseFloat(num1) *parseFloat(num2);
        display.innerHTML = num1;
      }
      if (op === "/") {
        num1=parseFloat(num1) / parseFloat(num2);
        display.innerHTML = num1.toExponential(4);
      }
}
display.innerHTML = num1;

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (event) => {
    // console.log(initialCal, op);
    if (initialCal === false && !op) { // tentsuu bhgu ued op bhgu ued
      display.innerHTML = "";
    }
    if (display.innerHTML === "0") display.innerHTML = event.target.innerHTML;
    else if (op && num2) {
      display.innerHTML += event.target.innerHTML;
      num2 = display.innerHTML;
    } else if (op) {
      display.innerHTML = event.target.innerHTML;
      num2 = display.innerHTML;
    } else display.innerHTML += event.target.innerHTML;
  });
}
// operator gargahdaa
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", (event) => {
if(!num2){
    op = event.target.innerHTML;
    num1 = display.innerHTML;
    console.log(op);
}else{
    calculate()
    op = event.target.innerHTML;
    num2=0;
}
    

  });
}
// clear
clearbtn.addEventListener("click", (event) => {
  console.log(event.target.innerHTML);
  num1 = 0;
  num2 = 0;
  op = ""; //gargasan ur dungee neg yum deer hadgalah

  display.innerHTML = num1;
});

equalsbtn.addEventListener("click", () => {
  calculate()
//   op = null;
//   num2 = null;
  initialCal = false;
});

// dot
dotbttn.addEventListener("click", (event) => {
  if(
    display.innerHTML.indexOf('.')===-1
  )
    display.innerHTML+=event.target.innerHTML;
});

