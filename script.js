var nome_pessoa, genero_pessoa, idade_pessoa;

nome_pessoa = "Bernardo";
genero_pessoa = "Masculino";
idade_pessoa = 15;

console.log(" Olá mundo. Meu nome é " + nome_pessoa + " e tenho " + idade_pessoa + " anos de idade. " + "Meu gênero é " + genero_pessoa);

var num1, num2, soma, subtracao, multiplicacao, divisao;

num1 = 2
num2 = 3
soma = num1+num2;
subtracao = num1-num2;
multiplicacao = num1*num2;
divisao = num1/num2;

console.log(" A soma é " + soma)
console.log(" A subtração é " + subtracao)
console.log(" A multiplicação é " + multiplicacao)
console.log(" A divisão é " + divisao)

var idade;

idade = 15;

if (idade >= 18){ 
    idade = "maior de idade";
}
else{
    idade = "menor de idade";
}
console.log("A pessoa é " + idade);