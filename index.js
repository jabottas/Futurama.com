var parametro = true
function funcaosobedesce() {
    if (parametro == true) {
        document.getElementById('link').href = '#rodape';
        document.getElementById('seta').style.transform = "rotate(0deg)";
        parametro = false
    } else {
        document.getElementById('link').href = '#astroworld';
        document.getElementById('seta').style.transform = "rotate(180deg)";
        parametro = true
    }
}
function funcaorandom() {
    document.getElementById('mensagembox').classList.toggle("animate");
}
/*
function funcaorandom() {
    destino = Math.floor(Math.random() * 10) + 1;
    if (destino == 0) {
        document.getElementById('mensagem').
    }
    if (destino == 1) {
        document.getElementById('mensagem').  
    }
    if (destino == 2) {
        document.getElementById('mensagem').  
    }
    if (destino == 3) {
        document.getElementById('mensagem').  
    }
    if (destino == 4) {
        document.getElementById('mensagem').  
    }
    if (destino == 5) {
        document.getElementById('mensagem').  
    }
    if (destino == 6) {
        document.getElementById('mensagem').  
    }
    if (destino == 7) {
        document.getElementById('mensagem').  
    }
    if (destino == 8) {
        document.getElementById('mensagem').  
    }
    if (destino == 9) {
        document.getElementById('mensagem').  
    }
    if (destino == 10) {
        document.getElementById('mensagem').  
    }
}
*/
