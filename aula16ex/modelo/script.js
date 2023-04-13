function adicionar(){
    let num = document.getElementById('num')
    let n = Number(num.value)
    let add = document.getElementById('add')
    if(n < 1 || n > 100){
        alert('Por favor, insira um valor de 1 a 100')
    } else {
        add.innerHTML += `Número ${n} adicionado <br>`
    }
    let nums = [n]
}
