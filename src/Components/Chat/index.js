export default () => {

  return <main className="main is-visible" data-dropzone-area="">
    <div className="container h-100">

      <div className="d-flex flex-column h-100 position-relative">

        <div className="chat-header border-bottom py-4 py-lg-7">
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
                      <div className="avatar d-none d-xl-inline-block">
                        <img
                          className="avatar-img"
                          src="assets/img/avatars/bootstrap.svg"
                          alt=""
                        />
                      </div>
                    </div>

                    <div className="col overflow-hidden">
                      <h5 className="text-truncate">Bootstrap Community</h5>
                      <p className="text-truncate">35 members, 3 online</p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 d-none d-xl-block">
                  <div className="row align-items-center justify-content-end gx-6">
                    <div className="col-auto">
                      <a
                        href="#"
                        className="icon icon-lg text-muted"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvas-more-group"
                        aria-controls="offcanvas-more-group"
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
                          className="feather feather-more-horizontal"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </a>
                    </div>

                    <div className="col-auto">
                      <div className="avatar-group">
                        <a
                          href="#"
                          className="avatar avatar-sm"
                          data-bs-toggle="modal"
                          data-bs-target="#modal-user-profile"
                        >
                          <img
                            className="avatar-img"
                            src="assets/img/avatars/1.jpg"
                            alt="#"
                          />
                        </a>

                        <a
                          href="#"
                          className="avatar avatar-sm"
                          data-bs-toggle="modal"
                          data-bs-target="#modal-user-profile"
                        >
                          <img
                            className="avatar-img"
                            src="assets/img/avatars/11.jpg"
                            alt="#"
                          />
                        </a>

                        <a
                          href="#"
                          className="avatar avatar-sm"
                          data-bs-toggle="modal"
                          data-bs-target="#modal-user-profile"
                        >
                          <img
                            className="avatar-img"
                            src="assets/img/avatars/7.jpg"
                            alt="#"
                          />
                        </a>

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
                                                                  stroke-width="2"
                                                                  stroke-linecap="round"
                                                                  stroke-linejoin="round"
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
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
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

        <div className="chat-body hide-scrollbar flex-1 h-100">
          <div
            className="chat-body-inner" style={{
            paddingBottom: 87,
          }}
          >
            <div className="py-6 py-lg-12">

              <div className="message">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-user-profile"
                  className="avatar avatar-responsive"
                >
                  <img
                    className="avatar-img"
                    src="assets/img/avatars/11.jpg"
                    alt=""
                  />
                </a>

                <div className="message-inner">
                  <div className="message-body">
                    <div className="message-content">
                      <div className="message-text">
                        <p>Hey, Marshall! How are you? Can you please change the
                          color theme of the website to pink and purple?</p>
                      </div>

                      <div className="message-action">
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
                    </div>

                    <div className="message-content">
                      <div className="message-text">
                        <p>Send me the files please.</p>
                      </div>

                      <div className="message-action">
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
                    </div>
                  </div>

                  <div className="message-footer">
                    <span className="extra-small text-muted">08:45 PM</span>
                  </div>
                </div>
              </div>

              <div className="message message-out">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-profile"
                  className="avatar avatar-responsive"
                >
                  <img
                    className="avatar-img"
                    src="assets/img/avatars/1.jpg"
                    alt=""
                  />
                </a>

                <div className="message-inner">
                  <div className="message-body">
                    <div className="message-content">
                      <div className="message-text">
                        <blockquote className="blockquote overflow-hidden">
                          <h6 className="text-reset text-truncate">William
                            Wright</h6>
                          <p className="small text-truncate">Hey, Marshall! How
                            are
                            you? Can you please change the color theme of the
                            website to pink and purple?</p>
                        </blockquote>
                        <p>Hey, Marshall! How are you? Can you please change the
                          color theme of the website to pink and purple?</p>
                      </div>

                      <div className="message-action">
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
                    </div>

                    <div className="message-content">
                      <div className="message-text">

                        <div className="row align-items-center gx-4">
                          <div className="col-auto">
                            <a href="#" className="avatar avatar-sm">
                              <div className="avatar-text bg-white text-primary">
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
                                  className="feather feather-arrow-down"
                                >
                                  <line x1="12" y1="5" x2="12" y2="19"></line>
                                  <polyline points="19 12 12 19 5 12"></polyline>
                                </svg>
                              </div>
                            </a>
                          </div>
                          <div className="col overflow-hidden">
                            <h6 className="text-truncate text-reset">
                              <a
                                href="#"
                                className="text-reset"
                              >filename.json</a>
                            </h6>
                            <ul className="list-inline text-uppercase extra-small opacity-75 mb-0">
                              <li className="list-inline-item">79.2 KB</li>
                            </ul>
                          </div>
                        </div>

                      </div>

                      <div className="message-action">
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
                    </div>
                  </div>

                  <div className="message-footer">
                    <span className="extra-small text-muted">08:45 PM</span>
                  </div>
                </div>
              </div>

              <div className="message-divider">
                <small className="text-muted">Monday, Sep 16</small>
              </div>

              <div className="message">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-user-profile"
                  className="avatar avatar-responsive"
                >
                  <img
                    className="avatar-img"
                    src="assets/img/avatars/6.jpg"
                    alt=""
                  />
                </a>

                <div className="message-inner">
                  <div className="message-body">
                    <div className="message-content">
                      <div className="message-text">
                        <p>Hey, Marshall! How are you? Can you please change the
                          color theme of the website to pink and purple?</p>
                      </div>

                      <div className="message-action">
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
                    </div>
                  </div>

                  <div className="message-footer">
                    <span className="extra-small text-muted">08:45 PM</span>
                  </div>
                </div>
              </div>

              <div className="message message-out">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-profile"
                  className="avatar avatar-responsive"
                >
                  <img
                    className="avatar-img"
                    src="assets/img/avatars/1.jpg"
                    alt=""
                  />
                </a>

                <div className="message-inner">
                  <div className="message-body">
                    <div className="message-content">
                      <div className="message-gallery">
                        <div className="row gx-3">
                          <div className="col">
                            <img
                              className="img-fluid rounded"
                              src="assets/img/chat/1.jpg"
                              data-action="zoom"
                              alt=""
                            />
                          </div>
                          <div className="col">
                            <img
                              className="img-fluid rounded"
                              src="assets/img/chat/2.jpg"
                              data-action="zoom"
                              alt=""
                            />
                          </div>
                          <div className="col">
                            <img
                              className="img-fluid rounded"
                              src="assets/img/chat/3.jpg"
                              data-action="zoom"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>

                      <div className="message-action">
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
                    </div>
                  </div>

                  <div className="message-footer">
                    <span className="extra-small text-muted">08:45 PM</span>
                  </div>
                </div>
              </div>

              <div className="message">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-user-profile"
                  className="avatar avatar-responsive"
                >
                  <img
                    className="avatar-img"
                    src="assets/img/avatars/11.jpg"
                    alt=""
                  />
                </a>

                <div className="message-inner">
                  <div className="message-body">
                    <div className="message-content">
                      <div className="message-text">
                        <p>Hey, Marshall! How are you? Can you please change the
                          color theme of the website to pink and purple?</p>
                      </div>

                      <div className="message-action">
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
                    </div>
                  </div>

                  <div className="message-footer">
                    <span className="extra-small text-muted">08:45 PM</span>
                  </div>
                </div>
              </div>

              <div className="message-divider">
                <small className="text-muted">Friday, Sep 20</small>
              </div>

              <div className="message message-out">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-profile"
                  className="avatar avatar-responsive"
                >
                  <img
                    className="avatar-img"
                    src="assets/img/avatars/1.jpg"
                    alt=""
                  />
                </a>

                <div className="message-inner">
                  <div className="message-body">
                    <div className="message-content">
                      <div className="message-text">
                        <p>Hey, Marshall! How are you? Can you please change the
                          color theme of the website to pink and purple?</p>
                      </div>

                      <div className="message-action">
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
                    </div>
                  </div>

                  <div className="message-footer">
                    <span className="extra-small text-muted">08:45 PM</span>
                  </div>
                </div>
              </div>

              <div className="message">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-user-profile"
                  className="avatar avatar-online avatar-responsive"
                >
                  <img
                    className="avatar-img"
                    src="assets/img/avatars/7.jpg"
                    alt=""
                  />
                </a>

                <div className="message-inner">
                  <div className="message-body">
                    <div className="message-content">
                      <div className="message-text">
                        <p>Hey, Marshall! How are you? Can you please change the
                          color theme of the website to pink and purple?</p>
                      </div>

                      <div className="message-action">
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
                    </div>
                    <div className="message-content">
                      <div className="message-text">
                        <p>Send me the files please</p>
                      </div>

                      <div className="message-action">
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
                    </div>
                  </div>

                  <div className="message-footer">
                    <span className="extra-small text-muted">08:45 PM</span>
                  </div>
                </div>
              </div>

              <div className="message message-out">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-profile"
                  className="avatar avatar-responsive"
                >
                  <img
                    className="avatar-img"
                    src="assets/img/avatars/1.jpg"
                    alt=""
                  />
                </a>

                <div className="message-inner">
                  <div className="message-body">
                    <div className="message-content">
                      <div className="message-text">
                        <p>Hey, Marshall! How are you? Can you please change the
                          color theme of the website to pink and purple?</p>
                      </div>

                      <div className="message-action">
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
                    </div>
                  </div>

                  <div className="message-footer">
                    <span className="extra-small text-muted">08:45 PM</span>
                  </div>
                </div>
              </div>

              <div className="message">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-user-profile"
                  className="avatar avatar-responsive"
                >
                  <img
                    className="avatar-img"
                    src="assets/img/avatars/11.jpg"
                    alt=""
                  />
                </a>

                <div className="message-inner">
                  <div className="message-body">
                    <div className="message-content">
                      <div className="message-text">
                        <p>Hey, Marshall! How are you? Can you please change the
                          color theme of the website to pink and purple?</p>
                      </div>

                      <div className="message-action">
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
                    </div>
                  </div>

                  <div className="message-footer">
                    <span className="extra-small text-muted">08:45 PM</span>
                  </div>
                </div>
              </div>

              <div className="message message-out">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-profile"
                  className="avatar avatar-responsive"
                >
                  <img
                    className="avatar-img"
                    src="assets/img/avatars/1.jpg"
                    alt=""
                  />
                </a>

                <div className="message-inner">
                  <div className="message-body">
                    <div className="message-content">
                      <div className="message-text">
                        <p>Hey, Marshall! How are you? Can you please change the
                          color theme of the website to pink and purple? 😂</p>
                      </div>

                      <div className="message-action">
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
                    </div>
                  </div>

                  <div className="message-footer">
                    <span className="extra-small text-muted">08:45 PM</span>
                  </div>
                </div>
              </div>

              <div className="message">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-user-profile"
                  className="avatar avatar-online avatar-responsive"
                >
                  <img
                    className="avatar-img"
                    src="assets/img/avatars/7.jpg"
                    alt=""
                  />
                </a>

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
          </div>
        </div>

        <div className="chat-footer pb-3 pb-lg-7 position-absolute bottom-0 start-0">

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
                    style={{overflow: 'hidden', overflowWrap: 'break-word', resize: 'none', height: 47}}
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

      </div>

    </div>
  </main>
}
