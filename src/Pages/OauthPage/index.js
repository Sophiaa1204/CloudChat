import loginSvg from '../../Assets/signin.svg'
import LooSvg from '../../Assets/logo.svg'

export default () => {

  return <section className={'vh-xxl-100'}>
    <div className="container h-100 d-flex px-0 px-sm-4">
      <div className="row justify-content-center align-items-center m-auto">
        <div className="col-12">
          <div className="bg-mode shadow rounded-3 overflow-hidden">
            <div className="row g-0">
              <div className="col-lg-6 d-flex align-items-center order-2 order-lg-1">
                <div className="p-6 p-lg-10">
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
                      enable-background="new 0 0 46 46"
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
                  <div className="mb-2" style={{fontSize:36,fontWeight:'bold'}}>Welcome back</div>
                  <p className="mb-0">New here?<a href="sign-up.html"> Create an
                    account</a></p>

                  <form className="mt-4 text-start">
                    <div className="mb-3">
                      <label className="form-label">Enter email id</label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className="mb-3 position-relative">
                      <label className="form-label">Enter password</label>
                      <input
                        className="form-control fakepassword"
                        type="password"
                        id="psw-input"
                      />
                      <span className="position-absolute top-50 end-0 translate-middle-y p-0 mt-3">
											<i className="fakepasswordicon fas fa-eye-slash cursor-pointer p-2"></i>
										</span>
                    </div>
                    <div className="mb-3 d-sm-flex justify-content-between">
                      <div>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="rememberCheck"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="rememberCheck"
                        >Remember me?</label>
                      </div>
                      <a href="forgot-password.html">Forgot password?</a>
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
                      <a
                        href="#"
                        className="btn btn-light mb-0"
                      >
                        <svg
                          height="16"
                          viewBox="0 0 20 20"
                          width="16"
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
                        in with Google</a>
                      <a
                        href="#"
                        className="btn btn-light mb-0"
                      ><i className="fab fa-fw fa-facebook-f text-facebook me-2"></i>Sign
                        in with Facebook</a>
                    </div>

                    <div className="text-primary-hover text-body mt-3 text-center"> Copyrights
                      ©2023 Booking. Build by <a
                        href="https://www.webestica.com/"
                        className="text-body"
                      >Webestica</a>.
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
