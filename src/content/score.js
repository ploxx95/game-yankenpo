import React, { useContext } from 'react'
import styled from 'styled-components'
import { ScoreContext } from '../App'

const ScoreStyled = styled.div`
    background-color: white;
    text-align:center;
    &&{padding:7px 1.5em 7px 1.5em}
    border-radius: 5px;
    small{
        
        color: #2A45C2;
        text-transform: uppercase;
        font-size: 10px;   
    }
    p{
        color: #565468;
        font-size: 2.8em;
        font-weight: 700;
        letter-spacing: -1px;
        margin-top: -5px;
    }
`


function Score() {
    const { score } = useContext(ScoreContext)
    return (
        <ScoreStyled>
            <small>Score</small>
            <p>{score}</p>
        </ScoreStyled>
    )
}


export default Score
