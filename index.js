function fuja(){
    var botaonao = document.getElementById("nao")

    var largurajanela = window.innerWidth;
    var alturajanela = window.innerHeight;

    var maxX = largurajanela - botaonao.offsetWidth;
    var maxY = alturajanela - botaonao.offsetHeight;

    var aleX = Math.floor(Math.random() * maxX);
    var aleY = Math.floor(Math.random() * maxY);

    botaonao.style.left = aleX + "px";
    botaonao.style.top = aleY + "px";
}

