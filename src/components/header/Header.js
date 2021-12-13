import { HeaderStyled, Logo, LogoIcon, HeaderTitle } from './HeaderStyled'
import { Auth } from './HeaderStyled'
import { Icon } from '../UI/Icon'
import { faBurger } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
 

const Header = () => (
    <HeaderStyled>
        <Logo>
            <LogoIcon icon={faBurger} />
            <HeaderTitle>Pocushochnaya</HeaderTitle>
        </Logo>
        <Auth>
            {1 ? <Icon icon={faArrowRightToBracket} />
                : <Icon icon={faArrowRightFromBracket} />
            }    
        </Auth>
    </HeaderStyled>
)

export default Header