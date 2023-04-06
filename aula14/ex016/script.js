function contar(){
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar'
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p<=0){
            window.alert('Passo inválido! Considerando passo = 1')
            p = 1
        }
        if(i<f){
        for(var c = i; c <= f; c+=p){
            //Contagem crescente
            res.innerHTML += `${c} \u{1F449}`
        }
        } else {
            //Contagem decrescente
            for(var c = i; c>=f; c-=p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

    
}