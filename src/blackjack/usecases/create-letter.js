
/**
 * 
 * @param {String} carta 
 * @param {Number} turno 
 * @param {HTMLElement} divCartasJugadores
 */


const crearCarta = ( carta, turno, divCartasJugadores ) => {

    if( !carta || carta.length === 0) throw new Error('La carta es necesaria')
    if( turno === undefined ) throw new Error('El turno del jugador es necesario')
    if( !divCartasJugadores ) throw new Error('El Argumento divCartasJugadores es necesario')

    const imgCarta = document.createElement('img')
    imgCarta.src = `assets/cartas/${ carta }.png`
    imgCarta.classList.add('carta')
    divCartasJugadores[turno].append( imgCarta )
}

export {crearCarta}