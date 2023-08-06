


let values = "";

let input =  document.getElementById('value');
let evalValue = document.getElementById('evalValue');
input.value = "";
evalValue.value = "";


let btns = document.querySelectorAll('button');

Array.from(btns).forEach((button) => {
    button.addEventListener('click', (e) => {

        if (e.target.innerHTML === "=") {
            values = eval(values);
            evalValue.value = values;
        }
        else if (e.target.innerHTML === "C") {
            values = "";
            input.value = "";
            evalValue.value = "";
        }
        else if (e.target.innerHTML === "Del") {
            values = values.substring(0, values.length-1);
            input.value = values;
        } 
        else if (e.target.innerHTML === "÷"){
            values = values + "/"
            input.value = values;
        }
        else if (e.target.innerHTML === "×"){
            values = values + "*";
            input.value = values;
        }
        else if (e.target.innerHTML === "%") {
            values  = values + "/100*";
            input.value = values;
        }
        else {
            // console.log(e.target);
            values = values + e.target.innerHTML;
            input.value = values;
            
        }
    })
})