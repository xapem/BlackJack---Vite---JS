// import { crearDeck as createDeck } from './usecases/create-deck'
// import createDeck from './usecases/create-deck'
// import createDeck, { myName } from './usecases/create-deck'
// console.log(myName)

// import { crearDeck as createDeck } from './usecases/create-deck'
// import { pedirCarta as requestLetter } from './usecases/request-letter'
// import { valorCarta as valueLetter } from './usecases/value-letter'

import { createDeck, requestLetter, valueLetter, computerPlayerTurn, acumulatePoints, createLetter } from './usecases'

const miModulo = (() => {
    'use strict'

    let deck         = []
    const tipos      = ['C','D','H','S'],
          especiales = ['A','J','Q','K']
  
    let puntosJugadores = []
    
    const btnPedir      = document.querySelector('#btnPedir'),
            btnDetener    = document.querySelector('#btnDetener'),
            btnNuevoJuego = document.querySelector('#btnNuevo')
    
    const divCartasJugadores = document.querySelectorAll('.divCartas'),
            puntosHTML    = document.querySelectorAll('small')


    const inicializarJuego = ( numJugadores = 2 ) => {
        console.clear()
        deck = createDeck(tipos, especiales)
        puntosJugadores = []
        for( let i = 0; i < numJugadores; i++ ){
            puntosJugadores.push(0)
        }
        puntosHTML.forEach( element => element.innerText = 0 )
        divCartasJugadores.forEach( element => element.innerHTML = '' )

        btnPedir.disabled   = false
        btnDetener.disabled = false
    }
        
    btnNuevoJuego.addEventListener('click', () => {
        inicializarJuego()
    })
    
    btnPedir.addEventListener('click', () => {
        const carta = requestLetter( deck )
        puntosJugadores[0] = acumulatePoints( carta, puntosJugadores, 0, puntosHTML)
        createLetter( carta, 0, divCartasJugadores )
        if( puntosJugadores[0] > 21 ){
            console.warn('Lo siento mucho, perdiste')
            btnPedir.disabled = true
            btnDetener.disabled = true
            computerPlayerTurn(deck, puntosJugadores, divCartasJugadores, puntosHTML)
        } else if ( puntosJugadores[0] === 21) {
            console.warn('21, genial')
            btnPedir.disabled = true
            btnDetener.disabled = true
            computerPlayerTurn(deck, puntosJugadores, divCartasJugadores, puntosHTML)
        }
    })

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled   = true
        btnDetener.disabled = true
        computerPlayerTurn(deck, puntosJugadores, divCartasJugadores, puntosHTML)
    })
    
    return { nuevoJuego: inicializarJuego }
})()





