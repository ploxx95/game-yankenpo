import React from 'react'
import styled from "styled-components";
import Buttons from './buttons';
import PortalRules from './portalRules';
//import Imgules from './image-rules.svg';

const BtnRulesStyled = styled.div`
   &&{margin:2em;}
   text-align:center;
   
`
function BtnRules() {
    function handleTogleClick() {
        console.log('kakasssss');
    }
    return (
        <BtnRulesStyled>
            <PortalRules onClick={handleTogleClick} />
            <Buttons >
            </Buttons>
        </BtnRulesStyled>
    )
}

export default BtnRules
