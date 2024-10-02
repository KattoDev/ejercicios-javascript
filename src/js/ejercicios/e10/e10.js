import "./listHandler.js";
import { todo } from "./todo.js";

document.getElementById("createTask").onclick = () => {
    todo.type = document.getElementById("type").value;
    todo.date = document.getElementById("date").value;

    const productRows = document.querySelectorAll(".product-row");

    productRows.forEach((row, index) => {
        todo.products[`product${index + 1}`] = {
            productName: row.querySelector(".productName").value,
            quantity: parseInt(row.querySelector(".quantity").value),
        };
    });
    todo.status = document.getElementById("status").value;

    let container = document.getElementById("task-list");

    alert("Se ha creado la tarea");

    function showTask() {
        let productlist = "";

        Object.values(todo.products).forEach((product) => {
            productlist += `<li><span>${product.productName}</span> 🛒 ${product.quantity}</li>`;
        });

        const card = `
            <div class="card" style="width: 18rem">
                <div class="card-body">
                    <h5 class="card-title" id="task-title">${todo.type}</h5>
                    <hr />
                    <div class="card-text">
                        <p><span>Dia:</span> ${todo.date}</p>
                        <hr />
                        <p>
                            <span>Productos:</span>
                        </p>
                        <ul>
                            ${productlist}
                        </ul>
                        <hr />
                        <p><span>Estado de la tarea:</span> ${todo.status}</p>
                        <hr />
                    </div>
                    <button class="btn btn-primary" id="notify">Notificar</button>
                </div>
            </div>`;
        return card;
    }

    document.getElementById("task-list").innerHTML += showTask();
};
