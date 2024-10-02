const header = "../../src/components/header.html";
const footer = "../../src/components/footer.html";
const imports = "../../src/components/imports.html"

function loadHeader() {
    fetch(header)
        .then((response) => {
            return (response = response.text());
        })
        .then((data) => {
            document.querySelector("header").innerHTML = data;
        })
        .catch((error) =>
            console.error(`No se pudo cargar el componente: ${error}`)
        );
}

function loadFooter() {
    fetch(footer)
        .then((response) => {
            return (response = response.text());
        })
        .then((data) => {
            document.querySelector("footer").innerHTML = data;
        })
        .catch((error) =>
            console.error(`No se pudo cargar el componente: ${error}`)
        );
}

function loadimports() {
    fetch(imports)
        .then((response) => {
            return (response = response.text());
        })
        .then((data) => {
            document.querySelector("head").innerHTML += data;
        })
        .catch((error) =>
            console.error(`No se pudo cargar el componente: ${error}`)
        );
}

loadHeader();
loadFooter();
loadimports();