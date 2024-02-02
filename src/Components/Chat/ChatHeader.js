import useContentStore from '../../Store/content'

export default function ChatHeader() {
  const { setInfo, setInit, setModel, model, title, avatar } = useContentStore()

  return <div className="chat-header border-bottom py-4 px-4 py-lg-7">
    <div className="row align-items-center">

      <div className="col-2 d-xl-none">
        <a
          className="icon icon-lg text-muted"
          href="#"
          data-toggle-chat=""
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
            className="feather feather-chevron-left"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </a>
      </div>

      <div className="col-8 col-xl-12">
        <div className="row align-items-center text-center text-xl-start">

          <div className="col-12 col-xl-6">
            <div className="row align-items-center gx-5">
              <div className="col-auto">
                <div
                  className="avatar d-none d-xl-inline-block bg-white text-center"
                  style={{ lineHeight: '41px', overflow: 'hidden' }}
                >
                  <img
                    width={44}
                    height={44}
                    src={avatar || `https://aichatdb.blob.core.windows.net/attachment/defaultAvatar.png`}
                  />
                </div>
              </div>

              <div className="col overflow-hidden">
                <h5 className="text-truncate">{
                  title || 'Default Agent'
                }</h5>
                <p className="text-truncate">
                  <select
                    value={model} onChange={e => {
                    setModel(e.target.value)
                  }} className={'transparent-select'}
                  >
                    {/*<option value={''}>Select Model</option>*/}
                    <option value={'gpt-4-turbo-preview'}>gpt-4-turbo-preview</option>
                    <option value={'gpt-4-vision-preview'}>gpt-4-vision-preview</option>
                    <option value={'gpt-4-32k'}>gpt-4-32k</option>
                    <option value={'gpt-3.5-turbo'}>gpt-3.5-turbo</option>
                    <option value={'gpt-3.5-turbo-16k'}>gpt-3.5-turbo-16k</option>
                  </select>
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-6 d-none d-xl-block">
            <div className="row align-items-center justify-content-end gx-6">
              <div className="col-auto">
                <div className="avatar-group">

                  <a
                    href="#"
                    className="avatar avatar-sm"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvas-add-members"
                    aria-controls="offcanvas-add-members"
                  >
                                                            <span
                                                              className="avatar-text"
                                                              data-bs-toggle="tooltip"
                                                              data-bs-placement="bottom"
                                                              title=""
                                                              data-bs-original-title="<strong>Add People</strong><p>Invite friends to group</p>"
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
                                                                  className="feather feather-plus"
                                                                ><line
                                                                  x1="12"
                                                                  y1="5"
                                                                  x2="12"
                                                                  y2="19"
                                                                ></line><line
                                                                  x1="5"
                                                                  y1="12"
                                                                  x2="19"
                                                                  y2="12"
                                                                ></line></svg>
                                                            </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="col-2 d-xl-none text-end">
        <div className="dropdown">
          <a
            className="text-muted"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
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
                className="feather feather-more-vertical"
              >
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="12" cy="5" r="1"></circle>
                <circle cx="12" cy="19" r="1"></circle>
              </svg>
            </div>
          </a>

          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item"
                href="#"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvas-add-members"
                aria-controls="offcanvas-add-members"
              >Add members</a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvas-more-group"
                aria-controls="offcanvas-more-group"
              >More</a>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
}
