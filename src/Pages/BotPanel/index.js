export default () => {

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
              <h2 className="fw-bold m-0">Bots</h2>
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
                  />
                </div>
              </form>

              <div className="mt-5">
                <a
                  href="#"
                  className="btn btn-lg btn-primary w-100 d-flex align-items-center"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-invite"
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
              </div>
            </div>

            <div className="card-list">
              <div className="card border-0">
                <div className="card-body">

                  <div className="row align-items-center gx-5">
                    <div className="col-auto">
                      <a href="#" className="avatar ">

                        <img
                          className="avatar-img"
                          src="assets/img/avatars/6.jpg"
                          alt=""
                        />

                      </a>
                    </div>

                    <div className="col">
                      <h5><a href="#">Bill Marrow</a></h5>
                      <p>last seen 3 days ago</p>
                    </div>

                    <div className="col-auto">
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
                          <li><a className="dropdown-item" href="#">New
                            message</a>
                          </li>
                          <li><a className="dropdown-item" href="#">Edit
                            contact</a>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <a className="dropdown-item text-danger" href="#">Block
                              user</a>
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
}
