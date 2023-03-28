let score = "";
let elementoVizinho = "";
let textoEditado = "";

function alteraScore(valor) {
    score.innerText = parseInt(score.innerText) + valor; 
}
function editarComentario() {
    elementoVizinho.innerHTML = `<textarea id='texto-novo'>${elementoVizinho.innerText}</textarea><button id='button' onclick='textoEditado = previousSibling; salvarComentario()'>Enviar</button>`
}

function salvarComentario() {
    elementoVizinho.innerHTML = textoEditado.value;

}