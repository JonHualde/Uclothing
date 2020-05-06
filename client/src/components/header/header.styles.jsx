import styled from 'styled-components';
//import { css } from 'styled-components';
import { Link } from 'react-router-dom';

// ----------- REUSABLE CODE -----------
// const OptionStyled = css`
//     padding: 10px 15px;
//       cursor: pointer;
// `; 

// ----------- STYLED COMPONENTS -----------
export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    padding-right: 20px;

    @media screen and (max-width: 800px) {
        height: 60px;
        margin-bottom: 20px;
    }
    @media screen and (max-width: 500px) {
        padding-right: 0px;
    }
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;

     @media screen and (max-width: 800px) {
        width: 50px;
        padding: 20px 25px;
    }
`; 

export const OptionsContainer = styled.div`
    min-width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    align-items: flex-end;

    @media screen and (max-width: 500px) {
        font-size: 14px;
        width: 80%;
    }
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
    margin-right: 15px;

    @media screen and (max-width: 500px) {
        padding: 10px 5px;
        margin-right: 5px;
    }
`;