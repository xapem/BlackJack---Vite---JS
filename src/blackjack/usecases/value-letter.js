/**
 * Esta funcion retorna el valor de la carta
 * @param {String} carta Ejemplo: '2D' 
 * @returns {Number} return value number of the letter
 */

const valorCarta = ( carta ) => {
    if( !carta || carta.length === 0 ) throw new Error('La carta es obligatoria')
    const valor = carta.substring(0, carta.length - 1)
    return ( isNaN(valor) ) ?
            (valor === 'A') ? 11 : 10
            : valor * 1
}

export {valorCarta}