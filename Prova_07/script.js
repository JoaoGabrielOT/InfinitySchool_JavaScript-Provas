let lista_nomes = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo", "Fernanda", "Gabriel", "Helena", "Igor", "Julia", "Kevin", "Laura", "Abraham linkom"]
let loop = true

var addNome = function () {
    let nome = String(prompt("Digite o nome a ser adicionado: "))
    lista_nomes.push(nome)
    console.clear()
}

var filtrarNome = function () {
    let condicao = String(prompt("Digite a inicial a ser procurada: ").trim().toLowerCase().slice(0, 1))
    let nomes_filtrados = lista_nomes.filter(nome => nome[0].toLowerCase() === condicao)
    if (nomes_filtrados.length > 0) {
        mostrarLista(nomes_filtrados)
    } else {
        console.log("Não ha nomes com essa inicial na lista!!");

    }
}

var buscarNomeEspecifico = function () {
    let nomeFinder = String(prompt("Digite o nome a ser procurado: "))
    console.clear()
    if (lista_nomes.find(nome => nome.toLowerCase() === nomeFinder.toLowerCase())) {
        console.log("Nome encontrado na lista!");
        return true
    }

    console.log("Nome NÃO encontrado na lista!");
    return false
}

const transformarNomes = function () {
    lista_nomes = lista_nomes.map((nome) => nome.toUpperCase())
    console.clear()
    console.log("Nomes tranformados com sucesso!");
}

const verificarCondicoes = function () {
    console.clear()
    console.log(`Condições satisfeitas: ${lista_nomes.every((nome) => nome.length >= 3)}`)
}

const mostrarLista = function (lista = lista_nomes) {
    titulo()

    if (lista.length === 0) {
        console.log("Não ha nada na lista para mostrar.");
    } else {

        if (lista === lista_nomes) {
            console.log("Lista atual:");
        } else {
            console.log("Lista filtrada:");
        }

        for (let i in lista) {
            console.log(`${i}: ${lista[i]}`);

        }
    }
}

const metodos = function (callback) {
    console.clear()
    mostrarLista()
    callback()
    mostrarLista()
}

const titulo = function () {
    console.log(`
        ${"=".repeat(50)}
        Lista de Nomes. A melhor lista de nomes do mundo.
        ${"=".repeat(50)}
        `);
}

titulo()

while (loop) {

    let op = Number(prompt(`
        Escolha sua operação:

        1 - Adicionar Nome.
        2 - Filtrar Nomes.
        3 - Buscar Nome especifico.
        4 - Transformar Nomes.
        5 - Verificar condições.
        6 - Sair
        `));

    switch (op) {
        case 1:
            metodos(addNome)
            break

        case 2:
            console.clear()
            filtrarNome()
            break

        case 3:
            metodos(buscarNomeEspecifico)
            break

        case 4:
            metodos(transformarNomes)
            break

        case 5:
            metodos(verificarCondicoes)
            break

        case 6:
            loop = false
            break

        default:
            console.clear()
            console.log("Opção invalida!!!");
            break


    }
}
