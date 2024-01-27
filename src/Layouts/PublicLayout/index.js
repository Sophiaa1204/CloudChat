import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { Navigate, Outlet } from 'react-router'
import '../../Assets/PublicLayout.css'
import useUserStore from 'src/Store/user'
import useFirebase from '../../Hooks/useFirebase'
import Chat from '../../Components/Chat'
import Nav from './Nav'

export default () => {
  const auth = getAuth()
  const { set: setUser } = useUserStore()
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      return <Navigate to={'/auth/oauth2'} replace={true} />
    } else {
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
