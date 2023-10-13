
const dailyWeath = (state = [], action) => {
    switch (action.type) {
        case "SET_DAILY":
            return action.payload
        default: return state;
    }
}

export default dailyWeath;

