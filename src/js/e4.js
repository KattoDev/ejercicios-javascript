const button = document.getElementById("comparar1");

button.onclick = () => {
    let num = parseInt(document.getElementById("numc1").value);
    let isPair = Boolean(!(num % 2))

    if (!isPair){
        alert("el número es impar")
    }
    else{
        alert("el número es par")
    }

}
