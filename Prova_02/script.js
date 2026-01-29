let registrado
while(true) {
    registrado = Number(prompt(`Você é registrado?
        1 - Sim
        2 - Não
    `))
    switch(registrado){
        case 1:
            alert("Seja bem vindo!")
            break
        case 2:
            alert("Complete o registro!")
            break
        default:
            alert("Opção invalida!")
            break
    }
    if(registrado == 1 || registrado == 2){
        break
    }
}

let idade = prompt(`Qual a sua idade?`)

if(idade >= 18 && registrado == 1){
    alert("Acesso completo!!!")
}else{
    alert("Acesso limitado!!!")
}