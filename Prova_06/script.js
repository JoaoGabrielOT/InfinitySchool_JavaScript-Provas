let lista_nomes = []
let loop = true

var addTarefa = function () {
    let tarefa = String(prompt(`Digite a tarefa que deseja adicionar: `))
    lista_nomes.push(tarefa)
}

var removerTarefa = function () {
    if (lista_nomes.length !== 0) {
        let remover = Number(prompt(`Digite o numero da tarefa que deseja remover: `))
        lista_nomes.splice(remover, 1)
        console.log("Tarefa removida.");
    }
}

var atualizarTarefa = function () {
    if (lista_nomes.length !== 0) {
        let atualizar = Number(prompt(`Digite o numero da tarefa que deseja atualizar: `))
        let novoValor = String(prompt(`Digite o novo valor da tarefa: `))
        lista_nomes[atualizar] = novoValor
        console.log(`Valor atualizado!!!`);
    }
}

var concluirTarefa = function () {
    if (lista_nomes.length !== 0) {
        let concluir = Number(prompt(`Digite o numero da tarefa que deseja concluir: `))

        if (concluir >= 0 && concluir < lista_nomes.length) {
            if (!lista_nomes[concluir].startsWith("✅")) {
                lista_nomes[concluir] = `✅ ${lista_nomes[concluir]}`
                console.log("Tarefa concluida com sucesso!");

            } else {
                console.log("Tarefa ja esta concluida!");

            }
        } else {
            console.log("Número invalido! Essa tarefa não existe.");
        }
    }
}

const mostrarTarefas = () => {
    if (lista_nomes.length === 0) {
        console.log("Não ha nada na lista para mostrar.");
    } else {
        for (let i in lista_nomes) {
            console.log(`${i}: ${lista_nomes[i]}`);

        }
    }
}

function metodos(callback) {
    console.clear()
    mostrarLista()
    callback()
    console.clear()
    console.log("Lista atual:");
    mostrarLista()
}

while (loop) {
    let op = String(prompt(`
        Escolha o que deseja fazer:
        1 - Adicionar tarefa.
        2 - Remover tarefa.
        3 - Listar tarefas.
        4 - Atualizar tarefas.
        5 - Concluir tarefas.
        q - Sair
    `))

    switch (op) {
        case "1":
            metodos(addTarefa)
            break

        case "2":
            metodos(removerTarefa)
            break

        case "3":
            console.clear()
            mostrarLista()
            break

        case "4":
            metodos(atualizarTarefa)
            break

        case "5":
            metodos(concluirTarefa)
            break

        case "q":
            console.clear()
            loop = false
            break

        default:
            console.clear()
            console.log("Opção invalida");
            break

    }
}