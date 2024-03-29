import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useMemo } from 'react'
import {
  Navigate,
  Outlet,
  useMatch,
  useMatches,
  useNavigate,
} from 'react-router'
import '../../Assets/PublicLayout.css'
import Bot from '../../Components/Bot'
import { useUserStore } from '../../Store'
import useFirebase from '../../Hooks/useFirebase'
import Chat from '../../Components/Chat'
import Nav from './Nav'

export default () => {
  const auth = getAuth()
  console.log(auth)
  const { set: setUser } = useUserStore()
  const navigate = useNavigate()
  const matchRouters = useMatches()
  const currentPath = useMemo(() => {
    const last = matchRouters[matchRouters.length - 1]
    return last?.pathname
  }, [matchRouters])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate({ pathname: '/auth/oauth2' })
      } else {
        console.log('user', user)
        setUser({
          email: user.email,
          id: user.uid,
          info: {
            displayName: user.displayName,
            photoURL: user.photoURL,
            phoneNumber: user.phoneNumber,
          },
        })
      }
    })
  }, [])

  return <div className={'layout overflow-hidden'}>
    <Nav />
    <aside className={'sidebar bg-light'}>
      <Outlet />
    </aside>
    {
      currentPath === '/' ? <Chat /> : <Bot />

    }
  </div>

}
