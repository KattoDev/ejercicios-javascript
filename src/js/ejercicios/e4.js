import { clearInput } from "../converted-ts/clear.js";

let numInput = document.getElementById("numc1");

document.getElementById("comparar1").onclick = () => {
    let num = parseInt(numInput.value);

    if (!num) {
        alert("Ingresa un numero valido");
    } else {
        let triple = 3 * num;

        alert(`El triple de este número es: ${triple}`);

        clearInput(numInput);
    }
};
