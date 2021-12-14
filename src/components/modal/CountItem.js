import { useState } from "react";
import { BtnCount, CountInput, CountWrapper } from "./ModalStyled"



const CountItem = () => {
    const [count, setCount] = useState(1),
          onChange = e => setCount(e.target.value)

    return (
    <CountWrapper>
        <span>Количество</span>
        <div>
            <BtnCount disabled={count <= 1} onClick={() => setCount(count - 1)}>-</BtnCount>
            <CountInput type='number' min='1' max='100' value={count < 1 ? 1 : count} onChange={onChange}/>
            <BtnCount onClick={() => setCount(count + 1)}>+</BtnCount>
        </div>
    </CountWrapper>
    )
};

export default CountItem;