export const authorModule = {

    state: ()=> ({
        authors: [],
        searchQuery: '',
    }),
    getters:{
        getAuthors(state){
            return state.authors
        },
        searchAuthors(state){
            return state.authors.filter(aut=> aut.name.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }
    },
    mutations:{
        setAuthors(state,authors){
            state.authors = authors
        },
        setSearchQuery(state,searchQuery){
            state.searchQuery = searchQuery
        },
    },
    actions:{
        async receiveAuthor({state,commit}){

            let response = await fetch("http://127.0.0.1:8000/api/Authors/");
            let temp = await response.json();
            console.log(temp);
            commit('setAuthors',temp)
        }
    },
    namespaced: true,
}