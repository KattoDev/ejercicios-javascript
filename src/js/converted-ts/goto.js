"use strict";
const pages = [
    "../../src/pages/ejercicio1.html",
    "../../src/pages/ejercicio2.html",
    "../../src/pages/ejercicio3.html",
    "../../src/pages/ejercicio4.html",
    "../../src/pages/ejercicio5.html",
    "../../src/pages/ejercicio6.html",
    "../../src/pages/ejercicio7.html",
    "../../src/pages/ejercicio8.html",
    "../../src/pages/ejercicio9.html",
    "../../src/pages/ejercicio10.html",
    "../../src/pages/ejercicio11.html",
    "../../src/pages/ejercicio12.html",
    "../../src/pages/ejercicio13.html",
    "../../src/pages/ejercicio14.html",
    "../../src/pages/ejercicio15.html",
    "../../src/pages/ejercicio16.html",
    "../../src/pages/ejercicio17.html",
    "../../src/pages/ejercicio18.html",
    "../../src/pages/ejercicio19.html",
    "../../src/pages/ejercicio20.html",
    "../../src/pages/ejercicio21.html",
    "../../src/pages/ejercicio22.html",
    "../../src/pages/ejercicio23.html",
    "../../src/pages/ejercicio24.html",
    "../../src/pages/ejercicio25.html",
    "../../src/pages/ejercicio26.html",
    "../../src/pages/ejercicio27.html",
    "../../src/pages/ejercicio28.html",
    "../../src/pages/ejercicio29.html",
    "../../src/pages/ejercicio30.html",
    "../../src/pages/ejercicio31.html",
    "../../src/pages/ejercicio32.html",
    "../../src/pages/ejercicio33.html",
    "../../src/pages/ejercicio34.html",
    "../../src/pages/ejercicio35.html",
];
/**
 * Executes a redirection to the exersice
 * @param exersice the number of the exersice
 */
function gotoPage(exersice) {
    window.location.href = pages[exersice - 1];
}
