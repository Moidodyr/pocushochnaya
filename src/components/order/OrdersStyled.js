import styled from "styled-components"


// Order
export const OrderStyled = styled.section`
    position: fixed;
    top: 80px;
    left: 0;
    display: flex;
    flex-direction: column;
    min-width: 380px;
    height: calc(100% - 80px);
    background-color: #fff;
    box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25px);
`

export const OrderTitle = styled.h2`
    text-align: center;
`

export const OrderContent = styled.div`
    flex-grow: 1;
`

export const Total= styled.div`
    display: flex;
    & span:first-child {
        flex-grow: 1;
    }
`

export const TotalPrice = styled.div`
    text-align: right;
    min-width: 65px;
    margin-left: 20px;
`

export const EmptyList = styled.p`
    text-align: center;
`

// OrderListItem

export const OrderItemStyled = styled.li`
    display: flex;
    margin: 15px 0;
    flex-wrap: wrap;
    cursor: pointer;
`

export const ItemName = styled.span`
    flex-grow: 1;
`

export const ItemPrice = styled.span`
    margin-left: 20px;
    margin-right: 10px;
    min-width: 65px;
`

export const TrashBtn = styled.button`
    width: 25px;
    height: 25px;
    border-color: transparent;
    background-color: transparent;

`

export const Toppings = styled.div`
    color: #9a9a9a;
    font-size: 14px;
`