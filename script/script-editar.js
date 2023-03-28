let score = "";
let elementoPai = "";
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

function apagar() {
    textoPergModal = "Apagar comentário";
    textoTextoModal = "Tem certeza que deseja excluir este comentário? Isso não poderá ser desfeito";
    textoBotao1 = "Cancelar";
    textoBotao2 = "Apagar";
    textoBotao3 = "";
    textoBotao4 = "";
    montaModal();
}