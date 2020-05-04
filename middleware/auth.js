import Cookie from 'js-cookie'

export default function({store, redirect, route, req, res, app}) {
  return new Promise( resolve => {
    const path = route.path
    const whitelist_paths = ['/', '/login', '/signup']
    const path_whitelisted = whitelist_paths.includes(path)

    return resolve()

    if (path_whitelisted) return resolve()

    if (store.state.currentUser) {
      /*if (!company) return redirect(`//${process.env.www}/registration`)*/

      return resolve()
    }

    Cookie.remove('access-token')
    app.$axios.setToken(false)

    return redirect(`/login`)
  })
}
