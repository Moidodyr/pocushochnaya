import { HeaderStyled } from './HeaderStyled'
import logo from '../../assets/img/logo.png'
import { Auth } from './HeaderStyled'
import { Icon } from '../UI/Icon'
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
 

const Header = () => (
    <HeaderStyled>
        <img src={logo} alt="" />
        <Auth>
            <Icon icon={faArrowRightToBracket} />
            <Icon icon={faArrowRightFromBracket} />
        </Auth>
    </HeaderStyled>
)

export default Header