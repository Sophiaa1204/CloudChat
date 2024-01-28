import { useCallback, useEffect, useMemo, useState } from 'react'
import useChatStore from '../../Store/chat'

export default ({ input, setInput, currentRows, onSubmit, onAbort }) => {
  const { messages, isTyping } = useChatStore()
  const [isFocus, setIsFocus] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit()
  }

  useEffect(() => {
    if (isTyping) return
    const handleKeyDown = (e) => {
      if (e.keyCode === 13 && e.altKey) {
        handleSubmit(e)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleSubmit, isTyping])
  const handleUpload = () => {
    //TODO
    if (isTyping) return
  }
  return <div className="chat-footer pb-3 pb-lg-7 bottom-0 start-0">

    <div
      className="dz-preview bg-dark"
      id="dz-preview-row"
      data-horizontal-scroll=""
    >
    </div>

    <form
      className={`chat-form rounded-pill bg-dark ${isFocus ? 'focus' : ''}`}
      onSubmit={handleSubmit}
    >
      <div className="row align-items-center gx-0">
        <div className="col-auto">
          <a
            onClick={() => handleUpload()}
            role={'button'}
            className="btn btn-icon btn-link text-body rounded-circle dz-clickable"
            id="dz-btn"
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
              className="feather feather-paperclip"
            >
              <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
            </svg>
          </a>
        </div>

        <div className="col">
          <div className="input-group">
                  <textarea
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="form-control px-0"
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
          </div>
        </div>

        <div className="col-auto">
          {
            isTyping
              ?
              <button
                onClick={onAbort}
                className="btn btn-icon btn-secondary rounded-circle ms-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-stop-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5z" />
                </svg>
              </button>
              : <button
                type={'submit'}
                className="btn btn-icon btn-primary rounded-circle ms-5"
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
                  className="feather feather-send"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
          }
        </div>
      </div>
    </form>

  </div>
}
