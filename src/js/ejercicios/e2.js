import { clearInput } from "../converted-ts/clear.js";

let nameInput = document.getElementById("name");
let surnameInput = document.getElementById("surname");

document.getElementById("saludar").onclick = () => {
    let name = nameInput.value;
    let surname = surnameInput.value;

    if (name && surname) {
        alert(`Bienvenidx a nuestra página ${name} ${surname}`);
        clearInput(nameInput, surnameInput);
    } else {
        alert(`Bienvenido a nuestra página desconocido`);
        clearInput(nameInput, surnameInput);
    }
}