import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 75px;
    width: 100%;
`

export const SignInIcon = styled(FontAwesomeIcon)`
    height: 25px;
    width: 25px;
    color: #693623;

    &:hover {
        color: #B49772;
    }
`
export const SignIn = styled.button`
    background-color: transparent;
    border: transparent;
    cursor: pointer;
`
