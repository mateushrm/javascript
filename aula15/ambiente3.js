let num = [1,3,5,2,4,6]
num.sort()

for(let pos in num){
    console.log(`O valor na posição ${pos} é ${num[pos]}`)
}
let pos = num.indexOf(8)

if( pos == -1){
    console.log('O valor não foi encontrado')
} else{
    console.log(`O valor está na posição ${pos}`)
}
