var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");

function criptografar(){
    var texto = textInput.value;

    var resultCripto = texto.replace(/e/g, "nter").replace(/i/g, "imes").replace(/a/g,"treb").replace(/o/g, "ai").replace(/u/g,"ober");

    document.getElementById('output').innerHTML = '<textarea readonly id="output-text">' + resultCripto +
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar(){
    var texto = textInput.value;

    var resultDescripto = texto.replace(/nter/g,"e").replace(/imes/g,"i").replace(/treb/g,"a").replace(/ai/g,"o").replace(/ober/g,"u");

    document.getElementById('output').innerHTML = '<textarea readonly id="output-text">' + resultDescripto + 
    '</textarea>' + '<button class= "btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar(){
    var textCop = document.getElementById('output-text');

    textCop.select();
    document.execCommand('copy');
    alert("texto copiado");
}