const calcButton = document.getElementById("calcProm");

calcButton.onclick = () => {
    let n1 = parseInt(document.getElementById("number1").value);
    let n2 = parseInt(document.getElementById("number2").value);
    let n3 = parseInt(document.getElementById("number3").value);

    let prom = (n1 + n2 + n3) / 3;

    alert(`el promedio es: ${prom}`);
};
