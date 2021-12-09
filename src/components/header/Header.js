import { HeaderStyled } from './HeaderStyled'
import logo from '../../assets/img/logo.png'
import { Auth, Icon } from './HeaderStyled'
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
 

const Header = () => (
    <HeaderStyled>
        <img src={logo} alt="" />
        <Auth>
            <Icon icon={faArrowRightToBracket} />
            {/* <Icon icon={faArrowRightFromBracket} /> */}
        </Auth>
    </HeaderStyled>
)

export default Header