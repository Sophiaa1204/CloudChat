import {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useUserStore } from '../../Store'
import useContentStore from '../../Store/content'

const MessageAction = ({ role, onEdit, onCopy, onRefresh, isLast }) => {

  return <div className="message-action">
    <div className="dropdown">
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
        {role === 'user' && <li>
          <button
            onClick={onEdit}
            className="dropdown-item d-flex align-items-center"
          >
            <span className="me-auto">Edit</span>
            <div className="icon">
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
          </button>
        </li>}
        {
          role !== 'user' && <li>
            <button
              onClick={onCopy}
              className="dropdown-item d-flex align-items-center"
            >
              <span className="me-auto">Copy</span>
              <div className="icon">
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
                  className="feather feather-corner-up-left"
                >
                  <polyline points="9 14 4 9 9 4"></polyline>
                  <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
                </svg>
              </div>
            </button>
          </li>
        }
        {
          role !== 'user' && isLast && <li>
            <button
              onClick={onRefresh}
              className="dropdown-item d-flex align-items-center"

            >
              <span className="me-auto">Refresh</span>
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-clockwise"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"
                  />
                  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
                </svg>
              </div>
            </button>
          </li>
        }

      </ul>
    </div>
  </div>
}
const ContentEdit = forwardRef(({ defaultContent }, ref) => {
    const [input, setInput] = useState(defaultContent)
    const currentRows = useMemo(() => input.split('\n').length, [input])
    useImperativeHandle(ref, () => ({
      input,
    }), [input])
    return <textarea
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className="form-control"
      placeholder="Type your message..."
      rows="1"
      data-autosize="true"
      style={{
        overflowY: 'auto',
        overflowWrap: 'break-word',
        resize: 'none',
        height: 23 + (currentRows > 15 ? 15 : currentRows) * 24,
      }}
    ></textarea>
  },
)
const ContentBody = ({
  file,
  content,
  role,
  onEdit,
  onCopy,
  onRefresh,
  isLast,
}) => {

  return <div className="message-content">
    <div className="message-text">
      {
        file && <blockquote className="blockquote overflow-hidden">
          <div className="row align-items-center gx-4">
            <div className="col-auto"><a
              href="#"
              className="avatar avatar-sm"
            >
              <div className="avatar-text bg-white text-primary">
                {
                  file.type.includes('image')
                    ? <img
                      src={'https://offsetcode.com/themes/messenger/2.2.0/assets/img/avatars/11.jpg'}
                      className={'img-fluid rounded'}
                    />
                    : <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-arrow-down"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <polyline points="19 12 12 19 5 12"></polyline>
                    </svg>
                }
              </div>
            </a></div>
            <div className="col overflow-hidden">
              <h6 className="text-truncate text-reset"><a
                href="#"
                className="text-reset"
              >filename.json</a></h6>
              <ul className="list-inline text-uppercase extra-small opacity-75 mb-0">
                <li className="list-inline-item">79.2 KB</li>
              </ul>
            </div>
          </div>
        </blockquote>
      }
      <p>{content}</p>
    </div>

    <MessageAction
      isLast={isLast}
      role={role}
      onEdit={onEdit}
      onCopy={onCopy}
      onRefresh={onRefresh}
    />
  </div>
}

const CancelButton = ({ onClick }) => {

  return <button
    onClick={onClick}
    className="btn btn-sm btn-icon btn-secondary rounded-circle ms-3"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-x-lg"
      viewBox="0 0 16 16"
    >
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
    </svg>
  </button>
}

const SubmitButton = ({ onClick }) => {

  return <button
    onClick={onClick}
    className="btn btn-sm btn-icon btn-primary rounded-circle ms-3"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-send"
    >
      <line x1="22" y1="2" x2="11" y2="13"></line>
      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
  </button>
}
const MessageItem = ({ role, content, time, file, onSubmit, isLast }) => {
  const { email, info, id } = useUserStore()
  const [isEdit, setIsEdit] = useState(false)
  const contentEditRef = useRef(null)
  const handleSubmit = () => {
    if (contentEditRef.current) {
      onSubmit(contentEditRef.current.input)
    }
    setIsEdit(false)
  }
  return <div className={`message ${role === 'user' ? 'message-out' : ''}`}>
    <a
      href="#"
      data-bs-toggle="modal"
      data-bs-target="#modal-user-profile"
      className="avatar avatar-responsive"
    >
      <img
        className="avatar-img"
        src={role === 'user'?(info.photoURL||"https://offsetcode.com/themes/messenger/2.2.0/assets/img/avatars/11.jpg"):"https://static.vecteezy.com/system/resources/previews/021/059/827/non_2x/chatgpt-logo-chat-gpt-icon-on-white-background-free-vector.jpg"}
        alt=""
      />
    </a>

    <div className="message-inner">
      <div className="message-body">
        {
          isEdit
            ? <ContentEdit ref={contentEditRef} defaultContent={content} />
            : <ContentBody
              isLast={isLast}
              role={role}
              content={content}
              file={file}
              onRefresh={onSubmit}
              onEdit={() => setIsEdit(true)}
              onCopy={() => navigator.clipboard.writeText(content)} //TODO UX purpose
            />
        }
      </div>
      <div className="message-footer">
        {
          isEdit
            ? <>
              <CancelButton onClick={() => setIsEdit(false)} />
              <SubmitButton onClick={() => handleSubmit()} />
            </>
            : <span className="extra-small text-muted">{time}</span>
        }

      </div>
    </div>
  </div>
}

const TypingItem = ({ sender, content }) => {

  return <div className={`message ${sender ? 'message-out' : ''}`}>
    <a
      href="#"
      data-bs-toggle="modal"
      data-bs-target="#modal-user-profile"
      className="avatar avatar-responsive"
    >
      <img
        className="avatar-img"
        src="https://offsetcode.com/themes/messenger/2.2.0/assets/img/avatars/11.jpg"
        alt=""
      />
    </a>

    <div className="message-inner">
      <div className="message-inner">
        <div className="message-body">
          <div className="message-content">
            <div className="message-text">
              <p>Cloud Chat Bot is
                typing<span className="typing-dots"><span>.</span><span>.</span><span>.</span></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

const DateDivider = ({ date }) => {

  return <div className="message-divider">
    <small className="text-muted">{date}</small>
  </div>
}

export default ({ onRegenerate }) => {
  const { messages, isTyping } = useContentStore()
  const handleSubmit = (role, idx, input) => {
    if (role === 'user') {
      const updatedMessage = {
        ...messages[idx],
        content: input,
      }
      onRegenerate([...messages.slice(0, idx), updatedMessage])
    } else {
      onRegenerate(messages.slice(0, idx))
    }
  }
  return <div
    className="chat-body hide-scrollbar flex-1"
  >
    <div
      className="chat-body-inner"
    >
      <div className="py-6 py-lg-12 px-4">
        {
          messages.map((item, index) => <MessageItem
            onSubmit={(__input) => handleSubmit(item.role, index, __input)}
            role={item.role}
            content={item.content}
            time={item.time}
            isLast={messages.findLastIndex(item => item.role === 'assistant') === index}
          />)
        }
        {isTyping && <TypingItem />}
      </div>
    </div>
  </div>
}
