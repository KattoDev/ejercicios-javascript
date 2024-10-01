const calcButton = document.getElementById("calcular");

calcButton.onclick = () => {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);

    if(!isNaN(n1) && !isNaN(n2)){
        alert(`El resultado es: ${n1+n2}`)
    }
    else{
        alert("porfavor coloca un número valido")
    }
}