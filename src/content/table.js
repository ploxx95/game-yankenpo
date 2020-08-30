import React, { useState, Fragment } from 'react'
import styled from 'styled-components'
import Token from './token'
import { WhiteButtons } from './buttons'

const TableStyled = styled.div`

background: ${ ({ useErase }) => useErase ? 'none' : "url('./images/bg-triangle.svg') "} center bottom ;
background-size: auto 83%;
background-repeat: no-repeat;
background-position:center bottom;
&&{margin:2em;}
display:grid;
grid-template-columns: 130px 130px;
justify-content:center;
justify-items:center;
grid-gap:  25px 50px;
& div:nth-of-type(3){
    grid-column: span 2;
}
.parrafo-picked{
    text-align:center;
    p{
        font-size:1.3em;
        padding:1em;
    }
}
h2{
    font-size:3.2em;
    text-transform:uppercase;
    font-weight:700;
    text-align:center;
}
.container-result{
    position:relative;
    top:25px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    row-gap:1.3em;

}
`
const element = [
    'paper',
    'scissors',
    'rock'
]


function Table() {
    const [usePlay, setUsePlay] = useState(true)
    const [usePick, setUsePick] = useState('')
    const [useErase, setUseErase] = useState(false)
    const [useAi, setUseAi] = useState('')
    const [useWin, setUseWin] = useState('')

    function onClick(name) {
        setUsePlay(false)
        setUsePick(name)
        setUseErase(true)
        const pickAi = element[getRandom(0, 3)]
        setUseAi(pickAi)
        const result = win(name, pickAi)
        setUseWin(result)
    }
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }
    const playAgain = () => setUsePlay(true)

    function win(jugador, openai) {
        if (jugador === openai) {
            return 'draw'
        }
        if (jugador === 'paper') {
            if (openai === 'scissors') {
                return 'lose'
            }
        }
        if (jugador === 'scissors') {
            if (openai === 'paper') {
                return 'win'
            }
        }
        if (jugador === 'rock') {
            if (openai === 'paper') {
                return 'lose'
            }
        }/////
        if (jugador === 'rock') {
            if (openai === 'scissors') {
                return 'win'
            }
        }
        if (jugador === 'paper') {
            if (openai === 'rock') {
                return 'win'
            }
        }
        if (jugador === 'scissors') {
            if (openai === 'rock') {
                return 'lose'
            }
        }

    }
    return (
        <TableStyled useErase={useErase}>
            {
                usePlay ?
                    <Fragment>
                        <Token name='paper' onClick={onClick} />
                        <Token name='scissors' onClick={onClick} />
                        <Token name='rock' onClick={onClick} />
                    </Fragment>
                    :
                    <Fragment>
                        <div className='parrafo-picked' >
                            <Token name={usePick} onClick={onClick} />
                            <p>You Pick</p>
                        </div>
                        <div className='parrafo-picked'>
                            <Token name={useAi} onClick={onClick} />
                            <p>Picked Ai</p>
                        </div>
                        <div className='container-result' >
                            <h2>You {useWin}</h2>
                            <WhiteButtons onClick={playAgain}>Play Again</WhiteButtons>
                        </div>

                    </Fragment>

            }
        </TableStyled>
    )
}

export default Table
