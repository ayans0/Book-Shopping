import { ADD_ADVENTURE_TO_CART, ADD_ADVENTURE_TO_LIST, ADD_BOOKS_TO_CART, ADD_BOOKS_TO_LIST, ADD_CLASSIC_TO_CART, ADD_CLASSIC_TO_LIST, ADD_DETECTIVE_TO_CART, ADD_DETECTIVE_TO_LIST, ADD_PHILOSOPHY_TO_CART, ADD_PHILOSOPHY_TO_LIST, ADD_POEM_TO_CART, ADD_POEM_TO_LIST, ADD_PSYCHOLOGY_TO_CART, ADD_PSYCHOLOGY_TO_LIST, ADD_ROMANCE_TO_CART, ADD_ROMANCE_TO_LIST, ADD_SCIENCE_TO_CART, ADD_SCIENCE_TO_LIST, ADD_THRILLER_TO_CART, ADD_THRILLER_TO_LIST, REMOVE_FROM_CART, REMOVE_FROM_LIST, RESET_CART, RESET_LIST } from "./ActionsNames"

export const addAdventureToCart = (index) => {
    return {
        type: ADD_ADVENTURE_TO_CART,
        payload: index
    }
}

export const addClassicToCart = (index) => {
    return {
        type: ADD_CLASSIC_TO_CART,
        payload: index
    }
}

export const addDetectiveToCart = (index) => {
    return {
        type: ADD_DETECTIVE_TO_CART,
        payload: index
    }
}

export const addPhilosophyToCart = (index) => {
    return {
        type: ADD_PHILOSOPHY_TO_CART,
        payload: index
    }
}


export const addPoemToCart = (index) => {
    return {
        type: ADD_POEM_TO_CART,
        payload: index
    }
}

export const addPsychologyToCart = (index) => {
    return {
        type: ADD_PSYCHOLOGY_TO_CART,
        payload: index
    }
}

export const addRomanceToCart = (index) => {
    return {
        type: ADD_ROMANCE_TO_CART,
        payload: index
    }
}

export const addScienceToCart = (index) => {
    return {
        type: ADD_SCIENCE_TO_CART,
        payload: index
    }
}

export const addThrillerToCart = (index) => {
    return {
        type: ADD_THRILLER_TO_CART,
        payload: index
    }
}

export const addBooksToCart = (index) => {
    return {
        type: ADD_BOOKS_TO_CART,
        payload: index
    }
}

//******************************************************************** */

export const addAdventureToList = (index) => {
    return {
        type: ADD_ADVENTURE_TO_LIST,
        payload: index
    }
}

export const addClassicToList = (index) => {
    return {
        type: ADD_CLASSIC_TO_LIST,
        payload: index
    }
}

export const addDetectiveToList = (index) => {
    return {
        type: ADD_DETECTIVE_TO_LIST,
        payload: index
    }
}

export const addPhilosophyToList = (index) => {
    return {
        type: ADD_PHILOSOPHY_TO_LIST,
        payload: index
    }
}


export const addPoemToList = (index) => {
    return {
        type: ADD_POEM_TO_LIST,
        payload: index
    }
}

export const addPsychologyToList = (index) => {
    return {
        type: ADD_PSYCHOLOGY_TO_LIST,
        payload: index
    }
}

export const addRomanceToList = (index) => {
    return {
        type: ADD_ROMANCE_TO_LIST,
        payload: index
    }
}

export const addScienceToList = (index) => {
    return {
        type: ADD_SCIENCE_TO_LIST,
        payload: index
    }
}

export const addThrillerToList = (index) => {
    return {
        type: ADD_THRILLER_TO_LIST,
        payload: index
    }
}
export const addBooksToList = (index) => {
    return {
        type: ADD_BOOKS_TO_LIST,
        payload: index
    }
}



export const resetCart = (index) => {
    return {
        type: RESET_CART
    }
}

export const resetList = (index) => {
    return {
        type: RESET_LIST
    }
}

export const removeFromCart = (index) => {
    return {
        type: REMOVE_FROM_CART,
        payload: index
    }
}

export const removeFromList = (index) => {
    return {
        type: REMOVE_FROM_LIST,
        payload: index
    }
}