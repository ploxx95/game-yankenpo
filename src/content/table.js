import React from 'react'
import styled from 'styled-components'
import Token from './token'

const TableStyled = styled.div`
display:grid;
grid-template-columns: 130px 130px;
justify-content:center;
justify-items:center;
grid-gap:  15px 50px;

& div:nth-of-type(3){
    grid-column: span 2;
    
}

`


function Table() {
    return (
        <TableStyled>
            <Token name='paper' />
            <Token name='scissors' />
            <Token name='rock' />
        </TableStyled>
    )
}

export default Table
