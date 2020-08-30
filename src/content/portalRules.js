import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const PortalRulesStyled = styled.div`
font-family:'Barlow Semi Condensed', sans-serif;
position:fixed;
left: 0;
right: 0;
top:0;
bottom:0;
background: url("./images/image-rules.svg") center center, white ;
background-repeat:no-repeat;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
padding:5em 0 5em 0;

h3{
    text-transform:uppercase;
    font-size: 2em;
    margin:0;
}
span{
    padding:1.5em;
    cursor: pointer;
}

`

// function PortalRules(props) {
//     console.log(props.activo);
//     return ReactDOM.createPortal(
//         <PortalRulesStyled  >
//             <button onClick={props.closeModal} >cerrar</button>
//         </PortalRulesStyled >, document.getElementById('portal')
//     )
// }
class PortalRules extends React.Component {

    render() {

        return ReactDOM.createPortal(
            <PortalRulesStyled>
                <h3 >Rules</h3 >

                <span onClick={this.props.onClose}>
                    <img src='./images/icon-close.svg' alt='rules' ></img>
                </span>

            </PortalRulesStyled >, document.getElementById('portal')
        )
    }
}
export default PortalRules
