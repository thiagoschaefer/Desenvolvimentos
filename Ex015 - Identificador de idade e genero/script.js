function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamnte!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'bebe_h.png')
            }else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem_h.png')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto_h.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso_h.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'bebe_m.png')
            }else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-m.png')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto_m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso_m.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
    
}