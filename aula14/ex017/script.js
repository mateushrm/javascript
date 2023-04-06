function calcular(){
    var num = document.getElementById('num')
    var res = document.getElementById('res')
    if(num.value.length == 0){
        alert('[ERRO] Por favor, insira um número!')
    }
    var n = Number(num.value)
    var cont = 0 
    var mult = 0
    for(cont=0; cont<=10; cont++){
        mult = n*cont
        res.innerHTML += `<li>${n}x${cont} = ${mult}</li>`
    }

}