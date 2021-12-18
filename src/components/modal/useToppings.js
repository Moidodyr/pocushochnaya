import {useState} from 'react'

const getTopping = toppings => toppings.map(topping => ({
    name: topping,
    checked: false
}))

export const useToppings = openItem => {
    const isTopping = openItem.topping
        ? openItem.topping
        : openItem.toppings
            ? getTopping(openItem.toppings)
            : []
    const [toppings, setToppings] = useState(isTopping);
    const checkToppings = index => {
        setToppings(toppings.map((item, i) => {
            if (i === index) {
                item.checked = !item.checked
            }
            return item
        }));
    };
    return {toppings, checkToppings}
}