import React, { useState, Fragment, useContext } from 'react'
import styled from 'styled-components'
import Token from './token'
import { WhiteButtons } from './buttons'
import { ScoreContext } from '../App'

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
    const [useResult, setResult] = useState('')

    const { score, setScore } = useContext(ScoreContext)


    function onClick(name) {
        setUsePlay(false)
        setUsePick(name)
        setUseErase(true)
        const pickAi = element[getRandom(0, 3)]
        console.log('esto es ai  : ', pickAi)
        console.log('esto es name  :  ', name);
        setUseAi(pickAi)
        const result = win(name, pickAi)
        setResult(result)
        if (result === 'win') {
            setScore(score + 1)
        }

    }
    const playAgain = () => {
        setUsePlay(true)
        setUseErase(false)
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
                            <Token name={usePick} />
                            <p>You Pick</p>
                        </div>
                        <div className='parrafo-picked' >
                            <Token name={useAi} />
                            <p>You Pick</p>
                        </div>

                        <div className='container-result' >
                            <h2>You {useResult}</h2>
                            <WhiteButtons onClick={playAgain}>Play Again</WhiteButtons>
                        </div>


                    </Fragment>

            }
        </TableStyled>
    )
}
export default Table



function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}



function recorre(interval, setItem, item, useRunner, setUseRunner, useAi, setUseAi) {
    if (interval > 890) {
        return setUseRunner(false)
    }
    interval *= 1.48
    setTimeout(() => {
        if (item === 0) {
            setItem(item + 1)
        }
        if (item === 1) {
            setItem(item + 1)
        }
        if (item === 2) {
            setItem(item - 2)
        }
    }, interval)

}




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