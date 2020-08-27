import React from 'react'
import styled from "styled-components";

const ButtonsStyled = styled.div`
    &&{padding: .5em;}
    display: inline-flex;
    border: 1px solid white;
    border-radius:9px;
    min-width:128px;
    justify-content:center;
    text-transform: uppercase;
    font-weight:600;
    box-sizing:border-box;
    cursor: pointer;
    letter-spacing:2.5px;
`



function Buttons(props) {
    return (
        <ButtonsStyled onClick={props.onClick}>
            <span>rules</span>
        </ButtonsStyled>
    )
}

export default Buttons
