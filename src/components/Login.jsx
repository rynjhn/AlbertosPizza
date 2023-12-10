import React from 'react'



const Login = () => {
    
  return (
    <div>
        <div className="container-fluid">
      <div className="row">
        <div className="login-pic-side col-6 "></div>
        <div className="login-form-side col-6">
          <div className="login-container row g-3 justify-content-center align-content-center">
            <div className="col-9">
              <h1>Sign up</h1>
              <div className="row mt-4">
                <div className="col">
                  <input
                    className="login-input w-100"
                    type="text"
                    placeholder="Email:"
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col">
                  <input
                    className="login-input w-100"
                    type="text"
                    placeholder="Password:"
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col">
                  <button  className="login-btn w-100">Sign up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Login
