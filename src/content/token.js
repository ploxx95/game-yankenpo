import React from 'react'
import styled from 'styled-components'

const TokenStyled = styled.div`
    background:linear-gradient(to bottom,  ${({ color }) => color.base1} , ${({ color }) => color.base2} );
    padding:14px;
    border-radius:50%;
    box-shadow: 0 5px 0 ${({ color }) => color.border}; 
    
    .circle{
        width : 100px;
    height: 95px;
    
    
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:white;
    box-shadow: inset 0px 5px 0px rgb(186, 191, 212, .5), 
                inset 0px 0px 0px ;
    }
    cursor: pointer;       
    &:active{
        transform: scale(.9)
    }   



`
const colors = {
    paper: {
        base1: 'hsl(230, 89%, 62%)',
        base2: 'hsl(230, 89%, 65%)',
        border: 'hsl(229, 64.4%, 46.3%)',
    },
    rock: {
        base1: 'hsl(349, 71%, 52%)',
        base2: 'hsl(349, 70%, 56%)',
        border: 'hsl(347, 75.4%, 35.1%)',
    },
    scissors: {
        base1: 'hsl(40, 84%, 53%)',
        base2: 'hsl(39, 89%, 49%)',
        border: 'hsl(28, 76.1%, 44.3%)',
    }
}




function Token({ name }) {
    return (
        <TokenStyled color={colors[name]} >
            <div className="circle">
                <img src={`./images/icon-${name}.svg`} alt="" />
            </div>
        </TokenStyled>

    )
}

export default Token
