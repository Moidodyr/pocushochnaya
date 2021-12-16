import { Empty, OrderContent, OrderStyled, OrderTitle, Total, TotalPrice } from "./OrdersStyled"
import { Button } from '../UI/Button'
import OrderListItem from "./OrderListItem"
import { useSelector } from 'react-redux'
import { formatCurrency, totalPriceItems } from "../secondaryFunctions/imdex"


const Order = () => {
    const orders = useSelector(state => state.orders)

    const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0),
          totalCounter = orders.reduce((result, order) => order.count + result, 0)

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
                <span>Итого:</span>
                <span>{totalCounter} позиций на </span>
                <TotalPrice>{formatCurrency(total)}</TotalPrice>
            </Total>
            <Button>Оформить</Button>
        </OrderStyled>
    )
}

export default Order