const button = document.getElementById("comparar2");

button.onclick = () => {
    let num = parseInt(document.getElementById("numc2").value);
    alert(`Es par: ${Boolean(!(num % 2))}`);
}
