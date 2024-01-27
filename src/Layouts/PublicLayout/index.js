import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { Navigate, Outlet, useNavigate } from 'react-router'
import '../../Assets/PublicLayout.css'
import { useUserStore } from '../../Store'
import useFirebase from '../../Hooks/useFirebase'
import Chat from '../../Components/Chat'
import Nav from './Nav'

export default () => {
  const auth = getAuth()
  console.log(auth)
  const { set: setUser } = useUserStore()
  const navigate = useNavigate()
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
  return <div className={'layout overflow-hidden'}>
    <Nav />
    <aside className={'sidebar bg-light'}>
      <Outlet></Outlet>
    </aside>
    <Chat />
  </div>

}
