import { Icon } from "../UI/Icon"
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { ItemName, ItemPrice, OrderItemStyled } from "./OrdersStyled"
import { formatCurrency } from "../secondaryFunctions/imdex"


const OrderListItem = ({ order }) => {

    return (
        <OrderItemStyled>
            <ItemName>{order.name}</ItemName>
            <span>7</span>
            <ItemPrice>{formatCurrency(order.price)}</ItemPrice>
            <Icon icon={faTrash} />
        </OrderItemStyled>
    )
}

export default OrderListItem