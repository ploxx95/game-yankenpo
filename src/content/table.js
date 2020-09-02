import React, { useState, Fragment, useEffect } from 'react'
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

function method(setUseInterval, interval, setItem, item, toggleFlag, flag) {
    setUseInterval(interval * 1.08)
    setTimeout(() => {
        if (item == 0) {
            setItem(item + 1)
        }
        if (item == 1) {
            setItem(item + 1)
        }
        if (item == 2) {
            setItem(item - 2)
        }
    }, interval)
    if (interval > 890) {
        return toggleFlag(!flag)
    }
}


function Table() {
    const [usePlay, setUsePlay] = useState(true)
    const [usePick, setUsePick] = useState('')
    const [useErase, setUseErase] = useState(false)
    const [useAi, setUseAi] = useState('')
    const [useWin, setUseWin] = useState('')
    //const [usenumber, setUseNumber] = useState(1)

    const [flag, toggleFlag] = useState(false);
    const [item, setItem] = useState(0)
    const [interval, setUseInterval] = useState(1)

    useEffect(() => {
        if (flag === true) {
            method(setUseInterval, interval, setItem, item, toggleFlag, flag)
        }

        console.log('esto es position : ', item);
        return () => {

        }
    }, [item, flag])

    //primera opcion fallida de chocolatear
    // const chocolateando = () => {

    //     let interval = 1
    //     const goToRulet = () => {
    //         if (usenumber === 0) {
    //             setUseNumber(usenumber + 1)
    //             console.log('a')
    //         } else if (usenumber === 1) {
    //             setUseNumber(usenumber + 1)
    //             console.log('b')
    //         } else if (usenumber === 2) {
    //             setUseNumber(usenumber + 1)
    //             console.log('c')
    //         }


    //         if (interval > 500) {
    //             return
    //         }


    //         interval *= 1.05
    //         setTimeout(goToRulet, interval)
    //         console.log(interval)
    //     }
    //     setTimeout(goToRulet, interval)

    // }



    function onClick(name) {
        setUsePlay(false)
        setUsePick(name)
        setUseErase(true)
        const pickAi = element[item]
        setUseAi(pickAi)
        const result = win(name, pickAi)
        setUseWin(result)
        toggleFlag(true)
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
