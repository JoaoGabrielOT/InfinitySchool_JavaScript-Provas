let tarefas = []
let loop = true

function mostrarTarefas() {
    if (tarefas.length === 0) {
        console.log("Não ha nada na lista para mostrar.");
    } else {
        for (let i in tarefas) {
            console.log(`${i}: ${tarefas[i]}`);

        }
    }
}

while (loop) {
    let op = String(prompt(`
        Escolha o que deseja fazer:
        1 - Adicionar tarefa.
        2 - Remover tarefa.
        3 - Listar tarefas.
        4 - Concluir tarefas.
        q - Sair
    `))

    switch (op) {
        case "1":
            console.clear()
            let tarefa = String(prompt(`Digite a tarefa que deseja adicionar: `))
            tarefas.push(tarefa)
            break
            
        case "2":
            console.clear()
            mostrarTarefas()
            if (tarefas.length !== 0) {
                let remover = Number(prompt(`Digite o numero da tarefa que deseja remover: `))
                tarefas.splice(remover, 1)
                console.clear()
                console.log("Tarefa removida.");
                console.log("Lista atual:");
                mostrarTarefas()
            }
            break
            
        case "3":
            console.clear()
            mostrarTarefas()
            break
            
        case "4":
            console.clear()
            mostrarTarefas()
            if(tarefas.length !== 0){
                let concluir = Number(prompt(`Digite o numero da tarefa que deseja concluir: `))
                
                if (concluir >= 0 && concluir < tarefas.length){
                    if (!tarefas[concluir].startsWith("✅")) {
                        tarefas[concluir] = `✅ ${tarefas[concluir]}`
                        console.log("Tarefa concluida com sucesso!");
                        
                    } else {
                        console.log("Tarefa ja esta concluida!");
                        
                    }
                } else {
                    console.log("Número invalido! Essa tarefa não existe.");
                    
                }
            }
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