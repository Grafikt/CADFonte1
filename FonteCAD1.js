// ==UserScript==
// @name         Fontes CAD 01
// @namespace    http://www.caixa.gov.br
// @version      0.1
// @description  try to take over the world!
// @author       RafaTI SMAS, Talis TI SMAS
// @match        *://*.caixa.gov.br/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gov.br
// @grant        none
// @updateURL    https://www.invertexto.com/cadfont01
// @downloadURL  https://www.invertexto.com/cadfont01
// ==/UserScript==


(function() {
    // Variável 'classes' com os objetos que receberam a fonte em PRETO.
var classes = [
  'body',
  'p',
  'input',
  '.TabLabel',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
];
var style = document.createElement('style');
style.innerHTML = classes.join(', ') + ' { color: black !important; }';
document.head.appendChild(style);
})();