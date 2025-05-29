let respostaCorreta = 0
let respostaIncorreta = 0

//Pergunta1
console.log("Qual o maior planeta do sistema solar?: ")
console.log("A - Terra")
console.log("B - Marte")
console.log("C - Júpiter")
console.log("D - Saturno")

let pergunta1 = prompt("Digite a resposta: ") 
switch (true){
    case pergunta1 == "C" || pergunta1 == "Júpiter":
        console.log ("Resposta Correta")
        respostaCorreta ++
    break;
    default:
    console.log("Resposta Incorreta")
    respostaIncorreta ++
}

//Pergunta 2

console.log("\n Quem pintou a Mona Lisa?: ")
console.log("A - Michelangelo")
console.log("B - Leonardo da Vinci")
console.log("C - Van Gogh")
console.log("D - Picasso")

let pergunta2 = prompt("Digite a resposta: ") 
switch(true){
    case pergunta2 == "B" || pergunta2 == "Leonardo da Vinci":
        console.log ("Resposta Correta")
        respostaCorreta ++
        break;
        default:
        console.log("resposta Incorreta")
        respostaIncorreta ++
}

// Pergunta 3

console.log("\n Qual é o metal líquido à temperatura ambiente?")
console.log("A - Ferro")
console.log("B - Mercúrio")
console.log("C - Alumínio")
console.log("D - Chumbo")

let pergunta3 = prompt("Digite a resposta: ")
switch(true){
case pergunta3 == "A" || pergunta3 == "2025":
    console.log("Alternativa Correta")
    respostaCorreta ++
    break;
    default:
    console.log("Resposta Incorreta")
    respostaIncorreta ++
}

// Pergunta 4

console.log("\n Qual animal é conhecido por sua capacidade de mudar de cor?")
console.log("A - Polvo")
console.log("B - Camaleão")
console.log("C - Cobra")
console.log("D - Lagarto")

let pergunta4 = prompt("Digite a resposta: ")
switch(true){
case pergunta4 == "B" || pergunta4 == "Camaleão":
    console.log("Alternativa Correta")
    respostaCorreta ++
    break;
    default:
    console.log("alternativa Incorreta")
    respostaIncorreta ++
}

//Pergunta5
console.log("\n Quem foi o primeiro homem a pisar na Lua?")
console.log("A - Yuri Gagarin")
console.log("B - Buzz Aldrin")
console.log("C - Neil Armstrong")
console.log("D - Alan Shepard")
let pergunta5 = prompt("Digite a resposta: ")
switch(true){
case pergunta5== "C" || pergunta5 == "Neil Armstrong":
    console.log("Alternativa Correta")
    respostaCorreta ++
    break;
    default:
    console.log("Resposta Incorreta")
    respostaIncorreta ++
}

//Pergunta6
console.log("\n Quantos ossos tem o corpo humano adulto?")
console.log("A - 206")
console.log("B - 256")
console.log("C - 180")
console.log("D - 300")
let pergunta6 = prompt("Digite a resposta: ") 
switch(true){
case pergunta6 == "A" || pergunta6 == "206":
    console.log("Alternativa Correta")
    respostaCorreta ++
    break;
    default:
    console.log("Resposta Incorreta")
    respostaIncorreta ++
}


//Pergunta7
console.log("\n Qual é o país com maior população do mundo?")
console.log("A - Índia ")
console.log("B - China")
console.log("C - Estados Unidos")
console.log("D - Rússia")
let pergunta7 = prompt("Digite a resposta: ")
switch(true){
case pergunta7 == "A" || pergunta7 == "Índia":
    console.log("Alternativa Correta")
    respostaCorreta ++
    break;
    default:
    console.log("Resposta Incorreta")
    respostaIncorreta ++
}

//Pergunta8
console.log("\n Qual é o símbolo químico do ouro?")
console.log("A - Ag")
console.log("B - Au ")
console.log("C - Go")
console.log("D - Fe")
let pergunta8 = prompt("Digite a resposta: ")
switch(true){
case pergunta8 == "B" || pergunta8 == "Au":
    console.log("Alternativa Correta")
    respostaCorreta ++
    break;
    default:
    console.log("Resposta Incorreta")
    respostaIncorreta ++
}

