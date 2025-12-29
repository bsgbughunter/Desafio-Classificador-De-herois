//CLASSIFICADOR DE HEROI

const readline = require('readline');

const terminal = readline.createInterface({
    input:process.stdin,
    output: process.stdout
});

const bancoDeDadosUsuarios = [];

console.log("------CLASSIFICADOR DE HERÓIS------")
console.log("---------CADASTRO DE HERÓI---------")

terminal.question("Digite o nome do herói: ", (nome) => {

    console.log(`Herói Cadastrado com sucesso! Bem vindo ${nome}!`);


    terminal.question("Digite a quantidade de experiência do herói: ", (respostaXp) => {

        console.log("XP Cadastrado com sucesso!");

        const experiencia = parseInt(respostaXp);
    

        let nivel = " ";

        switch (true) {
            case (experiencia <= 1000):
                nivel = "Ferro";
                break;

            case (experiencia >= 1001 && experiencia <= 2000):
                nivel = "Bronze";
                break;

            case (experiencia >= 2001 && experiencia <= 5000):
                nivel = "Prata";
                break;

            case (experiencia >= 5001 && experiencia <= 7000):
                nivel = "Ouro";
                break;

            case (experiencia >= 7001 && experiencia <= 8000):
                nivel = "Platina";
                break;

            case (experiencia >= 8001 && experiencia <= 9000):
                nivel = "Ascendente";
                break;

            case (experiencia >= 9001 && experiencia <= 10000):
                nivel = "Imortal";
                break;

            case (experiencia >= 10001):
                nivel = "Radiante";
                break;
            
            default:
                nivel = "Desconhecido";
        }


        console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);

   
        terminal.close();
    });

});
