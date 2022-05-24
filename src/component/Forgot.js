import React from 'react'
import '../App.css';
import { AiOutlineLeft } from "react-icons/ai";
import BackgroundImage from '../images/big-image.png';
import LogoImage from '../images/logo.svg';
import LogoImage2 from '../images/button-more.svg';

// AiOutlineLeft

function Forgot() {
  return (
    <>
      <div className="container-fluid login-container">
        <div className="row">


          <div className="col-md-6 bg-img " style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <img className='logo-image' src={LogoImage} alt="logo-img" />
            <h1 className="img-txt mt-5 mb-0 ">Bring your restaurant <br /> to the next level. </h1>
          </div>
          
          {/* Form Start */}
          <div className="col-md-6">

          <div className='p-4' >
            <p className= "text-end text-decoration-none pr-0">New User? <a className="text-decoration-none a-color "href="https://www.google.com">Create an Account</a>
            <img className='logo-image2' src={LogoImage2} alt="logo-img" /></p>
          </div>

            <div className="col-md-6 offset-md-3 login_form_in login-form">
              <h1 className="auth_title forget-pass">Forgot password?</h1>
              <p className="paragraph-text ml-0 pl-0">
                Enter the email address you used when you joined and we'll send you instructions to reset your password.
              </p>

              <form>

                <div className="form-group mb-3">
                  <label htmlFor="">Your email</label>
                  <input type="email" className="form-control email-section" name="email" placeholder="Tonynguyen@example.com" />
                </div>
                <div className="form-group">
                  <button type="button" className="btn btn-primary btn-lg btn-block w-100 Submit-Button border-0">Submit</button>
                </div>
                <div className="form-group other_auth_links mt-3">
                  <a className="text-decoration-none a-color" href="https://procraft.studio"> <AiOutlineLeft /> Back to sign in </a>
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
