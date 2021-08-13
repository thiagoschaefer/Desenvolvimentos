function contagem() {
    let part1 = window.document.getElementById('ini') 
    let part2 = window.document.getElementById('final')
    let part3 = window.document.querySelector('input#pula')
    let res = document.getElementById('res')
    
    if (part1.value.length == 0 || part2.value.length == 0 || part3.value.length == 0) { 
        res.innerHTML = 'Impossivel contar!'
        //window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = "Contando: <br>"
        let i = Number(part1.value)
        let f = Number(part2.value)
        let p = Number(part3.value)
        if (p <= 0){
            window.alert('Passo inválido! Considerando Passo 1')
            p = 1
        }
        if(i < f) {
            //contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }else {
            //contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += '\u{1F3C1}'
    }
    /*if (part3 == 0) {
      alert("Passo inválido! Considerando PASSO 1.")
      part3 = 1
    }
   contar()
    
    /*for (var cont = 0; part1.value = part2.value; cont + part3.value) {
        res.innerHTML = `testando ${cont}`
    }
    function contar(){
         var cont = 0
         while (part1 <= part2){
             cont = part1 += part3    
             res.innerHTML = `Retornou ${cont}`
        }
     }*/
}
