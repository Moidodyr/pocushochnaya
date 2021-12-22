import 'normalize.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth } from './components/Hooks/useAuth'
import { fetchMenu } from './actions'
import Header from './components/header/Header'
import Menu from './components/menu/Menu'
import ModalItem from './components/modal/ModalItem'
import OrderList from './components/orders/OrderList'


const App = () => {
  const auth = useAuth()
  const openItem = useSelector(state => state.openItem), 
        dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMenu())
  }, [dispatch])

  fetchMenu()

  
  return (
    <div className="App">
      <Header {...auth}/>
      <OrderList />
      <Menu />
      {openItem && <ModalItem />}
    </div>
  );
}

export default App;
