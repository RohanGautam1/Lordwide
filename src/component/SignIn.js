import React from 'react'
import './comp.css'

function SignIn() {
  return (
    <>
      <div class="container login-container my-5">
        <div class="row">
          <div class="col-md-6 welcome_auth">
            {/* Add Image here */}
          </div>

          <div class="offset-md-1 col-md-4 login-form">
            <div class="login_form_in">
              <div class="auth_branding">
                <a class="auth_branding_in" href="https://procraft.studio"></a>
              </div>
              <div className='fpass'>
                <h1 class="auth_title text-left">Forgot password?</h1>
              </div>
              <form>
                <div class="alert  border-0" role="alert">
                  Enter the email address you used when you joined and we'll send you instructions to reset your password.</div>
                <div class="form-group">
                  Your email
                  <input type="email" class="form-control" name="email" placeholder="Tonynguyen@example.com" />
                </div>
                <div class="form-group">
                  <button type="button" class="btn btn-primary btn-lg btn-block">Submit</button>
                </div>
                <div class="form-group other_auth_links">
                  <a class="" href="https://procraft.studio"> Back to sign in </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn
