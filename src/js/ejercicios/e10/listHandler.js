const template = document.getElementById("product-template");
const container = document.getElementById("product-container");

const buttonAdd = document.getElementById("addNewProduct");

buttonAdd.onclick = () => {
    const clone = template.content.cloneNode(true);
    container.appendChild(clone);
}