//Pergunta9
console.log("\n Qual é o maior oceano da Terra?")
console.log("A - Atlântico")
console.log("B - Índico")
console.log("C - Pacífico ")
console.log("D - Ártico")
let pergunta9 = prompt("Digite a resposta: ")
switch(true){
case pergunta9 == "C" || pergunta9 == "Pacífico":
    console.log("Alternativa Correta")
    respostaCorreta ++
    break;
    default:
    console.log("Resposta Incorreta")
    respostaIncorreta ++
}


//Pergunta10
console.log("\n Qual destes filmes é da franquia Harry Potter?")
console.log("A - O Senhor dos Anéis")
console.log("B - As Crônicas de Nárnia")
console.log("C - A Pedra Filosofal")
console.log("D - Star Wars")
let pergunta10 = prompt("Digite a resposta: ")
switch(true){
case pergunta10 == "C" || pergunta10 == "A Pedra Filosofal":
    console.log("Alternativa Correta")
    respostaCorreta ++
    break;
    default:
    console.log("Resposta Incorreta")
    respostaIncorreta ++
}

//Pergunta11
console.log("\n Qual é a série mais assistida da Netflix até 2023?")
console.log("A - stranger Things")
console.log("B - Round 6 ")
console.log("C - La Casa de Papel")
console.log("D - Bridgerton")
let pergunta11 = prompt("Digite a resposta: ")
switch(true){
case pergunta11 == "B" || pergunta11 == "Round 6":
    console.log("Alternativa Correta")
    respostaCorreta ++
    break;
    default:
    console.log("Resposta Incorreta")
    respostaIncorreta ++
}

// Exibir o resultado

console.log("\n Resumo final")
console.log("Respostas Corretas: " + respostaCorreta)
console.log("Respostas Incorretas: " + respostaIncorreta)

----------------------------------------------------------------------------------------------------------------

//Exercício 1
let idioma = prompt("Qual o seu idioma? (Português, Inglês ou Espanhol?): ")
switch(idioma){
    case "Português": 
        console.log("Bom dia!")
        break;
    case "Inglês":
        console.log("Good Morning")
        break;
    case "Espanhol":
        console.log("Buenos dias!")
        break;
        default:
        console.log("Esse idioma não está no nosso sistema")
}

//Exercício 2
let dia = Number(prompt("\nDigite o número do dia da semana: "))
switch(dia){
    case 1:
        console.log("Hoje é domingo")
        break;
    case 2:
        console.log("Hoje é segunda-feira")
        break;
    case 3:
        console.log("Hoje é terça-feira")
        break;
    case 4:
        console.log("Hoje é quarta-feira")
        break;
    case 5:
        console.log ("Hoje é quinta-feira")
        break;
    case 6:
        console.log("Hoje é sexta-feira")
        break;
    case 7:
        console.log("Hoje é sábado")
        break;
        default:
        console.log("este não é um dia da semana")
}

//Exercício 3
let transporte = Number(prompt("\nDigite o número do transporte (1-5): "))
switch(transporte){
    case 1:
        console.log("o transporte é carro")
        break;
    case 2:
        console.log("o transporte é moto")
        break;
    case 3:
        console.log("o transporte é ônibus")
        break;
    case 4:
        console.log("o transporte é trem")
        break;
    case 5:
        console.log("o transporte é bicicleta")
        break;
        default:
        console.log("este transporte não está registrado")
}

//Exercício 4
let urgencia = Number(prompt("\nQual o nível de urgência? (1-3): "))
switch(urgencia){
    case 1:
        console.log("urgência baixa")
        break;
    case 2:
        console.log("urgência média")
        break;
    case 3:
        console.log("urgência alta")
        break;
        default:
        console.log("Este não é um nível de urgência")
}

