function habitsReducer(state = [], action) {
    switch (action.type) {
        case "ADD_HABIT":
            console.log("ADD_HABIT")
            break
        case "REMOVE_HABIT":
            console.log("REMOVE_HABIT")
            break
        case "UPDATE_HABIT":
            console.log("UPDATE_HABIT")
            break
        default:
            return state
    }
}

export default habitsReducer;