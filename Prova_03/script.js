let nomes = []
while(true){
    let nome = prompt(`Digite um nome.
        Digite "Sair" para sair.`)

    if(nome.toLowerCase() == `sair`){
        break
    }

    nomes.push(nome)
}

for(nome in nomes){
    console.log(`${Number(nome)+1}: ${nomes[nome]}`);
    
}

for(nome of nomes){
    console.log(`Bem-vindo(a), ${nome}`);
    
}