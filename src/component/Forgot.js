import React from 'react'
import './comp1.css';
import { AiOutlineLeft } from "react-icons/ai";
import BackgroundImage from '../images/reset_password_background.svg';

// AiOutlineLeft

function Forgot() {
  return (
    <>
      <div className="container-fluid  login-container">
        <div className="row">

        <div className="col-md-6 bg-img" style={{ backgroundImage:`url(${BackgroundImage})` }}>
        <h1 className='img-txt'>Bring your restaurant to the next level.</h1>
      </div>

          <div className="offset-md-1 col-md-4 login-form">
            <div className="login_form_in">
              <h1 className="auth_title text-left forgotpassword ">Forgot password?</h1>
              <p className= "paragraph-text ml-0 pl-0">
                  Enter the email address you used when you joined and we'll send you instructions to reset your password.
                  </p>
              <form>
                
                <div className="form-group mb-3">
                  <div className="mb-2"> Your email </div>
                  <input type="email" className="form-control email-section" name="email" placeholder="Tonynguyen@example.com" />
                </div>
                <div className="form-group">
                  <button type="button" className="btn btn-primary btn-lg btn-block mb-4 w-100 Submit-Button">Submit</button>
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

export default Forgot
