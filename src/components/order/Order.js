import { Empty, OrderContent, OrderStyled, OrderTitle, Total, TotalPrice } from "./OrdersStyled"
import { Button } from '../UI/Button'
import OrderListItem from "./OrderListItem"
import { useSelector } from 'react-redux'


const Order = () => {
    const orders = useSelector(state => state.orders)

    return (
        <OrderStyled>
            <OrderTitle>Ваш заказ</OrderTitle>
            <OrderContent>
                {orders.length
                    ?   <ul>
                            {orders.map(order => {
                                return <OrderListItem key={order.id} order={order}/>
                            })}
                        </ul>
                    :
                        <Empty>Ваш список заказов пуст</Empty>}
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