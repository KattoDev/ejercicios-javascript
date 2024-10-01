const buttonConvert = document.getElementById("convertir");

buttonConvert.onclick = () => {
    let celsius = parseInt(document.getElementById("celsius").value)

    let fahrenheit = ((celsius * (9/5)) +32);

    alert(`${celsius}°C en fahrenheit son: ${fahrenheit}°F`)
}