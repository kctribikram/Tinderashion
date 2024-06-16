import React from 'react';
import './Login.css';

function Signup() {
  return (
    
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h2 className="heading-section">Signup Page</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-5">
            <div className="wrap">
              <div className="img" style={{ backgroundImage: 'url(/images/about-us.jpg)' }}></div>
              <div className="login-wrap p-4 p-md-5">
                <div className="d-flex">
                  <div className="w-100">
                    <h3 className="mb-4">Sign In</h3>
                  </div>
                  <div className="w-100">
                    <p className="social-media d-flex justify-content-end">
                      <a href="#" className="social-icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-facebook"></span>
                      </a>
                      <a href="#" className="social-icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-twitter"></span>
                      </a>
                    </p>
                  </div>
                </div>
                <form action="#" className="signin-form">
                  <div className="form-group mt-3">
                    <input type="text" className="form-control" required/>
                    <label className="form-control-placeholder" htmlFor="fname">First Name</label>
                  </div>
                  <div className="form-group mt-3">
                    <input type="text" className="form-control" required/>
                    <label className="form-control-placeholder" htmlFor="lname">Last Name</label>
                  </div>
                  <div className="form-group mt-3">
                    <input type="text" className="form-control" required/>
                    <label className="form-control-placeholder" htmlFor="username">Username</label>
                  </div>
                  <div className="form-group">
                    <input id="password-field" type="password" className="form-control" required/>
                    <label className="form-control-placeholder" htmlFor="password">Password</label>
                    <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password"></span>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="form-control btn btn-primary rounded submit px-3">Sign Up</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup