import { useDispatch } from "react-redux"
import { setOpenItem, setOrderEdit } from "../../actions"
import { formatCurrency } from "../secondaryFunctions"
import { List, Item } from "./MenuStyled"


const ListItem = ({itemList}) => {
    const dispatch = useDispatch()

    const openModal = item => {
        dispatch(setOrderEdit(false))
        dispatch(setOpenItem(item))
    }

    return (
        <List>
            {itemList && itemList.map(item => {
                return (
                    <Item
                        key={item.id}
                        img={item.img}
                        onClick={() => openModal(item)}>
                        <p>{item.name}</p>
                        <p>{formatCurrency(item.price)}</p>
                    </Item>
                )
            })}
        </List>
    )
}

export default ListItem