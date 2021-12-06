import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'


export const FooterStyled = styled.footer`
    background-color: #1f2124;
    height: 390px;
`

export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 33px;
    width: 33px;
    background-color: #393939;

    &:hover {
        background-color: #0D1117;
    }
`

export const GitIcon = styled(FontAwesomeIcon)`
    color: #fff;
`