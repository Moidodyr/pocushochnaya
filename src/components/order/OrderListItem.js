import { Icon } from "../UI/Icon"
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { ItemName, ItemPrice, OrderItemStyled } from "./OrdersStyled"
import { formatCurrency, totalPriceItems } from "../secondaryFunctions/imdex"


const OrderListItem = ({ order }) => {
    return (
        <OrderItemStyled>
            <ItemName>{order.name}</ItemName>
            <span>{order.count}</span>
            <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
            <Icon icon={faTrash} />
        </OrderItemStyled>
    )
}

export default OrderListItem