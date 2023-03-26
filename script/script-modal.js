let textoPergModal = "";
let textoTextoModal = "";
let textoBotao1 = "";
let textoBotao2 = "";

function montaModal() {

    let modal = document.createElement("div");
    let modalConteudo = document.createElement("div");
    let perguntaModal = document.createElement("p");
    let textoModal = document.createElement("p");
    let botao1 = document.createElement("button");

    modal.classList.add("modal");
    modalConteudo.classList.add("modal-conteudo");
    perguntaModal.classList.add("pergunta-modal");
    textoModal.classList.add("texto-modal");
    botao1.setAttribute("id", "botao1");
    botao1.setAttribute("onclick", "fechaModal()");

    perguntaModal.innerText = textoPergModal;
    textoModal.innerText = textoTextoModal;
    botao1.innerText = textoBotao1;

    main.before(modal);
    modal.appendChild(modalConteudo);
    modalConteudo.appendChild(perguntaModal);
    modalConteudo.appendChild(botao1);
    modalConteudo.appendChild(textoModal);

    if (textoBotao2 != 0) {
        let botao2 = document.createElement("button");
        botao2.setAttribute("id", "botao2");
        botao2.innerText = textoBotao2
        modalConteudo.appendChild(botao2);
    }
    abreModal();

}

function abreModal() {
    document.querySelector(".modal").style.display = "block";
}

function fechaModal() {
    document.querySelector(".modal").style.display = "none";
}