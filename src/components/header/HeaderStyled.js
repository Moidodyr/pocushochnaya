import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'


export const HeaderStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content:space-between;
    height: 75px;
    width: 100%;
    z-index: 3;
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    width: 380px;
    padding-left: 15px; 
`

export const LogoIcon = styled(FontAwesomeIcon)`
    width: 25px;
    height: 25px;
`

export const HeaderTitle = styled.h2`
    font-family: 'Pacifico';
    letter-spacing: 5px;
    margin-left: 20px;
`

export const Auth = styled.button`
    padding-right: 15px;
    background-color: transparent;
    border: transparent;
    cursor: pointer;
`
