import React from 'react';

function Register() {
    return (
        <div>
            <form className='col-4 login'>

                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <input type="text" id="form3Example1" class="form-control" />
                            <label class="form-label" for="form3Example1">First name</label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                            <input type="text" id="form3Example2" class="form-control" />
                            <label class="form-label" for="form3Example2">Last name</label>
                        </div>
                    </div>
                </div>


                <div class="form-outline mb-4">
                    <input type="email" id="form3Example3" class="form-control" />
                    <label class="form-label" for="form3Example3">Email address</label>
                </div>


                <div class="form-outline mb-2">
                    <input type="password" id="form3Example4" class="form-control" />
                    <label class="form-label" for="form3Example4">Password</label>
                </div>
                <div class="text-center mt-2">
                    <input class="form-check-input me-2" type="checkbox" value=""/>
                    <label class="form-check-label" for="form2Example33">
                    I agree to Register for Flipkart account 
                    </label>
                    <button type="button" class="btn btn-primary btn-block mb-4 text-center">REGISTER</button>
                    <p>or sign up with:</p>
                    <button type="button" class="btn btn-primary btn-floating mx-1">
                        <i class="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" class="btn btn-primary btn-floating mx-1">
                        <i class="fab fa-google"></i>
                    </button>

                    <button type="button" class="btn btn-primary btn-floating mx-1">
                        <i class="fab fa-twitter"></i>
                    </button>

                    <button type="button" class="btn btn-primary btn-floating mx-1">
                        <i class="fab fa-github"></i>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Register;