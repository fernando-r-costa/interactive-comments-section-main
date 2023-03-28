let section = document.querySelector("section");

function mostraComentarios(dados) {
    let linkNovoComentario = document.createElement("div");
    linkNovoComentario.classList.add("link-novo-comentario");
    linkNovoComentario.setAttribute("onclick", "anexo = section; mostraNovoComentario()");
    linkNovoComentario.innerHTML = `<img src=${dados.currentUser.image.png} width = 5%><br>Inserir novo comentário`;
    section.appendChild(linkNovoComentario);


    for (var i = 0; i < dados.comments.length; i++) {
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
        comandos.setAttribute("onclick", "anexo = parentNode; mostraNovoComentario()");
        texto.classList.add("texto");

        avalPos.innerHTML = "<img src='./images/icon-plus.svg'>";
        saldoAval.innerText = dados.comments[i].score;
        avalNeg.innerHTML = "<img src='./images/icon-minus.svg'>";
        avatar.innerHTML = `<img src="./images/avatars/image-${dados.comments[i].user.username}.png">`;
        nomeUsuario.innerText = dados.comments[i].user.username;
        tempoPost.innerText = dados.comments[i].createdAt;
        if (dados.comments[i].user.username == dados.currentUser.username) {
            confirmaUsuario.innerHTML = "<p>você</p>";
            apagar.innerHTML = "<p>Apagar</p>";
            apagar.setAttribute("onclick", "elementoPai = parentNode; apagar()")
            comandos.innerHTML = "<img src='./images/icon-edit.svg'>Editar";
            comandos.setAttribute("onclick", "elementoVizinho = nextSibling; editarComentario()");
        } else {
            comandos.innerHTML = "<img src='./images/icon-reply.svg'>Resposta";
        }
        texto.innerText = dados.comments[i].content;

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

        section.appendChild(comentario);

        for (var j = 0; j < dados.comments[i].replies.length; j++) {
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

            comentario.classList.add("resposta");
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
            apagar.setAttribute("onclick", "elementoPai = parentNode; apagar()")
            comandos.classList.add("comandos");
            comandos.setAttribute("onclick", "anexo = parentNode; mostraNovoComentario()");
            texto.classList.add("texto");

            avalPos.innerHTML = "<img src='./images/icon-plus.svg'>";
            saldoAval.innerText = dados.comments[i].replies[j].score;
            avalNeg.innerHTML = "<img src='./images/icon-minus.svg'>";
            avatar.innerHTML = `<img src="./images/avatars/image-${dados.comments[i].replies[j].user.username}.png">`;
            nomeUsuario.innerText = dados.comments[i].replies[j].user.username;
            if (dados.comments[i].replies[j].user.username == dados.currentUser.username) {
                confirmaUsuario.innerHTML = "<p>você</p>";
                apagar.innerHTML = "<p>Apagar</p>";
                comandos.innerHTML = "<img src='./images/icon-edit.svg'>Editar";
                comandos.setAttribute("onclick", "elementoVizinho = nextSibling; editarComentario()");
            } else {
                comandos.innerHTML = "<img src='./images/icon-reply.svg'>Resposta";
            }
            tempoPost.innerText = dados.comments[i].replies[j].createdAt;
            texto.innerText = dados.comments[i].replies[j].content;

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

            section.appendChild(comentario);
        }
    }
}

