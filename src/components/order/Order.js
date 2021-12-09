import { OrderContent, OrderStyled, OrderTitle, Total, TotalPrice } from "./OrdersStyled"
import { Button } from '../UI/Button'
import OrderListItem from "./OrderListItem"

const Order =  () => {
    return (
        <OrderStyled>
            <OrderTitle>Ваш заказ</OrderTitle>
            <OrderContent>
                <ul>
                    <OrderListItem />
                </ul>
            </OrderContent>
            <Total>
                <span>Итого</span>
                <span>5</span>
                <TotalPrice>850р</TotalPrice>
            </Total>
            <Button>Оформить</Button>
        </OrderStyled>
    )
}

export default Order