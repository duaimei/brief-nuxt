import InternalApi from '@/api/InternalService'
export const state = () => ({
  list: {},
  animals: [],
  index: ''
})

export const getters = {
  list: (state) => state.list,
  animals: (state) => state.animals,
  index: (state) => state.index
}
export const actions = {
  getList({ commit }) {
    // const message = AnimalService.list()
    commit('SET_LIST', 'message.data')
  },
  getAnimals({ commit }) {
    console.log('startet to get animals')
    InternalApi.animals().then(result => {
      commit('SET_ANIMALS', result.data)
    })
    // const result = AnimalService.listAll()
  },
  getIndex({ commit }) {
    InternalApi.index().then(result => {
      commit('SET_INDEX', result.data)
    })
   
  }
}

export const mutations = {
  SET_LIST(state, list) {
    state.list = list
  },
  SET_ANIMALS(state, animals) {
    state.animals = animals
  },
  SET_INDEX(state, index) {
    state.index = index
  }
}
