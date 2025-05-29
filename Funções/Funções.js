function adicao(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0){
        return 'Não é possivel dividir por 0!'
    }
    return a / b;
}

let numero1 = Number(prompt("Digite o primeiro número: "));
let numero2 = Number(prompt("Digite o segundo número: "));

let operacao = prompt("Digite a operação desejada (adicao, subtracao, multiplicacao, divisao): ");
let resultado;

switch (operacao) {
    case "adicao":
        resultado = adicao(numero1, numero2);
        break;
    case "subtracao":
        resultado = subtracao(numero1, numero2);
        break;
    case "multiplicacao":
        resultado = multiplicacao(numero1, numero2);
        break;
    case "divisao":
        resultado = divisao(numero1, numero2);
        break;
    default:
        resultado = "Operação inválida";
        break;
}

console.log("Resultado:", resultado);

-----------------------------------------------------------------------------------------------------------

let usuario1 = "admin";
let senha1 = "1";

let usuario2 = "guilherme";
let senha2 = "12";

let usuario3 = "julio";
let senha3 = "123";

let usuario4 = "fernando";
let senha4 = "1234";

let usuario5 = "gabriel";
let senha5 = "12345";

let usuario6 = "maria";
let senha6 = "123456";

let usuario7 = "ana";
let senha7 = "1234567";

let usuario8 = "natalia";
let senha8 = "12345678";

let usuario9 = "livia";
let senha9 = "123456789";

let usuario10 = "joao";
let senha10 = "1234567890";

function login(usuarioDigitado, senhaDigitada) {
  if (usuarioDigitado === usuario1 && senhaDigitada === senha1) {
    console.log("Login bem-sucedido! Bem-vindo, " + usuarioDigitado + "!");
  } else if (usuarioDigitado === usuario2 && senhaDigitada === senha2) {
    console.log("Login bem-sucedido! Bem-vindo, " + usuarioDigitado + "!");
  } else if (usuarioDigitado === usuario3 && senhaDigitada === senha3) {
    console.log("Login bem-sucedido! Bem-vindo, " + usuarioDigitado + "!");
  } else if (usuarioDigitado === usuario4 && senhaDigitada === senha4) {
    console.log("Login bem-sucedido! Bem-vindo, " + usuarioDigitado + "!");
  } else if (usuarioDigitado === usuario5 && senhaDigitada === senha5) {
    console.log("Login bem-sucedido! Bem-vindo, " + usuarioDigitado + "!");
  } else if (usuarioDigitado === usuario6 && senhaDigitada === senha6) {
    console.log("Login bem-sucedido! Bem-vindo, " + usuarioDigitado + "!");
  } else if (usuarioDigitado === usuario7 && senhaDigitada === senha7) {
    console.log("Login bem-sucedido! Bem-vindo, " + usuarioDigitado + "!");
  } else if (usuarioDigitado === usuario8 && senhaDigitada === senha8) {
    console.log("Login bem-sucedido! Bem-vindo, " + usuarioDigitado + "!");
  } else if (usuarioDigitado === usuario9 && senhaDigitada === senha9) {
    console.log("Login bem-sucedido! Bem-vindo, " + usuarioDigitado + "!");
  } else if (usuarioDigitado === usuario10 && senhaDigitada === senha10) {
    console.log("Login bem-sucedido! Bem-vindo, " + usuarioDigitado + "!");
  } else {
    console.log("Usuário ou senha incorretos.");
  }
}
let loginUsuario = prompt("Digite o nome de usuário: ");
let senhaUsuario = prompt("Digite a senha: ");
login(loginUsuario, senhaUsuario);


