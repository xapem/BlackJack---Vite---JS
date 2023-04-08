/**
 * Esto es una funcion para pedir una carta del deck
 * @param {Array<String>} deck Ejemplo: ['2D','2C','2H', '2S'] 
 * @returns {String} return last value of array
 */

const pedirCarta = ( deck ) => {
    if( !deck || deck.length === 0 ) throw new Error( 'No hay cartas en el deck' )
    return deck.pop()
}

export {pedirCarta}