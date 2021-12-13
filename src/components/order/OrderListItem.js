import { Icon } from "../UI/Icon"
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { ItemName, ItemPrice, OrderItemStyled } from "./OrdersStyled"


const OrderListItem = ({ order }) => {

    return (
        <OrderItemStyled>
            <ItemName>{order.name}</ItemName>
            <span>7</span>
            <ItemPrice>{order.price}</ItemPrice>
            <Icon icon={faTrash} />
        </OrderItemStyled>
    )
}

export default OrderListItem