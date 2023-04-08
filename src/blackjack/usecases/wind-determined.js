/**
 * Esta funcion devuelve el ganador de BlackJack
 * @param {Array<int>} puntosJugadores : [0,1]
 */

const determinarGanador = (puntosJugadores) => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores
    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ){
            alert('Nadie gana')
        } else if( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert( 'Jugador gana' )
        } else {
            alert( 'Computadora Gana')
        }
    }, 100);
}

export {determinarGanador}