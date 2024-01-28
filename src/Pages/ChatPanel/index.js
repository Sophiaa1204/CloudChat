import { useUserStore } from '../../Store'

export default () => {
  const { email, info, id } = useUserStore()
  return <div>
    <div
      className="tab-pane fade h-100 active show"
      id="tab-content-notifications"
      role="tabpanel"
    >
      <div className="d-flex flex-column h-100">
        <div className="hide-scrollbar">
          <div className="container py-8">

            <div className="mb-8">
              <h2 className="fw-bold m-0">Notifications</h2>
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
                    placeholder="Search messages or users"
                    aria-label="Search for messages or users..."
                  />
                </div>
              </form>
            </div>

            <div className="card-list">

              <div className="d-flex align-items-center my-4 px-6">
                <small className="text-muted me-auto">Today</small>

                <a href="#" className="text-muted small">Clear all</a>
              </div>

              <div className="card border-0 mb-5">
                <div className="card-body">

                  <div className="row gx-5">
                    <div className="col-auto">

                      <a href="#" className="avatar">
                        <img
                          className="avatar-img"
                          src="assets/img/avatars/11.jpg"
                          alt=""
                        />

                        <div className="badge badge-circle bg-primary border-outline position-absolute bottom-0 end-0">
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
                            className="feather feather-user"
                          >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                        </div>
                      </a>
                    </div>

                    <div className="col">
                      <div className="d-flex align-items-center mb-2">
                        <h5 className="me-auto mb-0">
                          <a href="#">Mila White</a>
                        </h5>
                        <span className="extra-small text-muted ms-2">08:45 PM</span>
                      </div>

                      <div className="d-flex">
                        <div className="me-auto">Send you a friend request.
                        </div>

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
                            <li><a className="dropdown-item" href="#">Show less
                              often</a></li>
                            <li><a className="dropdown-item" href="#">Hide</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-footer">
                  <div className="row gx-4">
                    <div className="col">
                      <a
                        href="#"
                        className="btn btn-sm btn-soft-primary w-100"
                      >Hide</a>
                    </div>
                    <div className="col">
                      <a
                        href="#"
                        className="btn btn-sm btn-primary w-100"
                      >Confirm</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card border-0 mb-5">
                <div className="card-body">

                  <div className="row gx-5">
                    <div className="col-auto">

                      <a href="#" className="avatar">
                                                            <span className="avatar-text bg-warning">
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
                                                                  className="feather feather-star"
                                                                ><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                                            </span>

                        <div className="badge badge-circle bg-warning border-outline position-absolute bottom-0 end-0">
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
                            className="feather feather-gift"
                          >
                            <polyline points="20 12 20 22 4 22 4 12"></polyline>
                            <rect x="2" y="7" width="20" height="5"></rect>
                            <line x1="12" y1="22" x2="12" y2="7"></line>
                            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                          </svg>
                        </div>
                      </a>
                    </div>

                    <div className="col">
                      <div className="d-flex align-items-center mb-2">
                        <h5 className="me-auto mb-0">
                          <a href="#">Congratulations!</a>
                        </h5>
                        <span className="extra-small text-muted ms-2">08:45 PM</span>
                      </div>

                      <div className="d-flex">
                        <div className="me-auto">You win 5GB free disk space.
                        </div>

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
                            <li><a className="dropdown-item" href="#">Show less
                              often</a></li>
                            <li><a className="dropdown-item" href="#">Hide</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            <div className="card-list mt-8">

              <div className="d-flex align-items-center my-4 px-6">
                <small className="text-muted me-auto">Yesterday</small>

                <a href="#" className="text-muted small">Clear all</a>
              </div>

              <div className="card border-0 mb-5">
                <div className="card-body">

                  <div className="row gx-5">
                    <div className="col-auto">

                      <div className="avatar">
                                                            <span className="avatar-text bg-success">
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
                                                                  className="feather feather-lock"
                                                                ><rect
                                                                  x="3"
                                                                  y="11"
                                                                  width="18"
                                                                  height="11"
                                                                  rx="2"
                                                                  ry="2"
                                                                ></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                                            </span>

                        <div className="badge badge-circle bg-success border-outline position-absolute bottom-0 end-0">
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
                            className="feather feather-refresh-ccw"
                          >
                            <polyline points="1 4 1 10 7 10"></polyline>
                            <polyline points="23 20 23 14 17 14"></polyline>
                            <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="col">
                      <div className="d-flex align-items-center mb-2">
                        <h5 className="me-auto mb-0">Password Changed</h5>
                        <span className="extra-small text-muted ms-2">08:45 PM</span>
                      </div>

                      <div className="d-flex">
                        <div className="me-auto">Your password has
                          been <br /> updated successfully.
                        </div>

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
                            <li><a className="dropdown-item" href="#">Show less
                              often</a></li>
                            <li><a className="dropdown-item" href="#">Hide</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            <div className="card-list mt-8">

              <div className="d-flex align-items-center my-4 px-6">
                <small className="text-muted me-auto">Previous</small>

                <a href="#" className="text-muted small">Clear all</a>
              </div>

              <div className="card border-0">
                <div className="card-body">

                  <div className="row gx-5">
                    <div className="col-auto">

                      <a href="#" className="avatar">
                        <img
                          className="avatar-img"
                          src="assets/img/avatars/7.jpg"
                          alt=""
                        />

                        <div className="badge badge-circle bg-primary border-outline position-absolute bottom-0 end-0">
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
                            className="feather feather-image"
                          >
                            <rect
                              x="3"
                              y="3"
                              width="18"
                              height="18"
                              rx="2"
                              ry="2"
                            ></rect>
                            <circle cx="8.5" cy="8.5" r="1.5"></circle>
                            <polyline points="21 15 16 10 5 21"></polyline>
                          </svg>
                        </div>
                      </a>
                    </div>

                    <div className="col">
                      <div className="d-flex align-items-center mb-2">
                        <h5 className="me-auto mb-0">
                          <a href="#">William Wright</a>
                        </h5>
                        <span className="extra-small text-muted ms-2">08:45 PM</span>
                      </div>

                      <div className="d-flex">
                        <div className="me-auto">Updated profile picture.</div>

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
                            <li><a className="dropdown-item" href="#">Show less
                              often</a></li>
                            <li><a className="dropdown-item" href="#">Hide</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="card border-0">
                <div className="card-body">

                  <div className="row gx-5">
                    <div className="col-auto">

                      <a href="#" className="avatar">
                        <img
                          className="avatar-img"
                          src="assets/img/avatars/9.jpg"
                          alt=""
                        />

                        <div className="badge badge-circle bg-primary border-outline position-absolute bottom-0 end-0">
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
                            className="feather feather-message-circle"
                          >
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                          </svg>
                        </div>
                      </a>
                    </div>

                    <div className="col">
                      <div className="d-flex align-items-center mb-2">
                        <h5 className="me-auto mb-0">
                          <a href="#">Don Knight</a>
                        </h5>
                        <span className="extra-small text-muted ms-2">08:45 PM</span>
                      </div>

                      <div className="d-flex">

                        <div className="me-auto">Send you a private message.
                        </div>

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
                            <li><a className="dropdown-item" href="#">Show less
                              often</a></li>
                            <li><a className="dropdown-item" href="#">Hide</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="card border-0">
                <div className="card-body">

                  <div className="row gx-5">
                    <div className="col-auto">

                      <a
                        href="#tab-settings"
                        className="avatar avatar-badged"
                        data-theme-toggle="tab"
                      >
                                                            <span className="avatar-text bg-danger">
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
                                                                  className="feather feather-bell"
                                                                ><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path
                                                                  d="M13.73 21a2 2 0 0 1-3.46 0"
                                                                ></path></svg>
                                                            </span>

                        <div className="badge badge-circle bg-danger border-outline position-absolute bottom-0 end-0">
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
                            className="feather feather-power"
                          >
                            <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
                            <line x1="12" y1="2" x2="12" y2="12"></line>
                          </svg>
                        </div>
                      </a>
                    </div>

                    <div className="col">
                      <div className="d-flex align-items-center mb-2">
                        <h5 className="me-auto mb-0">
                          <a href="#tab-settings" data-theme-toggle="tab">
                            Notifications
                          </a>
                        </h5>
                        <span className="extra-small text-muted ms-2">08:45 PM</span>
                      </div>

                      <div className="d-flex">
                        <div className="me-auto">Please turn on notifications.
                        </div>

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
                            <li><a className="dropdown-item" href="#">Show less
                              often</a></li>
                            <li><a className="dropdown-item" href="#">Hide</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
}
