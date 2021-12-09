import { Icon } from "../UI/Icon"
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { ItemName, ItemPrice, OrderItemStyled } from "./OrdersStyled"


const OrderListItem = () => {
    return (
        <OrderItemStyled>
            <ItemName>js burger</ItemName>
            <span>7</span>
            <ItemPrice>750h</ItemPrice>
            <Icon icon={faTrash} />
        </OrderItemStyled>
    )
}

export default OrderListItem