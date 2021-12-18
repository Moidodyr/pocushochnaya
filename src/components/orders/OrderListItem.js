import { Icon } from "../UI/Icon"
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { ItemName, ItemPrice, OrderItemContent, OrderItemStyled, Toppings } from "./OrdersStyled"
import { formatCurrency, totalPriceItems } from "../secondaryFunctions"
import { useDispatch, useSelector } from "react-redux"
import { setOpenItem, setOrderEdit, setOrders } from "../../actions"


const OrderListItem = ({ order, index }) => {
    const orders = useSelector(state => state.orders),
          dispatch = useDispatch()

    const topping = order.topping.filter(itemm => itemm.checked)
        .map(item => item.name)
        .join(', ')

    const openEditOrder = (order, index) => {
        dispatch(setOpenItem({...order, index}))
        dispatch(setOrderEdit(true))
    }

    const deleteOrder = index => {
        const newOrder = orders.filter((item, i) => index !== i)
        dispatch(setOrders(newOrder))
    }

    return (
        <OrderItemStyled>
            <OrderItemContent >
                <ItemName>{order.name}</ItemName>
                <span>{order.count}</span>
                <ItemPrice>
                    {formatCurrency(totalPriceItems(order))}
                </ItemPrice>
                <Icon icon={faPenToSquare} onClick={() => openEditOrder(order, index)} alt='dddddddddd'/>
            </OrderItemContent>
            <Icon icon={faTrash} onClick={() => deleteOrder(index)}/>
            {topping && <Toppings>{topping}</Toppings>}
        </OrderItemStyled>
    )
}

export default OrderListItem