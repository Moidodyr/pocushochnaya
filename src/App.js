import 'normalize.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMenu } from './actions'
import Footer from './components/Footer/Footer'
import Header from './components/header/Header'
import Menu from './components/Menu/Menu'
import ModalItem from './components/modal/ModalItem'
import { Container } from './components/UI/Container'




 const App = () => {
  const openItem = useSelector(state => state.openItem), 
        dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMenu())
  }, [dispatch])

  fetchMenu()

  
  return (
    <div className="App">
      <Container>
        <Header />
      </Container>
      <Menu />
      <Footer />
      {openItem && <ModalItem />}
    </div>
  );
}

export default App;
