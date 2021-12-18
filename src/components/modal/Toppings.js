import { ToppingCheckbox, ToppingLabel, ToppingWrap } from "./ModalStyled"

const Toppings = ({toppings, checkToppings}) => {
    return (
        <>
            <h3>Добавки:</h3>
            <ToppingWrap>
                {toppings.map((topping, i) => (
                    <ToppingLabel key={i}>
                    <ToppingCheckbox
                        type='checkbox'
                        checked={topping.checked}
                        onChange={() => checkToppings(i)} />
                        {topping.name}
                    </ToppingLabel>
                ))}
            </ToppingWrap>
        </>
    )
}

export default Toppings