
const weatherReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_WEATHER":
            const { data } = action.payload;
            return data;
        default: return state;
    }
}

export default weatherReducer;