//Exercício 5
let veiculos = prompt("\ndigite o modelo do veículo: SUV, Compacto ou Caminhão: ")
switch(veiculos){
    case "SUV":
        console.log("Jeep Compass, Hyundai Creta, Volkswagen T-Cross")
        break;
    case "Compacto":
        console.log("Hyundai HB20, Fiat Argo, Chevrolet Onix.")
        break;
    case "Caminhão":
        console.log("Truck, Bitruck, Cavalo Mecânico")
        break;
        default:
        console.log("este não é um modelo registrado")
}

//Exerício 6
let estacionamento = "\n15 minutos"
switch(estacionamento){
    case "15 minutos":
        console.log("Você irá pagar: R$: 4,00")
        break;
    case "30 minutos":
        console.log("Você irá pagar: R$: 6,00")
        break;
    case "1 hora":
        console.log("Você irá pagar: R$: 10,00")
        break;
}

//Exercício 7
let jogo = Number(prompt("\nQual o nível de dificuldade? (1-3): "))
switch(jogo){
    case 1:
        console.log("dificuldade baixa")
        break;
    case 2:
        console.log("dificuldade média")
        break;
    case 3:
        console.log("dificuldade alta")
        break;
        default:
        console.log("Este não é um nível de dificuldade")
}

//Exercício 8
let servicos = prompt("\nQual o nível do seu plano? (Essencial, Plus, Premium ou Vip?): ")
switch(servicos){
    case "Essencial":
        console.log("acesso à musculação e aulas coletivas básicas")
        break;
    case "Plus":
        console.log("inclui musculação, todas as aulas e avaliação física")
        break;
    case "Premium":
        console.log("tudo incluso + personal trainer 1x/semana")
        break;
    case "Vip":
        console.log(" acesso ilimitado + aulas de yoga 1x/dia + personal exclusivo + mimos extras (toalha, nutrição, etc.")
        break;
        default:
        console.log("este não é um plano fornecido por nós")
}

//Exercício 9
let ingresso = prompt("\nQual é a sua categoria?: (Estudante ou Inteira): ")
switch(ingresso){
    case "Estudante":
        console.log("Apresente sua carteirinha de estudante e você pagará meia entrada!!")
        break;
    case "Inteira":
        console.log("Você pagará o valor total do ingresso!")
        break;
        default:
        console.log("esta não é uma categoria")
}

//Exerício 10
console.log("\nQual a sua idade ou a do seu filho(a):\nA- 4-12 anos\nB- 13-17 anos\nC- 18-59 anos\nD- 60 anos ou mais")
let FaixaEtaria = (prompt("Digite a resposta: "))
switch(FaixaEtaria){
    case "A":
        console.log ("Dificuldade baixa\nLúdico & Motor: Brincadeiras ativas, circuitos leves, dança, jogos com bola, Intensidade: baixa a moderada, Duração: 30 a 45 min")
        break;
    case "B":
        console.log("Dificuldade Média/alta\ntreino intenso + técnicas avançadas, sempre com acompanhamento para evitar lesões")
        break;
    case "C":
        console.log("Treinos combinados (força + cardio), aumento progressivo de carga e  intensos para quem busca hipertrofia. Corrida, provas. Periodização, técnicas avançadas, suplementação (se necessário)")
        break;
    case "D":
        console.log("Ativação Leve, caminhada, alongamento, exercícios com elástico ou peso leve. Foco em articulações, respiração e equilíbrio. Dança, natação, pilates, pequenas corridas")
        break;
        default:
        console.log("não é indicado atividades físicas para esta faixa etária!")
}

//Exercício 11
let intrumentos = prompt("\nQual seu gênero musical favorito?: ")
switch(intrumentos){
    case "Rock":
        console.log ("Guitarra Elétrica – base rítmica e solos\nBaixo Elétrico – sustentação harmônica e groove\nBateria – marcação forte e energética")
        break;
    case "Forró":
        console.log("Sanfona / Acordeon – principal melódico e harmônico\nZabumba – percussão grave que marca o ritmo\nTriângulo – marcação aguda e característica")
        break;
    case "Clássica":
        console.log("Violino / Viola / Violoncelo / Contrabaixo – cordas fundamentais\nPiano de cauda – base harmônica e solista\nFlauta / Clarinete / Oboé / Fagote – madeiras")
        break;
        default:
        console.log("não temos esse instrumento registrado")
}

