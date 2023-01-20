let mathInput = document.getElementById('inputtext')

// const newsize = ()=>{if(mathInput.value.length>13){
//     mathInput.style.fontSize='22px'
// }}

const fontSize = ()=>{if(mathInput.value.length<13){
    mathInput.style.fontSize='30px'
}else{
    mathInput.style.fontSize='22px'
}
}

function calculate(number){
        mathInput.value+=number
    fontSize()
}

function result(){
    try {
        if(mathInput.value &&   typeof(eval(mathInput.value))==='number'){
            mathInput.value=eval(mathInput.value)
        }
        fontSize() 
      }
      catch(err) {
        console.log('catch error');
      }
}
function clr(){
    mathInput.value=mathInput.ariaPlaceholder;
    fontSize()
}
function del(){
    mathInput.value=mathInput.value.slice(0,-1);
    fontSize()
}














