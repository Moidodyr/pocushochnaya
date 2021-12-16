import { BtnCount, Count, CountInput, CountWrapper } from "./ModalStyled"


const CountItem = ({count, setCount, onChange}) =>{
    return (
        <CountWrapper>
            <span>Количество:</span>
            <Count>
                <BtnCount disabled={count <= 1} onClick={() => setCount(count - 1)}>-</BtnCount>
                <CountInput type='number' min='1' max='100' value={count < 1 ? 1 : count} onChange={onChange}/>
                <BtnCount onClick={() => setCount(count + 1)}>+</BtnCount>
            </Count>
        </CountWrapper>
    )
};

export default CountItem;