//Exercício 12
let cursos = prompt("\nqual sua área? (front-end, back-end, mobile)? ")
switch(cursos){
    case "front-end":
        console.log("HTML e CSS do Zero ao Avançado\nEstrutura e estilização de páginas web, boas práticas e responsividade\nJavaScript Moderno (ES6+)\nManipulação do DOM, lógica de programação, interações dinâmicas\nReact.js para Iniciantes e Avançados\nComponentes, estados, hooks, roteamento e integração com APIs")
        break;
    case "back-end":
        console.log("Banco de Dados SQL e NoSQL (MySQL / MongoDB) - Modelagem, consultas, relacionamentos e performance\nAutenticação e Autorização com JWT e OAut - Segurança de rotas e controle de acesso\nAPIs REST e GraphQL - Criação, consumo e documentação de APIs modernas")
        break;
    case "mobile":
        console.log("Introdução ao Desenvolvimento Mobile com React Native - Aplicativos híbridos com JavaScript\nFlutter do Zero ao Avançado - Interface declarativa, navegação e integração com APIs\nDesenvolvimento Nativo com Kotlin (Android) - Estrutura de apps, componentes e ciclo de vida")
        break;
        default:
        console.log("não temos esse tipo de curso")
}

//Exercício 13
let idade = parseInt(prompt("\nDigite a idade do atleta:"));
let categoria;

switch (true) {
  case (idade >= 0 && idade <= 5):
    categoria = "Baby - Estímulo Lúdico";
    break;
  case (idade >= 6 && idade <= 9):
    categoria = "Iniciação Esportiva";
    break;
  case (idade >= 10 && idade <= 13):
    categoria = "Fundamentos Técnicos";
    break;
  case (idade >= 14 && idade <= 17):
    categoria = "Desenvolvimento Competitivo";
    break;
  case (idade >= 18 && idade <= 25):
    categoria = "Alto Rendimento";
    break;
  case (idade >= 26 && idade <= 35):
    categoria = "Performance Avançada";
    break;
  case (idade >= 36 && idade <= 49):
    categoria = "Adulto Recreativo / Master";
    break;
  case (idade >= 50 && idade <= 64):
    categoria = "Sênior - Condicionamento e Lazer";
    break;
  case (idade >= 65):
    categoria = "Veterano - Manutenção da Saúde";
    break;
  default:
    categoria = "Idade inválida";
}

console.log("Nível de habilidade recomendado: " + categoria);

//Exercício 14
let categoria2 = prompt("\nDigite a categoria do desafio (básico, intermediário, avançado)")
let descricao;
switch (categoria2) {
  case "básico":
    descricao = "Operações simples: soma, subtração, multiplicação e divisão com números pequenos.";
    break;
  case "intermediário":
    descricao = "Problemas com frações, porcentagens, expressões e lógica matemática.";
    break;
  case "avançado":
    descricao = "Equações do 1º e 2º grau, sistemas lineares, funções e raciocínio lógico avançado.";
    break;
  default:
    descricao = "Categoria inválida. Escolha entre: básico, intermediário ou avançado.";
}

console.log("Descrição do desafio: " + descricao);

-----------------------------------------------------------------------------------------------------------------

