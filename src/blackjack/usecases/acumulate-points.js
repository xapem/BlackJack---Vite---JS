import { valueLetter } from "."

/**
 * 
 * @param {String} carta Ejemplo '2D'
 * @param {Array<Number>} puntosJugadores Ejemplo [0,1]
 * @param {Number} turno Ejemplo 0 || 1
 * @param {HTMLElement} puntosHTML querySelectorAll('.puntos')
 * @returns {Number} Return acumulate the acumulate of values
 */
const acumularPuntos = ( carta, puntosJugadores, turno, puntosHTML ) => {
    if( !carta || carta.length === 0 ) throw new Error('La carta es obligatoria')
    if( turno === undefined ) throw new Error('El turno del jugador es obligatorio')

    puntosJugadores[turno] = puntosJugadores[turno] + valueLetter(carta)
    puntosHTML[turno].innerText = puntosJugadores[turno]
    return puntosJugadores[turno]
}

export {acumularPuntos}