import dayjs from 'dayjs'
import { useEffect, useMemo, useState } from 'react'
import useChatStore from '../../Store/chat'
import useContentStore from '../../Store/content'
import { deleteChat, getChats } from '../../Api'
import { useUserStore } from '../../Store'

const Avatar = ({ data }) => <div
  className="avatar d-none d-xl-inline-block bg-white text-center"
  style={{ overflow: 'hidden' }}
>
  <img
    width={44}
    height={44}
    src={data.avatar || `https://aichatdb.blob.core.windows.net/attachment/defaultAvatar.png`}
  />
</div>

function ChatItem({ data, onDelete, onSelect }) {
  const lastMessage = useMemo(() => {
    if (data?.messages) {
      return data?.messages[data?.messages.length - 1].content
    } else {
      return ''
    }
  }, [data])
  return <div
    className="card border-0"
    style={{ cursor: 'pointer' }}
    onClick={() => onSelect()}
  >
    <div className="card-body">

      <div className="row gx-5">
        <div className="col-auto">
          <Avatar data={data} />
        </div>

        <div className="col">
          <div className="d-flex align-items-center mb-2">
            <h5 className="me-auto mb-0">
              <a href="#">{
                data.title || 'Default Agent'
              }</a>
            </h5>
            {data._ts &&
              <span className="extra-small text-muted ms-2">{
                dayjs(data._ts * 1000).format('hh:mm A')
              }</span>}
          </div>

          <div className="d-flex">
            <div
              className="me-auto" style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
            >{lastMessage}</div>

            <div className="dropdown ms-5">
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
                  className="feather feather-more-horizontal"
                >
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </a>
              <ul className="dropdown-menu">
                <li><a
                  role={'button'}
                  className="dropdown-item text-danger"
                  onClick={(e) => {
                    onDelete(data.id)
                    e.stopPropagation()
                  }}
                >Delete</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
}

export default () => {
  const { email, info, id } = useUserStore()
  const { setInfo, setInit } = useContentStore()
  const { chats, setChats } = useChatStore()
  const sortedChats = useMemo(() => {
    console.log('chats', chats)
    const sortByDate = chats.map(item => dayjs(item._ts * 1000).format(
      'YYYY-MM-DD'))
    const uniqueDates = [...new Set(sortByDate)]
    return uniqueDates.map(date => ({
      date,
      chats: chats.filter(item => dayjs(item._ts * 1000)
      .format('YYYY-MM-DD') === date),
    })).sort((a, b) => dayjs(b.date).unix() - dayjs(a.date).unix())
    .map(item => {
      return {
        chats: item.chats.sort((a, b) => b._ts - a._ts),
        date: (item.date === dayjs().format('YYYY-MM-DD'))
          ? 'Today'
          : item.date,
      }
    })
  }, [chats])
  useEffect(() => {
    id && getChats(id).then(res => {
      setChats(res.sort((a, b) => b._ts - a._ts))
    })
  }, [id])
  const handleDelete = async(id) => {
    setChats(chats.filter(chat => chat.id !== id))
    setInit()
    await deleteChat(id)
  }
  return <div>
    <div
      className="tab-pane fade h-100 active show"
      id="tab-content-notifications"
      role="tabpanel"
    >
      <div className="d-flex flex-column h-100">
        <div className="hide-scrollbar">
          <div
            className="container py-8" style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
          }}
          >

            <div className="mb-8">
              <h2 className="fw-bold m-0">Chats</h2>
            </div>

            <div
              className="list-wrapper" style={{
              flex: 1,
              height: 'calc(100vh - 3rem - 42px)',
              overflowY: 'auto',
            }}
            >
              {
                sortedChats.map(sortedChat => <div
                  className="card-list mt-8"
                  key={sortedChat.date}
                >

                  <div className="d-flex align-items-center my-4 px-6">
                    <small className="text-muted me-auto">{sortedChat.date}</small>

                    {/*<a href="#" className="text-muted small">Clear all</a>*/}
                  </div>
                  {
                    sortedChat.chats.map(chat => <ChatItem
                      key={chat.id}
                      onSelect={() => setInfo({
                        id: chat.id,
                        key: chat.key,
                        messages: chat.messages,
                        model: chat.model || 'gpt-3.5-turbo',
                        input: '',
                        isTyping: false,
                        avatar: chat.avatar,
                        title: chat.title,
                      })}
                      onDelete={handleDelete}
                      data={chat}
                    />)
                  }
                </div>)
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}
