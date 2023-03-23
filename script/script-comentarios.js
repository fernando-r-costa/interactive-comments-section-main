let main = document.querySelector("main");

let comentario = "";

let classHtml = ['aval-pos', 'saldo-aval', 'aval-neg', 'avatar', 'nome-usuario', 'confirma-usuario', 'tempo-post', 'delete', 'comandos', 'texto'];

let classJs = ['avalPos', 'saldoAval', 'avalNeg', 'avatar', 'nomeUsuario', 'confirmaUsuario', 'tempoPost', 'apagar', 'comandos', 'texto'];

function montaComentario() {
    
    comentario = document.createElement("div");
    comentario.classList.add("comentario");
    main.appendChild(comentario);
    for (var h = 0; h < classJs.length; h++) {
        classJs[h] = document.createElement("div");
        classJs[h].classList.add(`${classHtml[h]}`);
        comentario.appendChild(classJs[h]);
        console.log(comentario);
        console.log(classJs[h]);
    }    
    
    
    // let classe = "";
    // classJs.forEach(myFunction);
        
    // function myFunction(classJs) {
    // }
    
    // avalPos = document.createElement("div");
    // avalPos.classList.add("aval-pos");
    // comentario.appendChild(avalPos);

    // saldoAval = document.createElement("div");
    // saldoAval.classList.add("saldo-aval");
    // comentario.appendChild(saldoAval);

    // avalNeg = document.createElement("div");
    // avalNeg.classList.add("aval-neg");
    // comentario.appendChild(avalNeg);

    // avatar = document.createElement("div");
    // avatar.classList.add("avatar");
    // comentario.appendChild(avatar);

    // nomeUsuario = document.createElement("div");
    // nomeUsuario.classList.add("nome-usuario");
    // comentario.appendChild(nomeUsuario);

    // confirmaUsuario = document.createElement("div");
    // confirmaUsuario.classList.add("confirma-usuario");
    // comentario.appendChild(confirmaUsuario);

    // tempoPost = document.createElement("div");
    // tempoPost.classList.add("tempo-post");
    // comentario.appendChild(tempoPost);

    // apagar = document.createElement("div");
    // apagar.classList.add("delete");
    // comentario.appendChild(apagar);

    // comandos = document.createElement("div");
    // comandos.classList.add("comandos");
    // comentario.appendChild(comandos);

    // texto = document.createElement("div");
    // texto.classList.add("texto");
    // comentario.appendChild(texto);
    
    
    // comandos.setAttribute("id", "comandos");
    
    document.querySelector(".aval-pos").innerHTML = "<img src='./images/icon-plus.svg'>";
    document.querySelector(".aval-neg").innerHTML = "<img src='./images/icon-minus.svg'>";
    document.querySelector(".confirma-usuario").innerText = "você";
    apagar.innerText = "Apagar";
    document.querySelector(".comandos").innerHTML = "<img src='./images/icon-reply.svg'>Resposta";
    
    
}


function mostraComentarios(dados) {
    for (var i = 0; i < dados.comments.length; i++) {
        
        montaComentario();
        
        document.querySelector(".comentario").classList.add("comentario");
        document.querySelector(".saldo-aval").innerText = dados.comments[i].score;
        document.querySelector(".avatar").innerHTML = `<img src="./images/avatars/image-${dados.comments[i].user.username}.png">`;
        document.querySelector(".nome-usuario").innerText = dados.comments[i].user.username;
        document.querySelector(".tempo-post").innerText = dados.comments[i].createdAt;
        document.querySelector(".texto").innerText = dados.comments[i].content;


        for (var j = 0; j < dados.comments[i].replies.length; j++) {
            montaComentario();

            comentario.classList.remove("comentario");
            comentario.classList.add("resposta");
            document.querySelector(".saldo-aval").innerText = dados.comments[i].replies[j].score;
            document.querySelector(".avatar").innerHTML = `<img src="./images/avatars/image-${dados.comments[i].replies[j].user.username}.png">`;
            document.querySelector(".nome-usuario").innerText = dados.comments[i].replies[j].user.username;
            document.querySelector(".tempo-post").innerText = dados.comments[i].replies[j].createdAt;
            document.querySelector(".texto").innerText = dados.comments[i].replies[j].content;
        }
    }
}

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
    novoTexto.innerHTML = "<textarea placeholder='Adicione um comentário...'></textarea>";
    button.innerHTML = "<button id='button'>Enviar</button>";

    novoComentario.appendChild(novoAvatar);
    novoComentario.appendChild(novoTexto);
    novoComentario.appendChild(button);

    main.appendChild(novoComentario);
}

function mostraModal() {
    document.getElementById("modal").style.display = "block";
}

function fechaModal() {
    document.getElementById("modal").style.display = "none";
}