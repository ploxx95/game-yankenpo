import React from 'react'
import styled from "styled-components";
import Buttons from './buttons';
import PortalRules from './portalRules';
//import Imgules from './image-rules.svg';

const BtnRulesStyled = styled.div`
   
   text-align:center;
`
class BtnRules extends React.Component {
    state = {
        modalOpen: false,
    }
    _openModal = () => this.setState({ modalOpen: true })
    _closeModal = () => this.setState({ modalOpen: false })
    render() {
        return (
            <BtnRulesStyled>
                <Buttons onClick={this._openModal}>
                    rules
                </Buttons>
                {
                    this.state.modalOpen &&
                    <PortalRules
                        onClose={this._closeModal}
                    />
                }
            </BtnRulesStyled>
        )
    }
}


export default BtnRules
