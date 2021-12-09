import { useDispatch, useSelector } from 'react-redux'
import { setOpenItem } from '../../actions'
import { Banner, Modal, Overlay } from './ModalStyled'


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
                {openItem.name}
            </Modal>
        </Overlay>
    )
}

export default ModalItem