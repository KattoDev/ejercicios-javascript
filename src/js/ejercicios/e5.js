import { clearInput } from "../converted-ts/clear.js";

let textInput = document.getElementById("text");
document.getElementById("measure").onclick = () => {
    let text = textInput.value;

    let length = text.length;

    alert(`El largo del texto ingresado es: ${length}`);
    clearInput(textInput);
};
