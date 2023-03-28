let dados = "";

let requestUrl = 'script/data.json';
let request = new XMLHttpRequest();
request.open('GET', requestUrl);
request.responseType = 'json';
request.send();
request.onload = function () {
    dados = request.response;
    console.log(dados);
    textoPergModal = "Usuário";
    textoTextoModal = "Escolha um usuário:";
    textoBotao1 = dados.users[0].username;
    textoBotao2 = dados.users[1].username;
    textoBotao3 = dados.users[2].username;
    textoBotao4 = dados.users[3].username;
    montaModal();
}
class Comments {
    constructor(id, content, createdAt, score, user, replies) {
        this.id = id
        this.content = content
        this.createdAt = createdAt
        this.score = score
        this.user = user
        this.replies = replies
    }
}


