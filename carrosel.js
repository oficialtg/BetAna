let contador = 1;

setInterval(function(){

    document.getElementById('radio-' + contador).checked = true;
    contador ++;

    if(contador > 3){
        contador = 1;
    }


}, 4000)
