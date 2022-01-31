import { createStore } from "vuex"

const store = createStore({
    state(){ return {
        currentUserData : {
            name : "박희찬",
            year : 1,
            class : 4,
            number : 13
        }
    }
    },
})

export default store