import { useDispatch, useSelector } from 'react-redux'
import { setOpenItem, setOrders } from '../../actions'
import { Button } from '../UI/Button'
import CountItem from './CountItem'
import { Banner, Content, HeaderContent, Modal, Overlay, TotalPriceItem } from './ModalStyled'
import useCount from './useCount'
import { formatCurrency, totalPriceItems } from '../secondaryFunctions/imdex'


const ModalItem = () => {
    const openItem = useSelector(state => state.openItem),
          dispatch = useDispatch()
          
    const counter = useCount(openItem.count)


    const closeModal = e => {
        if(e.target.id === 'overlay') {
            dispatch(setOpenItem(null))
        } else {
            return null
        }
    }

    const order = {
        ...openItem,
        count: counter.count
    }

    const addToOrder = () => {
        dispatch(setOrders(order))
        dispatch(setOpenItem(null))
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
                    <TotalPriceItem>
                        <span>Цена</span>
                        <span>{formatCurrency(totalPriceItems(order))}</span>
                    </TotalPriceItem>
                    <Button onClick={addToOrder}>Добавить</Button>
                </Content>
            </Modal>
        </Overlay>
    )
}

export default ModalItem