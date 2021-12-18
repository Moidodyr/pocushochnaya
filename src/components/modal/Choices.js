import { ChoiceLabel, ChoiceRadio, ChoicesWrap } from "./ModalStyled"


const Choices = ({ openItem, choice, changeChoices }) => {
    return (
        <ChoicesWrap>
            {openItem.choices.map((item, i) => (
            <ChoiceLabel key={i}>
                <ChoiceRadio
                type='radio'
                name='choices'
                checked={choice === item}
                value={item}
                onChange={changeChoices} />
                {item}
            </ChoiceLabel>
            ))}
        </ChoicesWrap>
    )
}

export default Choices