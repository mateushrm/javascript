function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora<12) {
        img.src=('imagens/fotomanha.jpg')
        document.body.style.background = '#F6AF8D'
    } else if ( hora >= 12 && hora < 18){
        img.src= ('imagens/fototarde.jpg')
        document.body.style.background = '#F3A44C'
    } else {
        img.src=('imagens/fotonoite.png')
        document.body.style.background = '#112F60'
    }
}