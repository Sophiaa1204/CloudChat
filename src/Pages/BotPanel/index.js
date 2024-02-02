import dayjs from 'dayjs'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router'
import * as uuid from 'uuid'
import useBotStore from '../../Store/bot'
import useContentStore from '../../Store/content'

import {
  copyBot,
  createOrUpdateMessages,
  deleteBot,
  getPublicBots,
  getUserBots,
} from '../../Api'
import { useUserStore } from '../../Store'

function BotItem({ data, isPublic }) {
  const { setInfo, deleteBot: removeBot } = useBotStore()
  const { id: userId } = useUserStore()
  const { setInfo: setContent } = useContentStore()
  const navigateTo = useNavigate()
  const handleCreateChat = async() => {
    const messages = [
      { role: 'system', content: data.prompt, time: dayjs().format('hh:mm A') },
    ]
    const resp = await createOrUpdateMessages({
      messages,
      id: uuid.v4(),
      model: 'gpt-3.5-turbo',
      key: '',
      userId,
      avatar: data.avatar,
      title: data.title,
    })
    setContent({
      id: resp.id,
      model: resp.model,
      messages: resp.messages,
      key: resp.key,
      input: '',
      isTyping: false,
      avatar: data.avatar,
      title: data.title,
    })
    navigateTo({ pathname: '/' })
  }
  const handleDelete = () => {
    deleteBot(data.id)
    removeBot(data.id)
  }
  const setBot = () => {
    if (isPublic) {
      setInfo({
        ...data,
        disabled: true,
      })
    } else {
      setInfo(data)
    }
  }

  const handleCopy = async() => {
    copyBot({
      BotId: data.id,
      userId,
      copyBotId: uuid.v4(),
    })
  }
  return <div
    onClick={setBot}
    className="card border-0"
    style={{ cursor: 'pointer' }}
  >
    <div className="card-body">

      <div className="row align-items-center gx-5">
        <div className="col-auto">
          <span className="avatar ">
            <img className="avatar-img" src={data.avatar} alt="" />
          </span>
        </div>

        <div className="col">
          <h5>{data.title}</h5>
          <p>{data.description}</p>
        </div>

        <div className="col-auto">
          {
            isPublic
              ? <button
                className={'btn btn-dark btn-sm'}
                onClick={handleCopy}
              >Copy</button>
              : <div className="dropdown">
                <a
                  className="icon text-muted"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
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
                    className="feather feather-more-vertical"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="12" cy="5" r="1"></circle>
                    <circle cx="12" cy="19" r="1"></circle>
                  </svg>
                </a>

                <ul className="dropdown-menu">
                  <li onClick={() => handleCreateChat()}>
                    <a role={'button'} className="dropdown-item">New message</a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li onClick={() => handleDelete()}>
                    <a role={'button'} className="dropdown-item text-danger">Delete
                      Bot</a>
                  </li>
                </ul>
              </div>
          }
        </div>

      </div>

    </div>
  </div>
}

export default ({ isPublic }) => {
  const { id: userId } = useUserStore()
  const { setBots, bots, resetInfo } = useBotStore()
  const [queryString, setQueryString] = useState('')
  const getUserData = async() => {
    const data = await getUserBots(userId)
    setBots(data)
  }
  useEffect(() => {
    setBots([])
  }, [isPublic])
  const getPublicData = async() => {
    const data = await getPublicBots()
    setBots(data)
  }

  const filteredBots = useMemo(() => queryString
      ? bots.filter(bot => bot.title.includes(queryString))
      : bots
    , [bots, queryString])
  useEffect(() => {
    if (userId) {
      if (isPublic) {
        getPublicData()
      } else {
        getUserData()
      }
    }
  }, [isPublic, userId])
  return <div>
    <div
      className="tab-pane fade h-100 active show"
      id="tab-content-friends"
      role="tabpanel"
    >
      <div className="d-flex flex-column h-100">
        <div className="hide-scrollbar">
          <div className="container py-8">

            <div className="mb-8">
              <h2 className="fw-bold m-0">{
                isPublic ? 'Explore' : 'Bots'
              }</h2>
            </div>

            <div className="mb-6">
              <form action="#">
                <div className="input-group">
                  <div className="input-group-text">
                    <div className="icon icon-lg">
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
                        className="feather feather-search"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </div>
                  </div>

                  <input
                    type="text"
                    className="form-control form-control-lg ps-0"
                    placeholder="Search bot"
                    value={queryString}
                    onChange={e => setQueryString(e.target.value)}
                  />
                </div>
              </form>

              {!isPublic && <div className="mt-5">
                <a
                  role={'button'}
                  className="btn btn-lg btn-primary w-100 d-flex align-items-center"
                  onClick={() => resetInfo()}
                >
                  Create bot
                  <span className="icon ms-auto">
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
                                                      className="feather feather-user-plus"
                                                    ><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle
                                                      cx="8.5"
                                                      cy="7"
                                                      r="4"
                                                    ></circle><line
                                                      x1="20"
                                                      y1="8"
                                                      x2="20"
                                                      y2="14"
                                                    ></line><line
                                                      x1="23"
                                                      y1="11"
                                                      x2="17"
                                                      y2="11"
                                                    ></line></svg>
                                                </span>
                </a>
              </div>}
            </div>

            <div className="card-list">
              {filteredBots.map(bot => <BotItem
                isPublic={isPublic}
                key={bot.BotId}
                data={bot}
              />)}

            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
}
