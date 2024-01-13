import { Outlet } from 'react-router'
import '../../Assets/PublicLayout.css'
import Chat from '../../Components/Chat'
import Nav from './Nav'

export default () => {

  return <div className={'layout overflow-hidden'}>
    <Nav />
    <aside className={'sidebar bg-light'}>
      <Outlet></Outlet>
    </aside>
    <Chat />
  </div>
}
