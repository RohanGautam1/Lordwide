import React from 'react'
import './comp1.css';
import { FaBeer } from 'react-icons/fa';
import { AiOutlineLeft } from "react-icons/ai";
// AiOutlineLeft

function SignIn1() {
  return (
    <>
      <div className="container login-container my-5">
        <div className="row">
          <div className="col-md-6 welcome_auth">
            {/* Add Image here */}
          </div>

          <div className="offset-md-1 col-md-4 login-form">
            <div className="login_form_in">
              <div className="auth_branding">
                <a className="auth_branding_in" href="https://procraft.studio">XYZ</a>
              </div>
              <div className='fpass'>
                <h1 className="auth_title text-left">Forgot password?</h1>
              </div>
              <form>
                <div className="alert  border-0" role="alert">
                  Enter the email address you used when you joined and we'll send you instructions to reset your password.</div>
                <div className="form-group">
                  Your email
                  <input type="email" className="form-control" name="email" placeholder="Tonynguyen@example.com" />
                </div>
                <div className="form-group">
                  <button type="button" className="btn btn-primary btn-lg btn-block">Submit</button>
                </div>
                <div className="form-group other_auth_links">
                  <a className="" href="https://procraft.studio"> <AiOutlineLeft /> Back to sign in </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn1
