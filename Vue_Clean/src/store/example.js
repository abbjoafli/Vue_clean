const state = {
  names: ["Hugo","Alex","André"],
  persons: [{name: "Hugo", image: "https://picsum.photos/200/300"},{name: "Björn", image: "https://picsum.photos/200/300"}],
  page: 'Start'
};
const getters = {
    persons: state => {
    return state.persons;
  },
  names: state => {
    return state.names;
  },
  page: state => {
    return state.page;
  },
 
};

const mutations = {
    add_Name (state,name) {
        state.names.push(name);
      },
      change_page (state,page) {
        state.page= page;
      },
}
const actions = {


  addName({ commit }, name) {
    console.log(name + " added");
    commit('add_Name',name);
  },
  changePage({ commit }, page) {
    console.log(page + " choosen");
    commit('change_page',page);
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};