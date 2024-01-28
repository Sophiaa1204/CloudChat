import { useState } from 'react'

export default () => {
  const [form, setForm] = useState({
    model: 'gpt-3.5-turbo',
    apiKey: '',
    description: '',
  })
  return <div className="tab-content h-100" role="tablist">
    <div
      className="tab-pane fade h-100 active show"
      id="tab-content-create-chat"
      role="tabpanel"
    >
      <div className="d-flex flex-column h-100">
        <div className="hide-scrollbar">

          <div className="container py-8">

            <div className="mb-8">
              <h2 className="fw-bold m-0">Create chat</h2>
            </div>

            <div className="tab-content" role="tablist">
              <div
                className="tab-pane fade show active"
                id="create-chat-info"
                role="tabpanel"
              >

                <div className="card border-0">
                  <div className="profile">
                    <div className="profile-img text-primary rounded-top">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 400 140.74"
                      >
                        <g>
                          <g>
                            <path d="M400,125A1278.49,1278.49,0,0,1,0,125V0H400Z"></path>
                            <path
                              className="cls-2"
                              d="M361.13,128c.07.83.15,1.65.27,2.46h0Q380.73,128,400,125V87l-1,0a38,38,0,0,0-38,38c0,.86,0,1.71.09,2.55C361.11,127.72,361.12,127.88,361.13,128Z"
                            ></path>
                            <path
                              className="cls-2"
                              d="M12.14,119.53c.07.79.15,1.57.26,2.34v0c.13.84.28,1.66.46,2.48l.07.3c.18.8.39,1.59.62,2.37h0q33.09,4.88,66.36,8,.58-1,1.09-2l.09-.18a36.35,36.35,0,0,0,1.81-4.24l.08-.24q.33-.94.6-1.9l.12-.41a36.26,36.26,0,0,0,.91-4.42c0-.19,0-.37.07-.56q.11-.86.18-1.73c0-.21,0-.42,0-.63,0-.75.08-1.51.08-2.28a36.5,36.5,0,0,0-73,0c0,.83,0,1.64.09,2.45C12.1,119.15,12.12,119.34,12.14,119.53Z"
                            ></path>
                            <circle
                              className="cls-2"
                              cx="94.5"
                              cy="57.5"
                              r="22.5"
                            ></circle>
                            <path
                              className="cls-2"
                              d="M276,0a43,43,0,0,0,43,43A43,43,0,0,0,362,0Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>

                    <div className="profile-body p-0">
                      <div className="avatar avatar-lg">
                        <img src={'https://booking.webestica.com/assets/images/logo-icon.svg'} />
                      </div>
                    </div>
                  </div>

                  <div className="card-body">
                    <form autocomplete="off">
                      <div className="row gy-6">
                        <div className="col-12">
                          <div className="form-floating">
                            <select
                              className={'form-control'}
                              id={'floatingModel'}
                              value={form.model}
                              onChange={e => {
                                if (e.target.value === 'gpt-3.5-turbo') {
                                  setForm({
                                    ...form,
                                    model: e.target.value,
                                    apiKey: '',
                                  })
                                } else {
                                  setForm({
                                    ...form,
                                    model: e.target.value,
                                  })
                                }
                              }}
                            >
                              <option value={''}>Select Model</option>
                              <option value={'gpt-4-turbo-preview'}>gpt-4-turbo-preview</option>
                              <option value={'gpt-4-vision-preview'}>gpt-4-vision-preview</option>
                              <option value={'gpt-4-32k'}>gpt-4-32k</option>
                              <option value={'gpt-3.5-turbo'}>gpt-3.5-turbo</option>
                              <option value={'gpt-3.5-turbo-16k'}>gpt-3.5-turbo-16k</option>
                            </select>
                            <label htmlFor="floatingTextarea">Model</label>
                          </div>
                        </div>
                        {form.model !== 'gpt-3.5-turbo' &&
                          <div className="col-12">
                            <div className="form-floating">
                              <input
                                type={'text'}
                                value={form.apiKey}
                                onChange={e => setForm({
                                  ...form,
                                  apiKey: e.target.value,
                                })}
                                className={'form-control'}
                                id={'floatingApiKey'}
                              />
                              <label htmlFor="floatingApiKey">OpenAI API
                                Key</label>
                            </div>
                          </div>}
                        <div className="col-12">
                          <div className="form-floating">
                            <textarea
                              value={form.description}
                              onChange={e => setForm({
                                ...form,
                                description: e.target.value,
                              })}
                              className="form-control"
                              placeholder="Description"
                              id="floatingTextarea"
                              rows="8"
                              data-autosize="true"
                              style={{
                                minHeight: 100,
                                overflow: 'hidden',
                                'overflowWrap': 'break-word',
                                resize: 'none',
                                height: 100,
                              }}
                            ></textarea>
                            <label for="floatingTextarea">How can I help you
                              today?</label>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className="container mt-n4 mb-8 position-relative">
          <button
            className="btn btn-lg btn-primary w-100 d-flex align-items-center"
            type="button"
          >
            Start chat
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
                                          className="feather feather-chevron-right"
                                        ><polyline points="9 18 15 12 9 6"></polyline></svg>
                                    </span>
          </button>
        </div>

      </div>
    </div>
  </div>
}
