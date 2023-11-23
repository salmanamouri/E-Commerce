import { useState } from "react";
import adminService from "../../services/adminService";
import { useNavigate } from "react-router-dom";

function Register() {


  const [data, setdata] = useState();
  const navigate = useNavigate();

  const onSignupHandler = (e) => {
     setdata({
      ...data,
      [e.target.name]:e.target.value
     })
     console.log(data);
  }

  const onSaveHandler = (e) => {
    e.preventDefault();
    adminService.create(data).then((res)=>{
      console.log(res);
      navigate("/login");
    })
    .catch((err)=>{
      console.log(err);
    })

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
            <h4>New here?</h4>
            <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
            <form className="pt-3" onSubmit={onSaveHandler}>
              <div className="form-group">
                <input name="fullname" type="text" className="form-control form-control-lg" id="exampleInputUsername1" placeholder="Username" onChange={onSignupHandler}/>
              </div>
              <div className="form-group">
                <input name="email" type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email" onChange={onSignupHandler} />
              </div>
              <div className="form-group">
                <input name="phone" type="phone" className="form-control form-control-lg" id="exampleInputphone" placeholder="Phone" onChange={onSignupHandler} />
              </div>
              <div className="form-group">
                <input name="password" type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" onChange={onSignupHandler} />
              </div>
              <div className="mb-4">
                <div className="form-check">
                  <label className="form-check-label text-muted">
                    <input type="checkbox" className="form-check-input" />
                    I agree to all Terms &amp; Conditions
                  </label>
                </div>
              </div>
             
              <button type="submit" className="btn btn-primary mr-2">Submit</button>

              <div className="text-center mt-4 font-weight-light">
                Already have an account? <a  className="text-primary">Login</a>
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

export default Register;