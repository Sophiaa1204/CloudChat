import { useRef, useState } from 'react'
import message from '../../Utils/message'
import useFirebase from '../../Hooks/useFirebase'
import loginSvg from '../../Assets/signin.svg'
import LooSvg from '../../Assets/logo.svg'

export default () => {
  const {
    signInWithEmail,
    signInWithType,
    resetPassword,
  } = useFirebase()
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    signInWithEmail(form)
  }

  const handleReset = (e) => {
    e.preventDefault()
    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (emailRegExp.test(form.email)) {
      resetPassword(form)
    } else {
      message.error('Please enter a valid email address.')
    }
  }
  return <section className={'vh-xxl-100'}>
    <div className="container h-100 d-flex px-0 px-sm-4">
      <div className="row justify-content-center align-items-center m-auto">
        <div className="col-12">
          <div className="bg-mode shadow rounded-3 overflow-hidden">
            <div className="row g-0">
              <div className="col-lg-6 d-flex align-items-center order-2 order-lg-1">
                <div className="p-6 p-lg-10 d-none d-md-block">
                  <img
                    src={loginSvg} alt="" style={{
                    'maxWidth': '100%',
                    height: 'auto',
                  }}
                  />
                </div>
                <div className="vr opacity-1 d-none d-lg-block"></div>
              </div>

              <div className="col-lg-6 order-1">
                <div className="p-8 p-sm-14">
                  <a href="index.html">
                    <svg
                      version="1.1"
                      width="46px"
                      height="46px"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 46 46"
                      enableBackground="new 0 0 46 46"
                    >
                      <polygon
                        opacity="0.7"
                        points="45,11 36,11 35.5,1 "
                      ></polygon>
                      <polygon points="35.5,1 25.4,14.1 39,21 "></polygon>
                      <polygon
                        opacity="0.4"
                        points="17,9.8 39,21 17,26 "
                      ></polygon>
                      <polygon
                        opacity="0.7"
                        points="2,12 17,26 17,9.8 "
                      ></polygon>
                      <polygon
                        opacity="0.7"
                        points="17,26 39,21 28,36 "
                      ></polygon>
                      <polygon points="28,36 4.5,44 17,26 "></polygon>
                      <polygon points="17,26 1,26 10.8,20.1 "></polygon>
                    </svg>

                  </a>
                  <div
                    className="mb-2"
                    style={{ fontSize: 36, fontWeight: 'bold' }}
                  >Welcome back
                  </div>
                  <form
                    className="mt-4 text-start"
                    onSubmit={handleSubmit}
                  >
                    <div className="mb-3">
                      <label className="form-label">Enter email id</label>
                      <input
                        onChange={(e) => setForm({
                          ...form,
                          email: e.target.value,
                        })}
                        value={form.email}
                        required type="email" className="form-control"
                      />
                    </div>
                    <div className="mb-3 position-relative">
                      <label className="form-label">Enter password</label>
                      <input
                        onChange={(e) => setForm({
                          ...form,
                          password: e.target.value,
                        })}
                        value={form.password}
                        required
                        className="form-control fakepassword"
                        type="password"
                        id="psw-input"
                      />
                      <span className="position-absolute top-50 end-0 translate-middle-y p-0 mt-3">
											<i className="fakepasswordicon fas fa-eye-slash cursor-pointer p-2"></i>
										</span>
                    </div>
                    <div className="mb-3 d-sm-flex justify-content-between">
                      {/*<div>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="rememberCheck"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="rememberCheck"
                        >Remember me?</label>
                      </div>*/}
                      <a role={'button'} onClick={handleReset}>Forgot
                        password?</a>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="btn btn-primary w-100 mb-0"
                      >Login
                      </button>
                    </div>

                    <div className="position-relative my-4">
                      <hr />
                      <p className="small bg-mode position-absolute top-50 start-50 translate-middle px-2">Or
                        sign in with</p>
                    </div>

                    <div className="vstack gap-3">
                      <button
                        onClick={() => signInWithType('google')}
                        className="btn btn-light mb-0"
                      >
                        <svg
                          height="100%"
                          viewBox="0 0 24 24"
                          width="100%"
                          fit=""
                          preserveAspectRatio="xMidYMid meet"
                          focusable="false"
                        >
                          <path
                            d="M19.6 10.23c0-.82-.1-1.42-.25-2.05H10v3.72h5.5c-.15.96-.74 2.31-2.04 3.22v2.45h3.16c1.89-1.73 2.98-4.3 2.98-7.34z"
                            fill="#4285F4"
                          ></path>
                          <path
                            d="M13.46 15.13c-.83.59-1.96 1-3.46 1-2.64 0-4.88-1.74-5.68-4.15H1.07v2.52C2.72 17.75 6.09 20 10 20c2.7 0 4.96-.89 6.62-2.42l-3.16-2.45z"
                            fill="#34A853"
                          ></path>
                          <path
                            d="M3.99 10c0-.69.12-1.35.32-1.97V5.51H1.07A9.973 9.973 0 000 10c0 1.61.39 3.14 1.07 4.49l3.24-2.52c-.2-.62-.32-1.28-.32-1.97z"
                            fill="#FBBC05"
                          ></path>
                          <path
                            d="M10 3.88c1.88 0 3.13.81 3.85 1.48l2.84-2.76C14.96.99 12.7 0 10 0 6.09 0 2.72 2.25 1.07 5.51l3.24 2.52C5.12 5.62 7.36 3.88 10 3.88z"
                            fill="#EA4335"
                          ></path>
                        </svg>
                        Sign
                        in with Google
                      </button>
                      {/*<a
                        href="#"
                        className="btn btn-light mb-0"
                      >
                        <svg
                          height="100%"
                          viewBox="0 0 24 24"
                          width="100%"
                          fit=""
                          preserveAspectRatio="xMidYMid meet"
                          focusable="false"
                        >
                          <path
                            d="M18.007 19c.55 0 .993-.444.993-.993V1.993A.992.992 0 0018.007 1H1.993A.992.992 0 001 1.993v16.014c0 .55.444.993.993.993h16.014zm-4.587 0v-6.97h2.34l.35-2.717h-2.69V7.578c0-.786.218-1.322 1.346-1.322h1.438v-2.43a18.915 18.915 0 00-2.096-.108c-2.073 0-3.494 1.267-3.494 3.59v2.005H8.268v2.717h2.346V19h2.806z"
                            fill="#3B5998"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                        Sign
                        in with Facebook</a>*/}
                      {/*<a
                        href="#"
                        className="btn btn-light mb-0"
                      >
                        <svg
                          height="100%"
                          viewBox="0 0 24 24"
                          width="100%"
                          fit=""
                          preserveAspectRatio="xMidYMid meet"
                          focusable="false"
                        >
                          <path
                            d="M20 3.924a8.212 8.212 0 01-2.357.646 4.111 4.111 0 001.804-2.27c-.792.47-1.67.812-2.605.996A4.103 4.103 0 009.85 7.038a11.645 11.645 0 01-8.458-4.287 4.118 4.118 0 00-.555 2.066 4.1 4.1 0 001.825 3.415 4.074 4.074 0 01-1.858-.513v.052a4.105 4.105 0 003.29 4.022 4.01 4.01 0 01-1.852.072 4.106 4.106 0 003.833 2.85A8.268 8.268 0 010 16.411a11.602 11.602 0 006.29 1.846c7.547 0 11.674-6.253 11.674-11.675 0-.18-.004-.355-.01-.53.8-.58 1.496-1.3 2.046-2.125"
                            fill="#55ACEE"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                        Sign
                        in with Twitter</a>*/}
                      <button
                        onClick={() => signInWithType('github')}
                        className="btn btn-light mb-0"
                        style={{ fontSize: 0 }}
                      ><img
                        style={{ verticalAlign: 'middle', marginRight: 4 }}
                        width={14}
                        height={14}
                        alt=""
                        className="provider-icon ng-star-inserted"
                        src="//www.gstatic.com/mobilesdk/230906_mobilesdk/github-mark-white.svg"
                      />
                        <span style={{ fontSize: 15, verticalAlign: 'middle' }}>Sign in with GitHub</span>
                      </button>
                    </div>

                    <div className="text-primary-hover text-body mt-3 text-center"> Copyrights
                      ©2024 Build by Sophia.
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}
