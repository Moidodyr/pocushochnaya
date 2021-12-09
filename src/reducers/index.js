const initialState = {
    menu: [],
    loading: false,
    error: null,
    openItem: null
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
            const item = action.item
            return {
                ...state,
                openItem: item
            }
        
        default: return state
    }
}

export default reduser