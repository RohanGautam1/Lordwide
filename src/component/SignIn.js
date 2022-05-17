import React from 'react'
import './comp1.css';

// AiOutlineLeft

const SignIn = () => {
  return (
    <>
        <section class="vh-100">
          <div class="container h-custom">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div className='text-right'>
                <p class="text-end" >Don't have an account? <a href="#!"
                  class="link-danger">Register</a></p>
              </div>
              {/* image is Here */}
              {/* <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt="Sample image">
      </div> */}


              <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form>
<div class="d-flex p-2 bd-highlight  d-flex justify-content-between">
                  {/* Email input */}
                  <div class="form-outline m-1">
                    <label class="form-label" for="form3Example3">Email address</label>
                    <input type="email" id="form3Example3" class="form-control form-control-lg"
                      placeholder="Enter a valid email address" />

                  </div>

                  {/* Password Input */}

                  <div class="form-outline m-1">
                    <label class="form-label" for="form3Example4">Password</label>

                    <input type="password" id="form3Example4" class="form-control form-control-lg ml-4"
                      placeholder="Enter password" />
                  </div>
                  </div>

                  <div class="d-flex justify-content-between align-items-center">
                  


                    {/* Checkbox  */}

                    <div class="form-check mb-0">
                      <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                      <label class="form-check-label" for="form2Example3">
                        Remember me
                      </label>
                    </div>
                    <a href="#!" class="text-body">Forgot password?</a>
                  </div>

                  <div class="text-center text-lg-start mt-4 pt-2">
                    <button type="button" class="btn btn-primary btn-lg">Login</button>

                  </div>

                </form>
              </div>
            </div>
          </div>

        </section>
    </>
  )
}
export default SignIn
