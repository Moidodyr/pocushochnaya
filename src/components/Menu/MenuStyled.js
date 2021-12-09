import styled from 'styled-components'

// Menu
export const MenuStyled = styled.main`
    min-height: 100vh;
    margin-bottom: 60px;
    margin-left: 385px;
`

// ListItem
export const List = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const Item = styled.li`
    position: relative;
    width: 350px;
    height: 155px;
    font-size: 20px;
    background-image: ${({img}) => `url(${img})`};
    background-position: center;
    background-size: cover;
    margin-top: 30px;
    margin-right: 30px;
    padding: 15px;
    color: #fafafa;
    z-index: 1;
    &:after{
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: black;
        opacity: 30%;
        z-index: -1;
    }
    &:hover {
        cursor: pointer;
        box-shadow: inset 0 0 50px 30px black;
        &:after{
            opacity: 0;
        }
    }
`
