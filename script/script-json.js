let dados = "";

let requestUrl =  'script/data.json';
let request = new XMLHttpRequest();
request.open('GET', requestUrl);
request.responseType = 'json';
request.send();
request.onload = function() {
    dados = request.response;
    console.log(dados);
    mostraComentarios(dados);
    // mostraNovoComentario();
}

class Comments {
    constructor(id, content, createdAt, score, user, replies){
        this.id = id
        this.content = content
        this.createdAt = createdAt
        this.score = score
        this.user = user
        this.replies = replies
    }
}
