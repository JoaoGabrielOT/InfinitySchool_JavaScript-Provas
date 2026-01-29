let itens = []

function mostrarItens() {
    if (itens.length === 0) {
        console.log("Não ha nada na lista para mostrar.");
    } else {
        for (const [index, item] of itens.entries()) {
            console.log(`${index + 1}: ${item}`);
        }
    }
}

while (true) {
    let op = Number(prompt(`
        Escolha o que deseja fazer:
        1 - Adicionar item a lista.
        2 - Remover item da lista.
        3 - Mostrar lista.
        4 - Alterar item da lista.
    `))

    switch (op) {
        case 1:
            console.clear();
            let item = prompt("Digite o nome do item: ")
            itens.push(item)
            break

        case 2:
            console.clear()
            mostrarItens()
            if (itens.length !== 0) {
                let remove = Number(prompt(`Digite o numero do item que deseja remover: `))
                itens.splice(remove - 1, 1)
                console.clear()
                console.log("Item removido.");
                console.log("Lista atual:");
                mostrarItens()
            }
            break

        case 3:
            console.clear()
            mostrarItens()
            break

        case 4:
            console.clear()
            mostrarItens()

            if (itens.length !== 0) {
                let indice = Number(prompt("Escolha o numero do item que deseja alterar: "))
                let novoValor = prompt("Digite o nome do item: ")
                itens[indice - 1] = novoValor
                console.clear()
                console.log("Item alterado.");
                console.log("Lista atual:");
                mostrarItens()
            }
            break

        default:
            console.clear();
            console.log("Opção invalida.");


    }

}