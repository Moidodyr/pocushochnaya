import 'normalize.css'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchMenu } from './actions'
import Footer from './components/Footer/Footer'
import Header from './components/header/Header'
import Menu from './components/Menu/Menu'
import { Container } from './components/UI/Container'




 const App = () => {
  const dispatch = useDispatch()

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
    </div>
  );
}

export default App;
