let textoPergModal = "";
let textoTextoModal = "";
let textoBotao1 = "";
let textoBotao2 = "";
let textoBotao3 = "";
let textoBotao4 = "";

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

    section.before(modal);
    modal.appendChild(modalConteudo);
    modalConteudo.appendChild(perguntaModal);
    modalConteudo.appendChild(botao1);
    modalConteudo.appendChild(textoModal);

    if (textoBotao2 == "Apagar") {
        let botao2 = document.createElement("button");
        botao2.setAttribute("id", "botao2");
        botao2.innerText = textoBotao2
        modalConteudo.appendChild(botao2);
        botao2.setAttribute("onclick", "elementoPai.remove(); fechaModal();");
    } else if (textoBotao2 != "") {
        let botao2 = document.createElement("button");
        botao2.setAttribute("id", "botao1");
        botao2.innerText = textoBotao2
        modalConteudo.appendChild(botao2);
        botao2.setAttribute("onclick", "dados.currentUser = dados.users[1]; fechaModal(); mostraComentarios(dados);");
    }
    if (textoBotao3 != "") {
        let botao3 = document.createElement("button");
        botao3.setAttribute("id", "botao1");
        botao3.innerText = textoBotao3
        modalConteudo.appendChild(botao3);
        botao1.setAttribute("onclick", "dados.currentUser = dados.users[0]; fechaModal(); mostraComentarios(dados);");
        botao3.setAttribute("onclick", "dados.currentUser = dados.users[2]; fechaModal(); mostraComentarios(dados);");
    }
    if (textoBotao4 != "") {
        let botao4 = document.createElement("button");
        botao4.setAttribute("id", "botao1");
        botao4.innerText = textoBotao4
        modalConteudo.appendChild(botao4);
        botao4.setAttribute("onclick", "dados.currentUser = dados.users[3]; fechaModal(); mostraComentarios(dados);");
    }
}

function fechaModal() {
    const modal = document.querySelector(".modal");
    modal.remove();
}