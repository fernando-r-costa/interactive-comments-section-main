let anexo = section;

function mostraNovoComentario() {

    let novoComentario = document.createElement("div");
    let novoAvatar = document.createElement("div");
    let novoTexto = document.createElement("div");
    let button = document.createElement("div");

    novoComentario.classList.add("novo-comentario");
    novoAvatar.classList.add("avatar-novo");
    novoTexto.classList.add("texto-novo");
    button.classList.add("button");
    button.setAttribute("onclick", "textoBotao1 = ''; textoBotao2 = ''; textoBotao3 = ''; textoBotao4 = '';insereNovoComentario()");

    novoAvatar.innerHTML = `<img src="./images/avatars/image-${dados.currentUser.username}.png">`;
    novoTexto.innerHTML = "<textarea id='texto-novo' placeholder='Adicione um comentário...'></textarea>";
    button.innerHTML = "<button id='button'>Enviar</button>";

    novoComentario.appendChild(novoAvatar);
    novoComentario.appendChild(novoTexto);
    novoComentario.appendChild(button);

    anexo.after(novoComentario);
    
    if(anexo == section) {
        window.scrollBy({
           top: window.innerHeight,
           left: 0,
           behavior: "smooth",
        });
    } else { 
        window.scrollBy({
            top: 100,
            left: 0,
            behavior: "smooth",
         });
    }
}

function insereNovoComentario() {
    textoNovoComentario = document.getElementById("texto-novo");

    if (textoNovoComentario.value == "") {
        textoPergModal = "Comentário vazio!";
        textoTextoModal = "Não é possível adicionar comentário vazio.";
        textoBotao1 = "Voltar";
        textoBotao2 = "";
        montaModal()
    } else {
        let novoComment = new Comments(dados.comments.length + 1, `${textoNovoComentario.value}`, `Hoje`, `1`, dados.currentUser, [])

        dados.comments[dados.comments.length] = novoComment

        let comentario = document.createElement("div");
        let avalPos = document.createElement("div");
        let saldoAval = document.createElement("div");
        let avalNeg = document.createElement("div");
        let avatar = document.createElement("div");
        let nomeUsuario = document.createElement("div");
        let confirmaUsuario = document.createElement("div");
        let tempoPost = document.createElement("div");
        let apagar = document.createElement("div");
        let comandos = document.createElement("div");
        let texto = document.createElement("div");

        if(anexo == section) {
            comentario.classList.add("comentario");
        } else {
            comentario.classList.add("resposta");
        }
        avalPos.classList.add("aval-pos");
        avalPos.setAttribute("onclick", "score = nextSibling; alteraScore(+1)");
        saldoAval.classList.add("saldo-aval");
        avalNeg.classList.add("aval-neg");
        avalNeg.setAttribute("onclick", "score = previousSibling; alteraScore(-1)");
        avatar.classList.add("avatar");
        nomeUsuario.classList.add("nome-usuario");
        confirmaUsuario.classList.add("confirma-usuario");
        tempoPost.classList.add("tempo-post");
        apagar.classList.add("delete");
        comandos.classList.add("comandos");
        comandos.setAttribute("onclick", "elementoVizinho = nextSibling; editarComentario()");
        texto.classList.add("texto");

        avalPos.innerHTML = "<img src='./images/icon-plus.svg'>";
        saldoAval.innerText = novoComment.score;
        avalNeg.innerHTML = "<img src='./images/icon-minus.svg'>";
        avatar.innerHTML = `<img src="./images/avatars/image-${novoComment.user.username}.png">`;
        nomeUsuario.innerText = novoComment.user.username;
        confirmaUsuario.innerHTML = "<p>você</p>";
        tempoPost.innerText = novoComment.createdAt;
        apagar.innerText = "Apagar";
        apagar.setAttribute("onclick", "elementoPai = parentNode; apagar()")
        comandos.innerHTML = "<img src='./images/icon-edit.svg'>Editar";
        texto.innerText = novoComment.content;

        comentario.appendChild(avalPos);
        comentario.appendChild(saldoAval);
        comentario.appendChild(avalNeg);
        comentario.appendChild(avatar);
        comentario.appendChild(nomeUsuario);
        comentario.appendChild(confirmaUsuario);
        comentario.appendChild(tempoPost);
        comentario.appendChild(apagar);
        comentario.appendChild(comandos);
        comentario.appendChild(texto);

        if(anexo == section) {
            anexo.appendChild(comentario);
        } else {
            anexo.after(comentario);
        }

        textoNovoComentario.value = "";

        fechaNovoComentario();
    }
}

function fechaNovoComentario() {
    const novoComentario = document.querySelector(".novo-comentario");
    novoComentario.remove();
}