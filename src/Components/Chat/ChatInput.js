export default () => {

  return <div className="chat-footer pb-3 pb-lg-7 position-absolute bottom-0 start-0">

    <div
      className="dz-preview bg-dark"
      id="dz-preview-row"
      data-horizontal-scroll=""
    >
    </div>

    <form className="chat-form rounded-pill bg-dark" data-emoji-form="">
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-paperclip"
            >
              <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
            </svg>
          </a>
        </div>

        <div className="col">
          <div className="input-group">
                  <textarea
                    className="form-control px-0"
                    placeholder="Type your message..."
                    rows="1"
                    data-emoji-input=""
                    data-autosize="true"
                    style={{
                      overflow: 'hidden',
                      overflowWrap: 'break-word',
                      resize: 'none',
                      height: 47,
                    }}
                  ></textarea>

            <a
              href="#"
              className="input-group-text text-body pe-0"
              data-emoji-btn=""
            >
                                                <span className="icon icon-lg">
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
                                                      className="feather feather-smile"
                                                    ><circle
                                                      cx="12"
                                                      cy="12"
                                                      r="10"
                                                    ></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line
                                                      x1="9"
                                                      y1="9"
                                                      x2="9.01"
                                                      y2="9"
                                                    ></line><line
                                                      x1="15"
                                                      y1="9"
                                                      x2="15.01"
                                                      y2="9"
                                                    ></line></svg>
                                                </span>
            </a>
          </div>
        </div>

        <div className="col-auto">
          <button className="btn btn-icon btn-primary rounded-circle ms-5">
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
