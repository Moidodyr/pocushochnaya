const initialState = {
    menu: [],
    loading: false,
    error: null
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
                error: '',
            }
        case 'FETCH_MENU_ERROR':
            return {
                menu: [],
                loading: false,
                error: action.error
            }
        
        default: return state
    }
}

export default reduser