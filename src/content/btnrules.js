import React from 'react'
import styled from "styled-components";

const BtnRulesStyled = styled.div`
    border: 1px solid white;
    border-radius:5px;
    padding:.5em;
    text-transform: uppercase;
    font-weight:600;
    
    text-align:center;
    
`


function BtnRules() {
    return (
        <BtnRulesStyled>
            <span>rules</span>
        </BtnRulesStyled>
    )
}

export default BtnRules
