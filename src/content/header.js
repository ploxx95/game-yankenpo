import React from 'react'
import styled from 'styled-components'
import Score from './score'


const HeaderStyled = styled.div`
    border: 2px solid rgba(255, 255,255,.29);
    color: white;
    padding: 12px 12px 12px 23px;
    border-radius: .5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    h1{
        font-size: 21px;
        line-height: 16px;
        text-transform: uppercase;
        font-weight: 700;
    }
`

function Header() {
    return (
        <HeaderStyled>
            <h1>
                Rock <br /> Paper <br /> Scissors
           </h1>
            <Score></Score>
        </HeaderStyled>
    )
}

export default Header
