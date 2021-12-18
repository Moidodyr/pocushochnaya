const initialState = {
    menu: [],
    loading: false,
    error: null,
    openItem: null,
    orders: [],
    count: 1,
    isOrderEdit: false
}


const reduser = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_MANU_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_MENU_LOADED':
            return {
                ...state,
                menu: action.menu,
                loading: false,
            }
        case 'FETCH_MENU_ERROR':
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case 'SET_OPEN_ITEM':
            return {
                ...state,
                openItem: action.item
            }
        case 'SET_ORDERS':
            return {
                ...state,
                orders: action.order
            }
        case 'SET_ORDER_EDIT':
            return {
                ...state,
                isOrderEdit: action.bool
            }

        default: return state
    }
}

export default reduser