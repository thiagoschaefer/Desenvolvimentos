//Funções do app:
// incluir valor adicionado ao array e a lista "select"
//notíficar valor invalido (vazio ou fora da sugestão 0-100)
//notificar valor já encontrado na lista
//"valor # adicionado."
//ao clicar em finalizar: 
//"Ao todo # valores cadastrados"
//"O maior valor informado foi #"
//"O menor valor informado foi #"
//"Somando todos os valores, temos #"
//"A média dos valores digitados é de 3"
//Ao adicionar um valor novo, limpa o resultado e adiciona a lista/array
//Ao finalizar sem valores notificar; "Adicione valores antes de finalizar"
let num = document.querySelector("input#valor")
let lista = document.querySelector("select#lista")
let res = document.querySelector('div#desc')
let item = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else { 
        return false
    }
    
}
function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }
    
}
function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, item)) {
        item.push(Number(num.value))  
        let valor = document.createElement('option')
        valor.text = `Valor ${num.value} adicionado`
        lista.appendChild(valor)
        res.innerHTML = ''
    }else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}
function finalizar(){
    if(item.length == 0){
        window.alert('Sem dados para análise!')
    } else {
        //Como descobrir o maior/menor em um array!
        let tot = item.length
        let maior = item[0]
        let menor = item[0]
        let soma = 0
        let media = 0
        for(let pos in item){
            soma += item[pos]
            if(item[pos] > maior)
                maior = item[pos]
            if (item[pos] < menor)
                menor = item[pos]

        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, Temos ${tot} números cadastrados.<p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.`
        res.innerHTML += `<p>A media dos valores é ${media}.`
    }
}