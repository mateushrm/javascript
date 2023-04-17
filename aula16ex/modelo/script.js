let num = document.getElementById('num')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inList(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumber(num.value) && !inList(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else { 
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function resultados(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let c in valores){
            if(valores[c] > maior){
                maior = valores[c]
            }
            if(valores[c] < menor){
                menor = valores[c]
            }
            soma += valores[c]
        }

        media = soma/total

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${total} número cadastrados</p>.`
        res.innerHTML += `<p>O maior valor é ${maior}.</p>`
        res.innerHTML += `<p> O menor valor é ${menor}.</p>`
        res.innerHTML += `<p> A soma dos valores é ${soma}.</p>`
        res.innerHTML += `<p> A média dos valores é ${media}.</p>`
    }
}
