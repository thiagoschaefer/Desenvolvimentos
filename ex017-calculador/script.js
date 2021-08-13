function gerar(){
    let num = window.document.getElementById('entrada')
    let tab = window.document.getElementById('tabuada')

    if (num.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        for(c = 0; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab ${c}`
            tab.appendChild(item)
        }
    }
    
}