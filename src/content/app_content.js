import React from 'react'
import styled from 'styled-components'

const AppContentStyled = styled.div`
display:flex;
flex-direction:column;
justify-content: space-between;
min-height: calc(100vh - 70px);
`

function AppContent({ children }) {
    return (
        <AppContentStyled>
            {children}
        </AppContentStyled>
    )
}

export default AppContent
