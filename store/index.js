import Cookie from 'js-cookie'

export const state = () => ({
  currentSession: {},
  currentUser: null
})

export const getters = {

}

export const mutations = {
  setCurrentUser (state, user) {
    state.currentUser = user
  },
  setSession (state, session) {
    state.currentSession = session
  },
  setLogOutSession (state) {
    state.currentSession = null
    state.currentUser = null
  }
}

export const actions = {
  login ({commit, dispatch}, {email, password}) {
    return this.$axios.post('/auth/login', {email, password})
      .then(res => {
        const {email, access_token} = res.data

        Cookie.set('access-token', access_token, {domain: process.env.host})
        this.$axios.setToken(access_token, 'Bearer')

        return email
      })
  },

  logOut({commit, dispatch}) {
    commit('setLogOutSession')
    Cookie.remove('access-token', {domain: process.env.host})

    if(process.env.env == 'dev') Cookie.remove('access-token')

    this.$axios.setToken(false)
    return
  }
}