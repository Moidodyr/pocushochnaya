import  styled from 'styled-components'


export const Button = styled.button`
    align-items: center;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    border: 1px solid #693623;
    border-radius: 0.6em;
    color: #693623;
    cursor: pointer;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    margin: 20px;
    padding: 1.2em 2.8em;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    -webkit-transition: box-shadow .4s ease-in-out, color .4s ease-in-out;
    transition: box-shadow .4s ease-in-out, color .4s ease-in-out;

    &:hover, &btn:focus {
        color: #fff;
        outline: 0;
    }

    &:hover {
        box-shadow: 0 0 40px 40px #693623 inset;
        transform: translateY(3px)
    }
`