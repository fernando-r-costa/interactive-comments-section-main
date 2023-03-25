function mostraNovoComentario() {

    let novoComentario = document.createElement("div");
    let novoAvatar = document.createElement("div");
    let novoTexto = document.createElement("div");
    let button = document.createElement("div");

    novoComentario.classList.add("novo-comentario");
    novoAvatar.classList.add("avatar-novo");
    novoTexto.classList.add("texto-novo");
    button.classList.add("button");
    
    novoAvatar.innerHTML = `<img src="./images/avatars/image-${dados.currentUser.username}.png">`;
    novoTexto.innerHTML = "<textarea id='texto-novo' placeholder='Adicione um comentário...'></textarea>";
    button.innerHTML = "<button id='button'>Enviar</button>";
    
    novoComentario.appendChild(novoAvatar);
    novoComentario.appendChild(novoTexto);
    novoComentario.appendChild(button);
    
    main.appendChild(novoComentario);
    
    function liberaButton() {
        document.querySelector("#button").addEventListener('click', function () { insereNovoComentario()})
    };
    liberaButton();
}

function insereNovoComentario() {
    textoNovoComentario = document.getElementById("texto-novo");

    let novoComment = new Comments(dados.comments.length + 1, `${textoNovoComentario.value}`, `1 dia`, 0, dados.currentUser, [])
    
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
    
    comentario.classList.add("comentario");
    avalPos.classList.add("aval-pos");
    saldoAval.classList.add("saldo-aval");
    avalNeg.classList.add("aval-neg");
    avatar.classList.add("avatar");
    nomeUsuario.classList.add("nome-usuario");
    confirmaUsuario.classList.add("confirma-usuario");
    tempoPost.classList.add("tempo-post");
    apagar.classList.add("delete");
    comandos.classList.add("comandos");
    texto.classList.add("texto");
    
    avalPos.innerHTML = "<img src='./images/icon-plus.svg'>";
    saldoAval.innerText = novoComment.score;
    avalNeg.innerHTML = "<img src='./images/icon-minus.svg'>";
    avatar.innerHTML = `<img src="./images/avatars/image-${novoComment.user.username}.png">`;
    nomeUsuario.innerText = novoComment.user.username;
    confirmaUsuario.innerText = "você";
    tempoPost.innerText = novoComment.createdAt;
    apagar.innerText = "Apagar";
    comandos.innerHTML = "<img src='./images/icon-reply.svg'>Resposta";
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
    
    main.insertBefore(comentario, main.childNodes[main.childNodes.length - 1]);
}
