import 'normalize.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMenu } from './actions'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Menu from './components/menu/Menu'
import ModalItem from './components/modal/ModalItem'
import Order from './components/order/Order'


 const App = () => {
  const openItem = useSelector(state => state.openItem), 
        dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMenu())
  }, [dispatch])

  fetchMenu()

  
  return (
    <div className="App">
      <Header />
      <Order />
      <Menu />
      <Footer />
      {openItem && <ModalItem />}
    </div>
  );
}

export default App;
