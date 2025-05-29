let idade = 50
if (idade >= 18){
    console.log("Maior idade")
}
else{
    console.log("Menor idade")
}

-----------------------------------------

let horas = 15
if (horas >= 6 && horas <= 12){
    console.log("bom dia")
}
else if (horas > 12 && horas <= 18){
    console.log("Boa tarde")
}
else{
    console.log("boa noite")
}

-----------------------------------------

let respostaCorreta = 0
let respostaIncorreta = 0

// Pergunta 1
console.log("Qual o maior planeta do sistema solar?")
console.log("A - Terra")
console.log("B - Marte")
console.log("C - Júpiter")
console.log("D - Saturno")
let pergunta1 = prompt("Digite a resposta: ")
if (pergunta1 == "C" || pergunta1 == "Júpiter") {
    console.log("\nAlternativa correta")
    respostaCorreta++
} else {
    console.log("Resposta Errada")
    respostaIncorreta++
}

// Pergunta 2
console.log("\nQuem pintou a Mona Lisa?")
console.log("A - Michelangelo")
console.log("B - Leonardo da Vinci")
console.log("C - Van Gogh")
console.log("D - Picasso")
let pergunta2 = prompt("Digite a resposta: ")
if (pergunta2 == "B" || pergunta2 == "Leonardo da Vinci") {
    console.log("Alternativa correta")
    respostaCorreta++
} else {
    console.log("Resposta Errada")
    respostaIncorreta++
}

// Pergunta 3
console.log("\nQual é o metal líquido à temperatura ambiente?")
console.log("A - Ferro")
console.log("B - Mercúrio")
console.log("C - Alumínio")
console.log("D - Chumbo")
let pergunta3 = prompt("Digite a resposta: ")
if (pergunta3 == "B" || pergunta3 == "Mercúrio") {
    console.log("Alternativa correta")
    respostaCorreta++
} else {
    console.log("Resposta Errada")
    respostaIncorreta++
}

// Pergunta 4
console.log("\nQual animal é conhecido por sua capacidade de mudar de cor?")
console.log("A - Polvo")
console.log("B - Camaleão")
console.log("C - Cobra")
console.log("D - Lagarto")
let pergunta4 = prompt("Digite a resposta: ")
if (pergunta4 == "B" || pergunta4 == "Camaleão") {
    console.log("Alternativa correta")
    respostaCorreta++
} else {
    console.log("Resposta Errada")
    respostaIncorreta++
}

// Pergunta 5
console.log("\nQuem foi o primeiro homem a pisar na Lua?")
console.log("A - Yuri Gagarin")
console.log("B - Buzz Aldrin")
console.log("C - Neil Armstrong")
console.log("D - Alan Shepard")
let pergunta5 = prompt("Digite a resposta: ")
if (pergunta5 == "C" || pergunta5 == "Neil Armstrong") {
    console.log("Alternativa correta")
    respostaCorreta++
} else {
    console.log("Resposta Errada")
    respostaIncorreta++
}

// Pergunta 6
console.log("\nQuantos ossos tem o corpo humano adulto?")
console.log("A - 206")
console.log("B - 256")
console.log("C - 180")
console.log("D - 300")
let pergunta6 = prompt("Digite a resposta: ")
if (pergunta6 == "A" || pergunta6 == "206") {
    console.log("Alternativa correta")
    respostaCorreta++
} else {
    console.log("Resposta Errada")
    respostaIncorreta++
}

// Pergunta 7
console.log("\nQual é o país com maior população do mundo?")
console.log("A - Índia")
console.log("B - China")
console.log("C - Estados Unidos")
console.log("D - Rússia")
let pergunta7 = prompt("Digite a resposta: ")
if (pergunta7 == "A" || pergunta7 == "Índia") {
    console.log("Alternativa correta")
    respostaCorreta++
} else {
    console.log("Resposta Errada")
    respostaIncorreta++
}

// Pergunta 8
console.log("\nQual é o símbolo químico do ouro?")
console.log("A - Ag")
console.log("B - Au")
console.log("C - Go")
console.log("D - Fe")
let pergunta8 = prompt("Digite a resposta: ")
if (pergunta8 == "B" || pergunta8 == "Au") {
    console.log("Alternativa correta")
    respostaCorreta++
} else {
    console.log("Resposta Errada")
    respostaIncorreta++
}

// Pergunta 9
console.log("\nQual é o maior oceano da Terra?")
console.log("A - Atlântico")
console.log("B - Índico")
console.log("C - Pacífico")
console.log("D - Ártico")
let pergunta9 = prompt("Digite a resposta: ")
if (pergunta9 == "C" || pergunta9 == "Pacífico") {
    console.log("Alternativa correta")
    respostaCorreta++
} else {
    console.log("Resposta Errada")
    respostaIncorreta++
}

// Pergunta 10
console.log("\nQual destes filmes é da franquia Harry Potter?")
console.log("A - O Senhor dos Anéis")
console.log("B - As Crônicas de Nárnia")
console.log("C - A Pedra Filosofal")
console.log("D - Star Wars")
let pergunta10 = prompt("Digite a resposta: ")
if (pergunta10 == "C" || pergunta10 == "A Pedra Filosofal") {
    console.log("Alternativa correta")
    respostaCorreta++
} else {
    console.log("Resposta Errada")
    respostaIncorreta++
}

// Pergunta 11
console.log("\nQual é a série mais assistida da Netflix até 2023?")
console.log("A - Stranger Things")
console.log("B - Round 6")
console.log("C - La Casa de Papel")
console.log("D - Bridgerton")
let pergunta11 = prompt("Digite a resposta: ")
if (pergunta11 == "B" || pergunta11 == "Round 6") {
    console.log("Alternativa correta")
    respostaCorreta++
} else {
    console.log("Resposta Errada")
    respostaIncorreta++
}

// Resultado final
console.log("\nResumo final")
console.log("Respostas Corretas: " + respostaCorreta)
console.log("Respostas Incorretas: " + respostaIncorreta)

------------------------------------------------------------------------------------

let idade = 56;
let categoria; // categoria não definida pois ela será definida conforme a idade

if (idade < 12) { // se a idade for menor que 12
    categoria = "criança"; // a categoria dela será criança
}
else if (idade >= 12 && idade <= 18) { // se a idade for maior ou igual a 12 e menor ou igual a 18
    categoria = "adolescente"; // a sua categoria será adolescente
}
else if (idade > 18 && idade < 60) { // se a idade for maior que 18 e menor que sessenta
    categoria = "adulta"; // sua categoria será adulta
}
else { // se não for nenhuma das idades citadas acima, que é no caso maiores de 60
    categoria = "idosa"; // a sua categoria será idosa
}

console.log("Idade final: " + idade); 
// então o console irá mostrar o texto "Idade final" e em seguida irá mostrar a idade que foi definida na primeira linha

console.log("Categoria: " + categoria); 
// depois o console irá mostrar o texto "Categoria:" e em seguida irá mostrar a categoria que foi definida conforme a idade da pessoa

----------------------------------------------------------------------------------------------------------------------------------------------

let idade = 35;

if (idade < 16) { // se a idade for menor que 16
    console.log("Não vota."); // o console irá mostrar que ele não vota
}
else if ((idade >= 16 && idade < 18) || idade > 70) { 
    // se a idade for 16 e menor que 18 e igual ou maior que 70
    console.log("Voto facultativo."); // o console irá mostrar que o voto é facultativo
}
else { 
    // se a idade não for nenhuma das citadas acima, que é no caso entre 18 e 70
    console.log("Voto obrigatório."); // o console irá mostrar que o voto é obrigatório
}

