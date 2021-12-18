import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { Container } from "../UI/Container"
import { FooterStyled, Icon, GitIcon } from "./FooterStyled"


const Footer = () => (
    <FooterStyled>
        <Container>
            <span>Мой github: </span>
            <a href='https://github.com/Moidodyr'>
                <Icon>
                    <GitIcon icon={faGithub} />
                </Icon>
            </a>
        </Container>
    </FooterStyled>
)


export default Footer