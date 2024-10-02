const buttonArray = document.getElementById("createArray");
buttonArray.onclick = () => {
    let start = parseInt(document.getElementById("numStart").value);
    let limit = parseInt(document.getElementById("numLimit").value);
    let array = [];
    for (let index = start + 1; index < limit; index++) array.push(index);
    if (array.length === 0)
        alert("no se puede crear el array con esos números");
    else alert(`el array que resulta de los dos numeros es: \n{${array}}`);
};
