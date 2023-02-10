// ==UserScript==
// @name         Fontes CAD 01
// @namespace    http://www.caixa.gov.br
// @version      0.2.5
// @description  try to take over the world!
// @author       RafaTI SMAS, Talis TI SMAS
// @match        *://*.caixa.gov.br/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gov.br
// @grant        none
// @updateURL    https://t.ly/uGIX
// @downloadURL  https://t.ly/uGIX
// ==/UserScript==
(function() {
    // Variável 'classes' com os objetos que receberam a fonte em PRETO.
var classes = [
  'body', 'p', 'input', '.TabLabel',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
];
var style = document.createElement('style');
style.innerHTML = classes.join(', ') + ' { color: black !important; }';
document.head.appendChild(style);
})();
/* //  https://www.invertexto.com/cadfont01
// https://raw.githubusercontent.com/Grafikt/CADFonte1/main/FonteCAD1.js
// Utima atualização 06/02/2023 - 13:42
// Utima atualização 08/02/2023 - 10:50 - Teste atualização 03
// Utima atualização 10/02/2023 - 08:20 - Teste atualização 04 */
