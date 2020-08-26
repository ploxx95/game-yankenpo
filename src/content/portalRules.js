import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'



const PortalRulesStyled = styled.div`
display:none;
position:fixed;
left: 0;
right: 0;
top:0;
bottom:0;
background-color:black;
`

function PortalRules({ props }) {
    return ReactDOM.createPortal(
        <PortalRulesStyled>
            hola
        </PortalRulesStyled>, document.getElementById('portal')
    )
}

export default PortalRules
