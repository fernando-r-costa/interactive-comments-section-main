let dados = "";

let requestUrl =  'script/data.json';
let request = new XMLHttpRequest();
request.open('GET', requestUrl);
request.responseType = 'json';
request.send();
request.onload = function() {
    dados = request.response;
    console.log(dados);
}
