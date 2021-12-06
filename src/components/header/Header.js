import { HeaderStyled } from './HeaderStyled'
import logo from '../../assets/img/logo.png'
import { SignIn, SignInIcon } from './HeaderStyled'
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
 

const Header = () => (
    <HeaderStyled>
        <img src={logo} alt="" />
        <SignIn>
        <SignInIcon icon={faArrowRightToBracket} />
        </SignIn>
    </HeaderStyled>
)

export default Header