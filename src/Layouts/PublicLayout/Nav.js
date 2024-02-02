import { useMemo } from 'react'
import { useMatches, useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import useBotStore from '../../Store/bot'
import useChatStore from '../../Store/chat'
import useFirebase from '../../Hooks/useFirebase'
import useContentStore from '../../Store/content'
import { useUserStore } from '../../Store'

export default () => {
  const { email, info, id, set } = useUserStore()
  const { logout } = useFirebase()
  const { setInit } = useContentStore()
  const { resetInfo } = useBotStore()
  const { setChats } = useChatStore()

  const matchRouters = useMatches()
  const navigate = useNavigate()
  const currentPath = useMemo(() => {
    const last = matchRouters[matchRouters.length - 1]
    return last?.pathname
  }, [matchRouters])

  const handleLogOut = () => {
    logout()
    sessionStorage.clear()
    setInit()
    resetInfo()
    setChats([])
    set({
      email: null,
      id: null,
      info: {},
      chat: [],
    })
    navigate({ pathname: '/auth/oauth2' })
  }
  return <nav className="navigation d-flex flex-column text-center navbar navbar-light hide-scrollbar">
    <a href="index.html" title="Messenger" className="d-none d-xl-block mb-6">
      <svg
        version="1.1"
        width="46px"
        height="46px"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 46 46"
        enableBackground="new 0 0 46 46"
      >
        <polygon
          opacity="0.7"
          points="45,11 36,11 35.5,1 "
        ></polygon>
        <polygon points="35.5,1 25.4,14.1 39,21 "></polygon>
        <polygon opacity="0.4" points="17,9.8 39,21 17,26 "></polygon>
        <polygon opacity="0.7" points="2,12 17,26 17,9.8 "></polygon>
        <polygon opacity="0.7" points="17,26 39,21 28,36 "></polygon>
        <polygon points="28,36 4.5,44 17,26 "></polygon>
        <polygon points="17,26 1,26 10.8,20.1 "></polygon>
      </svg>

    </a>

    <ul
      className="d-flex nav navbar-nav flex-row flex-xl-column flex-grow-1 justify-content-between justify-content-xl-center align-items-center w-100 py-4 py-lg-2 px-lg-3"
      role="tablist"
    >
      <li className="nav-item d-none d-xl-block invisible flex-xl-grow-1">
        <a className="nav-link py-0 py-lg-8" href="#" title="">
          <div className="icon icon-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-x"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
        </a>
      </li>

      <li className="nav-item">
        <a
          className="nav-link py-0 py-lg-8"
          id="tab-create-chat"
          onClick={() => setInit()}
          title="Create chat"
          role="tab"
          aria-selected="true"
        >
          <div className="icon icon-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-edit-3"
            >
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
          </div>
        </a>
      </li>
      <li className="nav-item">
        <Link
          className={`nav-link py-0 py-lg-8 ${currentPath === '/'
            ? 'active'
            : ''}`}
          id="tab-chats"
          to="/"
          title="Chats"
          role="tab"
        >
          <div className="icon icon-xl icon-badged">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-message-square"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="badge badge-circle bg-primary">
              <span>4</span>
            </div>
          </div>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={`nav-link py-0 py-lg-8 ${currentPath === '/bots'
            ? 'active'
            : ''}`}
          id="tab-friends"
          to="/bots"
          title="Friends"
          role="tab"
        >
          <div className="icon icon-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-users"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
        </Link>
      </li>

      <li className="nav-item d-none d-xl-block flex-xl-grow-1">
        <Link
          className={`nav-link py-0 py-lg-8 ${currentPath === '/public'
            ? 'active'
            : ''}`}
          id="tab-support"
          to={'/public'}
          title="Support"
          role="tab"
        >
          <div className="icon icon-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-layout"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
          </div>
        </Link>
      </li>

      <li className="nav-item">
        <a
          className="nav-link py-0 py-lg-8"
          id="tab-settings"
          onClick={handleLogOut}
          title="Settings"
          data-bs-toggle="tab"
          role="tab"
          aria-selected="false"
        >
          <div className="icon icon-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="feather feather-layout"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0z"
              />
              <path
                fill-rule="evenodd"
                d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708z"
              />
            </svg>
          </div>
        </a>
      </li>

      <li className="nav-item d-none d-xl-block">
        <div className="dropdown">
          <a
            role={'button'}
            className="nav-link p-0 mt-lg-2"
            aria-expanded="false"
          >
            <div className="avatar avatar-online mx-auto bg-success align-content-center justify-content-center">
              {
                info.photoURL
                  ? <img className="avatar-img" src={info.photoURL} alt="" />
                  : <span>{email ? email.slice(0, 1) : 'U'}</span>
              }
            </div>
          </a>
          <ul className="dropdown-menu">
            <li onClick={() => handleLogOut()}>
              <a role={'button'} className="dropdown-item text-danger">Log
                out</a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
}
