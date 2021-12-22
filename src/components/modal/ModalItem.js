import { useDispatch, useSelector } from 'react-redux'
import { setOpenItem, setOrderEdit, setOrders } from '../../actions'
import { Button } from '../UI/Button'
import CountItem from './CountItem'
import { Banner, Content, HeaderContent, Modal, Overlay, TotalPriceItem } from './ModalStyled'
import useCount from '../Hooks/useCount'
import { formatCurrency, totalPriceItems } from '../secondaryFunctions'
import Toppings from './Toppings'
import { useToppings } from '../Hooks/useToppings'
import { useChoices } from '../Hooks/useChoices'
import Choices from './Choices'


const ModalItem = () => {
    const orders = useSelector(state => state.orders),
          openItem = useSelector(state => state.openItem),
          isEdit = useSelector(state => state.isOrderEdit),
          dispatch = useDispatch()

    const counter = useCount(openItem.count),
          toppings = useToppings(openItem),
          choices = useChoices(openItem)

    const closeModal = e => {
        if(e.target.id === 'overlay') {
            dispatch(setOpenItem(null))
        } else {
            return null
        }
    }

    const order = {
        ...openItem,
        count: counter.count,
        topping: toppings.toppings,
        choice: choices.choice
    }

    const addToOrder = () => {
        dispatch(setOrders([...orders, order]))
        dispatch(setOpenItem(null))
        dispatch(setOrderEdit(false))
    }

    const editOrder = () => {
        const newOrders = [...orders]
        newOrders[openItem.index] = order
        dispatch(setOrders(newOrders))
        dispatch(setOpenItem(null))
        dispatch(setOrderEdit(false))
    }

    return (
        <Overlay id='overlay' onClick={closeModal}>
            <Modal>
                <Banner img={openItem.img}/>
                <Content>
                    <HeaderContent>
                        <div>{openItem.name}</div>
                        <div>{formatCurrency(openItem.price)}</div>
                    </HeaderContent>
                    <CountItem {...counter}/>
                    {openItem.toppings && <Toppings {...toppings}/>}
                    {openItem.choices && <Choices {...choices} openItem={openItem} />}
                    <TotalPriceItem>
                        <span>Цена</span>
                        <span>{formatCurrency(totalPriceItems(order))}</span>
                    </TotalPriceItem>
                    <Button onClick={isEdit ? editOrder : addToOrder}
                        disabled={order.choices && !order.choice}>
                            {isEdit ? 'Редактировать' : 'Добавить'}
                    </Button>
                </Content>
            </Modal>
        </Overlay>
    )
}

export default ModalItem