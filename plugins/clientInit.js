import Cookie from 'js-cookie'

export default async function ({app}) {
  const token = Cookie.get('access-token', {domain: process.env.host})

  console.log('this is the token: ', token)

  if (!token) return
  
  app.$axios.setToken(token, 'Bearer')

  return app.$axios.get('/auth/currentSession')
    .then(res => {
      app.store.commit('setSession', res.data)
    })
    .catch(err => {
      Cookie.remove('access-token')
      app.$axios.setToken(false)
    })
}