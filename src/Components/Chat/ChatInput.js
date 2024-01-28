import { useCallback, useEffect, useMemo, useState } from 'react'

export default ({ input, setInput, currentRows, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit()
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 13 && e.altKey) {
        handleSubmit(e)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleSubmit])
  return <div className="chat-footer pb-3 pb-lg-7 bottom-0 start-0">

    <div
      className="dz-preview bg-dark"
      id="dz-preview-row"
      data-horizontal-scroll=""
    >
    </div>

    <form className="chat-form rounded-pill bg-dark" onSubmit={handleSubmit}>
      <div className="row align-items-center gx-0">
        <div className="col-auto">
          <a
            href="#"
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
          <button
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
        </div>
      </div>
    </form>

  </div>
}
