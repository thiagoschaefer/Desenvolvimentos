function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds() 
    //var hora = 13
    msg.innerHTML = `Agora são ${hora}:${minutos}:${segundos} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src="Manha.png"
        document.body.style.background ='#f4cda4'
    } else if (hora >= 12 && hora < 18) {
        //BOA NOITE!
        img.src="tarde.png"
        document.body.style.background ='#567473'
    } else {
        //BOA NOITE!
        img.src="noite.png"
        document.body.style.background ='#962812'
    }
}
    window.setInterval(carregar, 1000);
   
    
