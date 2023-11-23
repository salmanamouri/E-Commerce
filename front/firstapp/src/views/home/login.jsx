import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/authService";

function Login() {

  const [data,setdata] = useState();
    const navigate = useNavigate();


    const onSaveHandler = (e) => {
        e.preventDefault();
        authService.login(data).then((res)=>{
          console.log(res);
          localStorage.setItem("user" , JSON.stringify(res.data))
          navigate("/");
        })
        .catch((err)=>{
          console.log(err);
        })
      }

    const onChange = (e) => {
      setdata({
        ...data,
        [e.target.name]:e.target.value
      })
      console.log(data);
    }



    return(
       <>
<div className="container-scroller">
  <div className="container-fluid page-body-wrapper full-page-wrapper">
    <div className="content-wrapper d-flex align-items-center auth px-0">
      <div className="row w-100 mx-0">
        <div className="col-lg-4 mx-auto">
          <div className="auth-form-light text-left py-5 px-4 px-sm-5">
            <div className="brand-logo">
              <img src="../../images/logo-dark.svg" alt="logo" />
            </div>
            <h4>Hello! let's get started</h4>
            <h6 className="font-weight-light">Sign in to continue.</h6>
            <form className="pt-3" onSubmit={onSaveHandler}>
              <div className="form-group">
                <input type="email" name="email" onChange={onChange} className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username" />
              </div>
              <div className="form-group">
                <input type="password" name="password" onChange={onChange} className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <div className="mt-3">
               
                 {/* <Link className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" to="/">SIGN IN
                </Link> */}
                <div className="form-group">
                <input type="submit" placeholder="Sign In" />
              </div>

              </div>
              <div className="my-2 d-flex justify-content-between align-items-center">
                <div className="form-check">
                  <label className="form-check-label text-muted">
                    <input type="checkbox" className="form-check-input" />
                    Keep me signed in
                  </label>
                </div>
                <a href="#" className="auth-link text-black">Forgot password?</a>
              </div>
              <div className="mb-2">
                <button type="button" className="btn btn-block btn-facebook auth-form-btn">
                  <i className="typcn typcn-social-facebook mr-2" />Connect using facebook
                </button>
              </div>
              <div className="text-center mt-4 font-weight-light">
                Don't have an account? <a href="register.html" className="text-primary">Create</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* content-wrapper ends */}
  </div>
  {/* page-body-wrapper ends */}
</div>
       </>
    );
}

export default Login