console.log("Qual das opções você deseja escolher?:\n1- CMD Windows\n2- Terminal Linux")
let opcoes = Number(prompt("digite a sua opção: "))
if (opcoes === 1){
    console.log("\nVocê escolheu o CMD Windows!\nQuais comandos deseja aprender?:-\n1- mkdir\n2- dir\n3- cd e cd..\n4- del\n5- cls\n6- echo\n7- copy\n8- move\n9- rmdir\n10- exit")
    let escolha = Number(prompt("Comandos: "))
    switch(escolha){
        case 1:
            console.log("O comando cria um diretório\nExemplo: (mkdir fotos) você criou um diretório chamado foto")
            break;
        case 2:
            console.log("O comando lista os diretórios dentro de um diretório\nExemplo: estou dentro de um diretório chamado fotos, e dentro desse diretório tenho outro diretório chamado fotos antigas, se eu digitar dir dentro do diretório fotos, irá aparecer a pasta fotos antigas")
            break;
        case 3:
            console.log("O comando cd e em seguida o nome de um pasta faz com que você acesse essa pasta, ja o cd.. faz você voltar uma pasta para trás\nExemplos: (cd documentos - você entrou no diretório documentos)")
            break;
        case 4:
            console.log("O comando 'del' é utilizado para apagar um arquivo\nExemplo: (del arquivo.txt)")
            break;
        case 5:
            console.log("O comando 'cls' faz com que limpe todas as linhas do cmd")
            break;
        case 6:
            console.log("O comando 'echo' faz com que crie um arquivo\nExemplo: (echo > nome do arquivo)")
            break;
        case 7:
            console.log("O comando 'copy'é utilizado para copiar um arquivo ou diretório\nExemplo(copy arquivo.txt e em seguida o caminho do diretório para onde você queira copiar)")
            break;
        case 8:
            console.log("O comando 'move' é utilizado para mover um arquivo ou diretório\nExemplo (move arquivo.txt e em seguida o caminho do diretório para onde você quer mover)")
            break;
        case 9:
            console.log("O comando 'rmdir' é utilizado para apagar um diretório Exemplo: (rmdir fotos)")
            break;
        case 10:
            console.log("O comando 'exit' faz fechar a janela do Prompt de Comando ou encerrar a execução de um script.")
            break;
            default:
            console.log("este comando não está registrado no nosso sistema")
    }
}

else if (opcoes === 2 ){
    console.log("\nVocê escolheu Terminal Linux!\nQual dos comandos você deseja aprender?: \n1- mkdir\n2- ls\n3- cd e cd ..\n4- rm\n5- clear\n6- cp\n7- mv\n8- cat\n9- echo")
    let escolha2 = Number(prompt("Comando: "))
    switch (escolha2){
        case 1:
            console.log("O comando 'mkdir' cria um diretório\nExemplo: (mkdir fotos) você criou um diretório chamado foto")
            break;
        case 2:
            console.log("O comando 'ls' lista os arquivos e ou diretórios dentro de um diretório\nExemplo: estou dentro de um diretório chamado fotos, e dentro desse diretório tenho outro diretório chamado fotos antigas, se eu digitar ls dentro do diretório fotos, irá aparecer a pasta fotos antigas")
            break;
        case 3:
            console.log("O comando 'cd' e em seguida o nome de um pasta faz com que você acesse essa pasta, ja o cd.. faz você voltar uma pasta para trás\nExemplos: (cd documentos - você entrou no diretório documentos\ncd .. você voltou uma pasta atrás)")
            break;
        case 4:
            console.log("O comando 'rm' faz com que você remova um arquivo\nExemplo: (rm anotações.txt) você removeu o arquivo anotações.txt")
            break;
        case 5:
            console.log("O comando 'clear' faz com que limpe todas as linhas do terminal")
            break;
        case 6:
            console.log("O comando 'cp' é utilizado para copiar um arquivo ou diretório\nExemplo(cp arquivo.txt e em seguida o caminho do diretório para onde você queira copiar)")
            break;
        case 7:
            console.log("O comando 'mv' pode ser utilizado tanto para mover arquivos ou diretórios quanto para renomear o nome dos mesmos\nExemplos: mv arquivo.txt anotações.txt, eu renomeei de arquivo.ttx para anotações.txt\nmv arquivo.txt e em seguida o caminho para onde você queira mover")
            break;
        case 8:
            console.log("O comando 'cat' serve para mostrar o conteúdo dentro de um arquivo .txt\nExemplos: Dentro do arquivo.txt tenho um texto escrito 'guilherme123', se eu digitar cat arquivo.txt, irá aparecer 'guilherme123'")
            break;
        case 9:
            console.log("O comando 'echo' faz com que crie um arquivo\nExemplo: (echo > nome do arquivo)")
    }
}

else{
    console.log("Esta não é uma opção válida")
}

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



