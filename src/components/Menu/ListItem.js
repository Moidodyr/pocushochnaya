import { useDispatch } from "react-redux"
import { setOpenItem } from "../../actions"
import { List, Item } from "./MenuStyled"


const ListItem = ({itemList}) => {
    const dispatch = useDispatch()

    const formatCurrency = value => {
        return value.toLocaleString('ru-Ru', 
            {style: 'currency',
            currency: 'RUB'
        }
    )}

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