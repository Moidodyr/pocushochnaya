import { useDispatch, useSelector } from 'react-redux'
import { setOpenItem, setOrders } from '../../actions'
import { Button } from '../UI/Button'
import CountItem from './CountItem'
import { Banner, Content, HeaderContent, Modal, Overlay } from './ModalStyled'


const ModalItem = () => {
    const openItem = useSelector(state => state.openItem),
          dispatch = useDispatch()

    const closeModal = e => {
        if(e.target.id === 'overlay') {
            dispatch(setOpenItem(null))
        } else {
            return null
        }
    }

    const addToOrder = () => {
        dispatch(setOrders(openItem))
        dispatch(setOpenItem(null))
    }

    return (
        <Overlay id='overlay' onClick={closeModal}>
            <Modal>
                <Banner img={openItem.img}/>
                <Content>
                    <HeaderContent>
                        <div>{openItem.name}</div>
                        <div>{openItem.price}</div>
                    </HeaderContent>
                    <CountItem />
                    <Button onClick={addToOrder}>Добавить</Button>
                </Content>
            </Modal>
        </Overlay>
    )
}

export default ModalItem