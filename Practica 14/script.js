document.addEventListener('DOMContentLoaded', function (){
    const display = document.getElementById('display');
    const botonIncrementar = document.getElementById('incrementar');
    const botonDecrementar = document.getElementById('decrementar');
    const botonReset = document.getElementById('reset');

    let contador = 0

    function actualizar() {
        display.textContent = contador;
        display.classList.remove('positivo', 'negativo', 'cero');

        if (contador > 0 ) {
            display.classList.add('positivo')
        }else if (contador < 0 ){
            display.classList.add('negativo')
        }else {
            display.classList.add('cero')
        }
    }

    botonIncrementar.addEventListener( 'click', function (){
        contador++;
        actualizar()
    })

    botonDecrementar.addEventListener( 'click', function() {
        contador--;
        actualizar()
    })

     botonReset.addEventListener( 'click', function() {
        contador=0;
        actualizar()
    })

    actualizar();

    document.addEventListener('keydown', function (event){
        switch (event.key) {
            case '+':
                contador++;
                actualizar();
                break;
            case '-':
                contador--;
                actualizar();
                break;
            case '0':
                contador=0;
                actualizar();
                break;
        }
    })
});

