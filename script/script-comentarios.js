// let texto = document.getElementById("texto");

function mostraComentarios(dados) {
    let comentarios = dados['comments'];

    for (var i = 0; i < comentarios.length; i++) {
        const comentario = document.createElement("div");
        const avalPos = document.createElement("div");
        const saldoAval = document.createElement("div");
        const avalNeg = document.createElement("div");
        const avatar = document.createElement("div");
        const nomeUsuario = document.createElement("div");
        const confirmaUsuario = document.createElement("div");
        const tempoPost = document.createElement("div");
        const apagar = document.createElement("div");
        const comandos = document.createElement("div");
        const texto = document.createElement("div");

        comentario.classList.add ("comentario");
        avalPos.classList.add ("aval-pos");
        saldoAval.classList.add ("saldo-aval");
        avalNeg.classList.add ("aval-neg");
        avatar.classList.add ("avatar");
        nomeUsuario.classList.add ("nome-usuario");
        confirmaUsuario.classList.add ("confirma-usuario");
        tempoPost.classList.add ("tempo-post");
        apagar.classList.add ("delete");
        comandos.classList.add ("comandos");
        texto.classList.add ("texto");

        avalPos.innerHTML = "<img src='./images/icon-plus.svg'>";
        saldoAval.innerText = dados.comments[i].score;
        avalNeg.innerHTML = "<img src='./images/icon-minus.svg'>";
        avatar.innerHTML = dados.comments[i].user.image.png;
        nomeUsuario.innerText = dados.comments[i].user.username;
        confirmaUsuario.innerText = "você";
        tempoPost.innerText = dados.comments[i].createdAt;
        apagar.innerText = "Apagar";
        comandos.innerHTML = "<img src='./images/icon-reply.svg'>Resposta";
        texto.innerText = comments[i].content;

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

    }
}

// const novoTexto = document.createTextNode("dados.comments[0].content");
// novoComentario.appendChild(novoTexto);
// const currentDiv = document.getElementById("comentario");
// document.body.(novoComentario, currentDiv);

// let comentario = document.createElement('comentario');
// let texto = document.createElement('texto.innerText = dados.comments[0].content;

// mostraComentarios(dados);