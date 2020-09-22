export function addToCart(payload) {
    return{
        type: 'ADD_TO_CART',
        // payload: 
        // {
        //     "id": 1,
        //     "name": "Sneakerși piele Massimo Dutti",
        //     "price": 135,
        //     "currency": "LEI",
        //     "image": "https://i.imgur.com/Rz8lVQa.jpg"
        // }
        payload
    }
}

export function removeFromCart(payload) {
    return{
        type: 'REMOVE_FROM_CART',
        payload
    }
}