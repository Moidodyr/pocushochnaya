import { useSelector } from 'react-redux'
import ListItem from "./ListItem"
import { MenuStyled } from "./MenuStyled"


const Menu = () => {
    const burgers = useSelector(state => state.menu.burger),
          others = useSelector(state => state.menu.other)    

    return (
        <MenuStyled>
            <section>
                <h1>Бургеры</h1>
                <ListItem itemList={burgers}/>
            </section>
            <section>
                <h1>Закуски / Напитки</h1>
                <ListItem itemList={others}/>
            </section>
        </MenuStyled>
    )
}


export default Menu