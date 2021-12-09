import axios from "axios"


export const fetchMenu = () => {
    return dispatch => {
        dispatch(fetchMenuRequest())
        axios(`db.json`)
            .then(res => {
                const menu =  res.data
                dispatch(fetchMenuLoaded(menu))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchMenuError(errorMsg))
            })
    }
}


const fetchMenuRequest = () => {
    return {
        type: 'FETCH_MENU_REQUEST'
    }
}

const fetchMenuLoaded = menu => {
    return {
        type: 'FETCH_MENU_LOADED',
        menu
    }
}

const fetchMenuError = error => {
    return {
      type: 'FETCH_MENU_ERROR',
      error
    }
}

export const setOpenItem = item => {
    return {
        type: 'SET_OPEN_ITEM',
        item
    }
}
