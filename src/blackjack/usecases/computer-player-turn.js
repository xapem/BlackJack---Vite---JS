import { requestLetter, acumulatePoints, createLetter, windDeterminated } from "."

/**
 * Esta funcion juega el turno de la computadora
 * @param {Array<String>} deck Ejemplo: ['2C', '2S', '5S']...
 * @param {Array<Number>} puntosJugadores Ejemplo: [0,1] 0: Jugador 1: Computadora
 * @param {HTMLElement} divCartasJugadores Ejemplo: querySelectorAll('.divCartas')
 * @param {HTMLElement} puntosHTML querySelectorAll('.puntos')
 */

const turnoComputadora = ( deck, puntosJugadores, divCartasJugadores, puntosHTML ) => {

    if( !deck || deck.length === 0 ) throw new Error('Las cartas son necesarias')
    if( !puntosJugadores || puntosJugadores.length === 0 ) throw new Error('Las puntos de los jugadores son necesarias')
    if( !divCartasJugadores ) throw new Error('Es necesario el divCartaJugadores')
    if( !puntosHTML ) throw new Error('Es necesario el puntosHTML')
    

    let [puntosMinimos, puntosComputadora] = puntosJugadores
    do {
        const carta = requestLetter( deck )
        puntosComputadora = acumulatePoints(carta, puntosJugadores, 1, puntosHTML)
        createLetter(carta, puntosJugadores.length - 1, divCartasJugadores)
    } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) )
    windDeterminated(puntosJugadores)
}

export {turnoComputadora}