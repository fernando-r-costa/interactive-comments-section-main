let main = document.querySelector("main");


function mostraComentarios(dados) {

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
        saldoAval.innerText = dados.comments[i].score;
        avalNeg.innerHTML = "<img src='./images/icon-minus.svg'>";
        avatar.innerHTML = `<img src="./images/avatars/image-${dados.comments[i].user.username}.png">`;
        nomeUsuario.innerText = dados.comments[i].user.username;
        confirmaUsuario.innerText = "você";
        tempoPost.innerText = dados.comments[i].createdAt;
        apagar.innerText = "Apagar";
        comandos.innerHTML = "<img src='./images/icon-reply.svg'>Resposta";
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

        main.appendChild(comentario);

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
            saldoAval.innerText = dados.comments[i].replies[j].score;
            avalNeg.innerHTML = "<img src='./images/icon-minus.svg'>";
            avatar.innerHTML = `<img src="./images/avatars/image-${dados.comments[i].replies[j].user.username}.png">`;
            nomeUsuario.innerText = dados.comments[i].replies[j].user.username;
            confirmaUsuario.innerText = "você";
            tempoPost.innerText = dados.comments[i].replies[j].createdAt;
            apagar.innerText = "Apagar";
            comandos.innerHTML = "<img src='./images/icon-reply.svg'>Resposta";
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

            main.appendChild(comentario);
        }

    }
}
