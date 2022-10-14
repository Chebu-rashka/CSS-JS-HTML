// const buttons=document.getElementsByClassName('number')
// const operators=document.getElementsByClassName('operator')
// const display=document.getElementsByClassName('screen')


// let number1=0;
// let number2=0;
// let operator='';

// //____.toExonantial()  10hurtelh orontoi toog zogsoono js- dder bichne
// // display.innerHTML=num1;
// for(let i=0;i<buttons.length; i++) {
//     buttons[i].addEventListener('click',(event)=>{
//     if(display.innerHTML==="0"){
//         display.innerHTML=event.target.innerHTML;
//     } else {
//         display.innerHTML+=event.target.innerHTML;
//     }
//     })

// }


// <script>


const container = document.getElementsByClassName('container')
const bttns = document.getElementsByClassName('number')
const opps = document.getElementsByClassName('operator')
const screen = document.getElementById('screen')
let total = 0
const stack = []
const operators = {
  multiply: '*',
  divide: '/',
  add: '+',
  minus: '-'
}
const getScreen = () => screen.innerHTML
const setScreen = (text) => screen.innerHTML = text
const clearScreen = ()=> screen.innerHTML = ''
let screenNum = ''

const onBttnClick = (e) => {
  if(stack.length > 0) clearScreen()
  const val = e.target.attributes[1].value
  screen.innerHTML += val
}

const onOperatorClick = (e) => {
  const val = e.target.outerText
  if(getScreen().length > 0 || getScreen() !== '0') {
    stack.push(getScreen())
  }
  if(stack.length < 3) stack.push(val)
  else {
    console.log('poplohoos umnu: ',stack)
    const lastNum = stack.pop();
    const operator = stack.pop();
    const firstNum = stack.pop();

    console.log( operator);
    switch(operator) {
      case '+': {
        total = parseInt(lastNum) + parseInt(firstNum)
        setScreen(total)
        stack.push(total)
        break
      }
      case '-': {
        console.log("HASAH")
        break;
      }
      case '=': {
        console.log('dsdsadsada: '+total)
        setScreen(total)
      }

      default : ''
    }
  }
  console.log(stack)

}

for(let i =0; i < bttns.length; i ++) {
  bttns[i].addEventListener('click', onBttnClick)
}

for(let i =0; i < opps.length; i ++) {
  opps[i].addEventListener('click', onOperatorClick)
}

