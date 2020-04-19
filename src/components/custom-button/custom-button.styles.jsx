import styled, { css } from 'styled-components';


const getButtonsStyle = props => {
    if (props.color === 'blue') {
        return colorBlue
    }  
    if (props.color === 'red') {
        return colorRed
    }

    return props.inverted ? invertedButtonStyles : NonInvertedButtonStyles;
}

const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
`;
const NonInvertedButtonStyles = css`
    background-color: black;
    color: white;
    border: none;
        
    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;


const colorBlue = css`
    background-color: #4285f4;
    border: none;

    &:hover {
      background-color: white;
      border: 1px solid black;
    }
`;
    const colorRed = css`
        background-color: rgba(194, 11, 11, 0.877);

        &:hover {
            background-color: white;
            color: black;
            border: 1px solid black;
        }
    `;

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 15px 0 15px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed', cursive;
    font-weight: bolder;
    cursor: pointer;
    transition: .3s ease-out;
    display: flex;
    justify-content: center;

    ${getButtonsStyle}
`;