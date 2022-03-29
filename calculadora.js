window.addEventListener('load', ()=>{
 const display = document.querySelector('.calculator-display');
 const keypadbuttons = document.getElementsByClassName('keypad-button');
 const keypadbuttonsarray  = Array.from(keypadbuttons);
 keypadbuttonsarray.forEach((Button) =>{
     Button.addEventListener('click', ()=> {
        calculadora(Button, display);
     })
 })
})
window.addEventListener('load', ()=>{
    const display = document.querySelector('.calculator-display');
    const keypadbuttons2 = document.getElementsByClassName('keypad-button-yellow');
    const keypadbuttonsarray  = Array.from(keypadbuttons2);
    keypadbuttonsarray.forEach((Button) =>{
        Button.addEventListener('click', ()=> {
            calculadora(Button, display);
        })
    })
   })
   window.addEventListener('load', ()=>{
    const display = document.querySelector('.calculator-display');
    const keypadbuttons3 = document.getElementsByClassName('keypad-button-yellowb');
    const keypadbuttonsarray  = Array.from(keypadbuttons3);
    keypadbuttonsarray.forEach((Button) =>{
        Button.addEventListener('click', ()=> {
            calculadora(Button, display);
        })
    })
   })
   window.addEventListener('load', ()=>{
    const display = document.querySelector('.calculator-display');
    const keypadbuttons4 = document.getElementsByClassName('keypad-button-cero');
    const keypadbuttonsarray  = Array.from(keypadbuttons4);
    keypadbuttonsarray.forEach((Button) =>{
        Button.addEventListener('click', ()=> {
            calculadora(Button, display);
        })
    })
   })
   window.addEventListener('load', ()=>{
    const display = document.querySelector('.calculator-display');
    const keypadbuttons5 = document.getElementsByClassName('keypad-button-gray');
    const keypadbuttonsarray  = Array.from(keypadbuttons5);
    keypadbuttonsarray.forEach((Button) =>{
        Button.addEventListener('click', ()=> {
            calculadora(Button, display);
        })
    })
   })
   window.addEventListener('load', ()=>{
    const display = document.querySelector('.calculator-display');
    const keypadbuttons5 = document.getElementsByClassName('keypad-button-large');
    const keypadbuttonsarray  = Array.from(keypadbuttons5);
    keypadbuttonsarray.forEach((Button) =>{
        Button.addEventListener('click', ()=> {
            calculadora(Button, display);
        })
    })
   })
   function calculadora(Button,display){
    switch (Button.innerHTML){
        case 'C':
        borrar(display);
        break;
        case '=':
            calcular(display);
        default:
             actualizar(display, Button);
        break;
    }
}
function calcular(display){/* esta funcion calcula todas las operaciones (nice)*/
     display.innerHTML= eval(display.innerHTML)
}
function actualizar(display, Button){
    if (display.innerHTML ==0){
        display.innerHTML= '';
    }
    display.innerHTML += Button.innerHTML;
}
function borrar(display){
    display.innerHTML= 0;
}