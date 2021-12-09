import { useDispatch, useSelector } from 'react-redux'
import { setOpenItem } from '../../actions'
import { Button } from '../UI/Button'
import { Banner, Content, HeaderContent, Modal, Overlay } from './ModalStyled'


const ModalItem = () => {
    const openItem = useSelector(state => state.openItem), 
          dispatch = useDispatch()

          console.log(openItem);

    const closeModal = e => {
        if(e.target.id === 'overlay') {
            dispatch(setOpenItem(null))
        } else {
            return null
        }
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
                    <Button>Добавить</Button>
                </Content>
            </Modal>
        </Overlay>
    )
}

export default ModalItem