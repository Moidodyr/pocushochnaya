import { useDispatch } from "react-redux"
import { setOpenItem } from "../../actions"
import { formatCurrency } from "../secondaryFunctions/imdex"
import { List, Item } from "./MenuStyled"


const ListItem = ({itemList}) => {
    const dispatch = useDispatch()

    return (
        <List>
            {itemList && itemList.map(item => {
                return (
                    <Item
                        key={item.id}
                        img={item.img}
                        onClick={() => dispatch(setOpenItem(item))}>
                        <p>{item.name}</p>
                        <p>{formatCurrency(item.price)}</p>
                    </Item>
                )
            })}
        </List>
    )
}

export default ListItem