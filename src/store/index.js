import { createStore } from "vuex";
import {authorModule} from '@/store/authorModule'

export default createStore({

    modules:{
        authors: authorModule
    },

})