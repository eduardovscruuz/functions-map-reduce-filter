// A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, 
// coletando dados sobre o salário e número de filhos. A prefeitura deseja saber: 
// - média do salário da população; 
// - média do número de filhos; 
// - maior salário; - 
// O final da leitura de dados se dará com a entrada de um salário negativo. 
// - Faça isso usando uma função!

const populacao = 
[
    {   
        nome: 'Eduardo',
        idade: 18,
        salario: 1200,
        filhos: 2
    },
    {   
        nome: 'João',
        idade: 22,
        salario: 1350,
        filhos: 1
    },
    {   
        nome: 'Gabriely',
        idade: 27,
        salario: 2200,
        filhos: 3
    },
    {   
        nome: 'Mateus',
        idade: 17,
        salario: -154,
        filhos: 0
    },
] 

function media(pessoas){

    let mediaSalarial = 0
    let mediaCriancas = 0
    let maiorSalario = 0

    for(let i = 0; i < pessoas.length; i++){
        
        if(pessoas[i].salario>maiorSalario){
            maiorSalario = pessoas[i].salario
        }

        if(pessoas[i].salario>0){
            mediaCriancas += pessoas[i].filhos
            mediaSalarial += pessoas[i].salario
        }
        else{
            console.log(`O maior salário é ${maiorSalario}`)
            console.log(`A média salarial é ${(mediaSalarial / i).toFixed(0)}`)
            console.log(`A média de filhos é ${(mediaCriancas / i).toFixed(0)}`)
        }
    }

}

media(populacao)