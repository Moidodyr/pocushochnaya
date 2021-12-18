import styled from "styled-components"


// Order
export const OrderStyled = styled.section`
    position: fixed;
    top: 80px;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 380px;
    height: calc(100% - 80px);
    padding: 0 20px;
    background-color: #fff;
    -webkit-box-shadow: inset 0px 0px 29px -1px rgba(0,0,0,0.85); 
    box-shadow: inset 0px 0px 29px -1px rgba(0,0,0,0.85);
    overflow-y: auto;
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

export const Empty = styled.p`
    text-align: center;
`

// OrderListItem

export const OrderItemStyled = styled.li`
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
    flex-wrap: wrap;
`

export const OrderItemContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - (25px + 7px));
    margin-right: 7px;
    cursor: default;
`

export const ItemName = styled.span`
    flex-grow: 1;
    font-weight: bold;
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
    width: 100%;
`