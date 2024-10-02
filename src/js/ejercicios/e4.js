import { clearInput } from "../converted-ts/clear.js";

let numInput = document.getElementById("numc1");

document.getElementById("comparar1").onclick = () => {
    let num = parseInt(numInput.value);
    let isPair = Boolean(!(num % 2));
    let result = "impar";

    if (!isPair) {
        result = "par";
    }

    alert(`el número es ${result}`);

    clearInput(numInput);
};
