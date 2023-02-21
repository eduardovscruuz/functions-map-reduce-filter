//   Escreva um programa onde, você chame uma função enviando um número (aceitar somente valores 
//    entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.
function tabuada(num){

    if(num>=1 && num<=10){
        for(let i = 1; i<=10; i++){
            console.log(`${num} X ${i} é igual = ${num * i}` )
        }
    }
    else{
        console.log("Número Inválido")
    }
}

tabuada(4)
tabuada(11)
tabuada(10)