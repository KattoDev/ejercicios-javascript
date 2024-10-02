const wavebutton = document.getElementById("saludar");

wavebutton.onclick = () => {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;

    alert(`Hola ${name} ${surname}`)
}