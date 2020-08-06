import React from 'react'
import styled from 'styled-components'

const ScoreStyled = styled.div`
    background-color: white;
    text-align:center;
    padding: 10px 0;
    border-radius: 5px;
    width: 85px;
    
    small{
        margin: 0;
        color: #2A45C2;
        text-transform: uppercase;
        font-size: 10px;
        font-family: 'Barlow Semi Condensed', sans-serif;
        
    }
    p{
        color: #565468;
        font-size: 40px;
        margin: 0px;
        font-family:'Barlow Semi Condensed', sans-serif;
        font-weight: 700;
        letter-spacing: -1px;
        
    }
`


function Score() {
    return (
        <ScoreStyled>

            <small>Score</small>
            <p>12</p>
        </ScoreStyled>
    )
}


export default Score
