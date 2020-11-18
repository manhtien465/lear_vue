import AuthenticationService from "@/services/AuthenticationService";


const state = {
    url: "http://localhost:3001", //process.env.VUE_APP_URL,
    token: localStorage.getItem('token') || null,
    user: JSON.parse(localStorage.getItem('user')) || null,
    isUserLoggedIn: localStorage.getItem('token') || false
  }

const getters = {
    getUrl: (state) => {
      return state.url
    },
    isAuthenticated: (state) => {
      return state.isUserLoggedIn
    },
    getToken: (state) => {
      return state.token
    },
    currentUser: (state) => {
      return state.user
    }
}
const mutations = {
    SET_TOKEN(state, token) {
        state.token = token
        if (token) {
          state.isUserLoggedIn = true
        } else {
          state.isUserLoggedIn = false
        }
      },
      SET_USER_DATA(state, data) {
        state.user = data
      },
      CLEAR_AUTH(state) {
        state.token = null
        state.user = null
        state.isUserLoggedIn = false
      }

}
const actions = {
    signUp({ commit }, credentials) {
        return new Promise((resolve, reject) => {
          AuthenticationService.signUp(credentials)
            .then(({ data }) => {
              commit('SET_TOKEN', data.token)
              localStorage.setItem('token', data.token)
              resolve(data)
            })
            .catch((err) => reject(err))
        })
      },

}
export default {
    state,
    getters,
    mutations,
    actions
  }