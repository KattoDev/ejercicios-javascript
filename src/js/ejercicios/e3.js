import { clearInput } from "../converted-ts/clear.js";

let num1Input = document.getElementById("num1");
let num2Input = document.getElementById("num2");

document.getElementById("calcular").onclick = () => {
    let n1 = parseFloat(num1Input.value);
    let n2 = parseFloat(num2Input.value);

    if (n1 && n2) {
        alert(`El resultado es: ${n1 + n2}`);
        clearInput(num1Input, num2Input);
    } else {
        alert("porfavor coloca un número valido");
        clearInput(num1Input, num2Input);
    }
};
