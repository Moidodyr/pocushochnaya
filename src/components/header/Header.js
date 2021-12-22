import { HeaderStyled, Logo, LogoIcon, HeaderTitle } from './HeaderStyled'
import { Auth } from './HeaderStyled'
import { Icon } from '../UI/Icon'
import { faBurger } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
 

const Header = ({authenticated, logIn, logOut}) => (
    <HeaderStyled>
        <Logo>
            <LogoIcon icon={faBurger} />
            <HeaderTitle>Pocushochnaya</HeaderTitle>
        </Logo>
        <Auth>
            {!authenticated
                ? <>
                    <Icon icon={faArrowRightToBracket} onClick={logIn}/>
                  </>
                : <>
                    {authenticated.displayName}
                    <Icon icon={faArrowRightFromBracket} onClick={logOut}/>
                  </>
            }    
        </Auth>
    </HeaderStyled>
)

export default Header