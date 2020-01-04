const initialState = {
    customers: [
        {
            name: "Ashish",
            phone: 9540317803,
            address: "delhi 110092",
            membership: "golden",
            id: 101
        }
    ],
    loading: false,
    loaded: true
}    

export function CustomerReducer ( state = initialState, action ){
    switch(action.type) {
        case "LOAD_CUSTOMERS": {
            return {
                ...state,
                loading: true,
                loaded: false
            }
        }
        default: {
            return state;
        }
    }
}