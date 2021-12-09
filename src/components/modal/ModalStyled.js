import styled from "styled-components"


export const Overlay = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, .8);
    z-index: 2;
`

export const Modal = styled.div`
    background-color: #fff;
    height: 600px;
    width: 600px;
`

export const Banner = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
`

export const Content = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px;
    height: calc(100% - 175px);
`
export const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    font-weight: 500;
`