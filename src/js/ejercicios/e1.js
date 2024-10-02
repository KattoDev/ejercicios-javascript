import { e1 } from "../objects/misc.js";

document.getElementById('execute').onclick = () =>{

    console.clear();

    const explanation = [
        "Vamos a trabajar un poco con la consola para ir amigandonos con ella ya que será nuestra mejor amiga de ahora en más.",
        "1. Declara una variable llamada nombre en tu consola y asignale tu nombre.",
        "2. Declara una variable llamada apellido y asignale como valor tu apellido.",
        "3. Muestra por consola las variables nombre y apellido.",
    ];
    
    alert("por favor abre la consola de desarrollo")
    explanation.forEach((element) => {
        console.log(element);
    });
    console.log(`Hola ${e1.name} ${e1.surname}`);
}
