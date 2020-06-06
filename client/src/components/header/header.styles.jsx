import styled from 'styled-components';
//import { css } from 'styled-components';
import { Link } from 'react-router-dom';

// ----------- REUSABLE CODE -----------
// const OptionStyled = css`
//     padding: 10px 15px;
//       cursor: pointer;
// `; 

// ----- THE COLOR PALETTE I'M USING FOR THIS WEBSITE ----- // 
// Orange: #f9a828 ; 
// dark-white: #ececeb;
// dark blue: #07617d;
// dark grey: #2e383f;
// light black: #212121;
// grey: #757575;
// light grey: #BDBDBD;
// dark: #000000;
// ----------- STYLED COMPONENTS -----------
export const HeaderContainer = styled.div`
    height: 90px;
    width: 100%;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    background: #4f5e7f;

    margin-bottom: 25px;
    padding-right: 20px;

    @media screen and (max-width: 800px) {
        height: 80px;
        margin-bottom: 20px;
    }
    @media screen and (max-width: 500px) {
        padding-right: 0px;
    }
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    position: relative;
    background-color: white;
    border-radius: 4px;

    .logo {
        position: absolute;
        left: 50%;
        top: 40%;
        transform: translate(-50%, -50%);
    }

    .logo_text {
        position: absolute;
        display: flex;
        font-size: 14px;
        justify-content: center;
        width: 100%;
        left: 50%;
        top: 62%;
        transform: translate(-50%, -50%);
    }

     @media screen and (max-width: 800px) {
        width: 60px;
        padding: 20px 25px;

        .logo_text {
        font-size: 12px;
        top: 65%;
    }
    }
`; 

export const OptionsContainer = styled.div`
    min-width: 50%;
    height: 100%;
    display: flex;
    align-items:  center;
    justify-content: flex-end;
    padding-right: 3vw;
    font-size: 18px;

    @media screen and (max-width: 700px) {
        padding-right: .5vw;
        font-size: 15px;
        width: 80%;
    }

    @media screen and (max-width: 500px) {
        font-size: 14px;
        width: 80%;
        padding-right: 0;
    }
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
    margin-right: 15px;
    color: #ececeb;

    @media screen and (max-width: 768px) {
        padding: 10px 12px;
        margin-right: 10px;
    }

    @media screen and (max-width: 500px) {
        padding: 10px 5px;
        margin-right: 5px;
    }
`;