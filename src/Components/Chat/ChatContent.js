import { useMemo, useState } from 'react'

const MessageAction = () => {

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
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="feather feather-more-vertical"
        >
          <circle cx="12" cy="12" r="1"></circle>
          <circle cx="12" cy="5" r="1"></circle>
          <circle cx="12" cy="19" r="1"></circle>
        </svg>
      </a>

      <ul className="dropdown-menu">
        <li>
          <a
            className="dropdown-item d-flex align-items-center"
            href="#"
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-edit-3"
              >
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
            </div>
          </a>
        </li>
        <li>
          <a
            className="dropdown-item d-flex align-items-center"
            href="#"
          >
            <span className="me-auto">Reply</span>
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-corner-up-left"
              >
                <polyline points="9 14 4 9 9 4"></polyline>
                <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
              </svg>
            </div>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a
            className="dropdown-item d-flex align-items-center text-danger"
            href="#"
          >
            <span className="me-auto">Delete</span>
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-trash-2"
              >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line
                  x1="10"
                  y1="11"
                  x2="10"
                  y2="17"
                ></line>
                <line
                  x1="14"
                  y1="11"
                  x2="14"
                  y2="17"
                ></line>
              </svg>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
}
const ContentEdit = ({ defaultContent }) => {
  const [input, setInput] = useState(defaultContent)
  const currentRows = useMemo(() => input.split('\n').length, [input])

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
}
const ContentBody = ({ file, content }) => {

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
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
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

    <MessageAction />
  </div>
}
const SubmitButton = () => {

  return <button
    className="btn btn-sm btn-icon btn-primary rounded-circle ms-5"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="feather feather-send"
    >
      <line x1="22" y1="2" x2="11" y2="13"></line>
      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
  </button>
}
const MessageItem = ({ role, content, time, file }) => {
  const [isEdit, setIsEdit] = useState(false)
  return <div className={`message ${role === 'user' ? 'message-out' : ''}`}>
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
      <div className="message-body">
        {
          isEdit
            ? <ContentEdit defaultContent={content} />
            : <ContentBody content={content} file={file} />
        }
      </div>
      <div className="message-footer">
        {
          isEdit
            ? <SubmitButton></SubmitButton>
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
              <p>William is
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

export default ({ messages = [] }) => {

  return <div
    className="chat-body hide-scrollbar flex-1"
  >
    <div
      className="chat-body-inner"
    >
      <div className="py-6 py-lg-12">
        {/*TODO*/}

        <DateDivider date={'Monday, Sep 16'} />
        <MessageItem
          file={{
            type: 'json',
          }}
          sender={1}
          time={'08:45 PM'}
          content={'Hey, Marshall! How are you? Can you please change the\n' +
            '              color theme of the website to pink and purple?'}
        ></MessageItem>
        <TypingItem />
        {
          messages.map(item => <MessageItem
            role={item.role}
            content={item.content}
            time={item.time}
          />)
        }
      </div>
    </div>
  </div>
}
