let n1 = Number(prompt("Digite o primeiro numero."))
let n2 = Number(prompt("Digite o segundo numero."))
operacao = prompt("Escolha qual operação você deseja: '+' | '-' | '*' | '/'")

switch(operacao){
    case "+":
        n1 += n2
        console.log(`Resultado: ${n1}`);
        break
        
    case "-":
        n1 -= n2
        console.log(`Resultado: ${n1}`);
        break
    case "*":
        n1 *= n2
        console.log(`Resultado: ${n1}`);
        break
    case "/":
        if(n2 == 0){
            console.log("Erro, não é possivel dividir por 0");
            break
        }else{
            n1 /= n2
            console.log(`Resultado: ${n1}`);
            break
        }
    default:
        console.log("Opção invalida.");
        break
}