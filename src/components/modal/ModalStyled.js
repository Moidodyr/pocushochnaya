import styled from "styled-components"


// ModalItem
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
    z-index: 5;
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
export const TotalPriceItem = styled.div`
    display: flex;
    justify-content: space-between;
`

// CountItem
export const Count = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CountWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 15px;
`

export const CountInput = styled.input`
    width: 50px;
    text-align: center;
    height: 30px;
    font-size: 20px;
`

export const BtnCount = styled.button`
    background-color: transparent;
    width: 30px;
    height: 30px;
    border: 0.5px solid #000;
`

// Toppings
export const ToppingWrap = styled.div`
    column-count: 2;
    min-width: 500px;
    margin: 0 auto;
    column-gap: 15px;
`

export const ToppingLabel = styled.label`
    cursor: pointer;
    display: block;
`

export const ToppingCheckbox = styled.input`
    cursor: pointer;
    margin-right: 20px;
`

// Chises
export const ChoicesWrap = styled.div`
    column-count: 2;
    min-width: 500px;
    margin: 0 auto;
    column-gap: 15px;
`

export const ChoiceLabel = styled.label`
    cursor: pointer;
    display: block;
`

export const ChoiceRadio = styled.input`
    cursor: pointer;
    margin-right: 50px;
`