import React, { useEffect, useState } from "react";
import GoogleButton from "react-google-button";
import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../../Firebase";
import { Link, useNavigate } from "react-router-dom";
import {
  LoginUser,
  signupUser,
  loginWithGoogle,
  clearState,
  userSelector,
} from "../../slices/AuthSlice/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, isSuccess, statusCode, isError, errorMessage } =
    useSelector(userSelector);
  const [eye, seteye] = useState(true);
  const [type, settype] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [firebaseUser, setFirebaseuser] = useState({
    name: "",
    email: "",
    token: "",
  });

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  useEffect(() => {
    if (errorMessage == "Please choose roles!") {
      navigate("/role");
    }
  }, []);
  const [password, setpassword] = useState("password");

  const handleChange = (e) => {
    
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginData.email == "" || loginData.password == "") {
      setError("All fields required please select all field");
      setStatus(true);
    }else{
      dispatch(LoginUser(loginData)).then((data) => {
        console.log(data);
        if (data?.payload?.data?.token) {
          navigate("/home");
          toast.success(data?.payload?.message);
        } else if(data.payload.statusCode === 401){
          navigate('/emailVerify')
          localStorage.setItem("email",loginData.email)
          toast.success(data?.payload?.message);
        }else{
          toast.error(data?.payload?.message);
        }
      });
   
    }
    e.target.reset();
    return () => {
      dispatch(clearState());
    };
   
  };

  const Eye = () => {
    if (password == "password") {
      setpassword("text");
      seteye(false);
      settype(true);
    } else {
      setpassword("password");
      seteye(true);
      settype(false);
    }
  };
  //function for response from firebase
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then((res) => {
        setFirebaseuser((state) => {
          return {
            ...state,
            name: res.user.displayName,
            email: res.user.email,
            token: res.user.accessToken,
          };
        });
      })
      .catch((err) => {});
  };
  useEffect(() => {
    if (!firebaseUser.token) return;
    dispatch(loginWithGoogle(firebaseUser)).then((data) => {
      if (data?.payload?.data?.token) {
        toast.success(data.payload.message);
        navigate("/home");
      }
    });
    return () => {
      dispatch(clearState());
    };
  }, [firebaseUser.token]);

  return (
    <div className="main-div">
      <section>
        <div className="container">
          <div className="card login-card">
            <div className="card-body login-card-body">
              <div className="row">
                <div className="col-lg-6 col-sm-12 login-div">
                  <div className="d-flex  flex-wrap align-items-center">
                    <div className="rounded-circle roundIcon my-3">&nbsp;</div>
                    <h2 className="text-white form-heading">
                      Target More &amp; Influence More Users With KOL
                    </h2>
                    <div className="bordered-text col-lg-8 col-md-12">
                      <p className="text-white mb-0">
                        To get the maximum attention on your product and
                        services, invest in KOL.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6  col-sm-12 login-form">
                  <div className="row align-items-center ">
                    <form onSubmit={handleSubmit}>
                      <h2 className="login-heading mb-3">Login</h2>
                      <div className="form-group mb-3">
                        <label>Email</label>
                        <span className="astric-span">*</span>
                        <input
                          type="email"
                          id="form2Example17"
                          className={`form-control ${
                            error === "" || loginData.email
                             ? ""
                             : "border-danger"
                         }`}
                          placeholder="Enter email"
                          name="email"
                          onChange={handleChange}
                        />
                        {error && loginData.email == "" && (
                          <span className="text-danger">{error}</span>
                        )}
                      </div>

                      <div className="form-group mb-3">
                        <label>Password</label>
                        <span className="astric-span">*</span>
                        <div className="position-relative">
                          <input
                            type={password}
                            id="form2Example27"
                            className={`form-control ${
                              error === "" || loginData.password
                               ? ""
                               : "border-danger"
                           }`}
                            placeholder="Enter password"
                            name="password"
                            onChange={handleChange}
                          />

                          <i
                            onClick={Eye}
                            className={`eye-icon fa ${
                              eye ? "fa-eye-slash" : "fa-eye"
                            }`}
                          ></i>
                          {error && loginData.password == "" && (
                          <span className="text-danger">{error}</span>
                        )}
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <button
                          type="submit"
                          className="btn theme-btn btn-lg btn-block"
                        >
                          Login
                        </button>
                        <span className="optionText1 text-right">
                          <Link to="/emailCheck">Forgot password ?</Link>
                        </span>
                      </div>
                    </form>
                    <div className="col-12 justify-content-center align-items-center position-relative my-4">
                      <hr className="col-12" />{" "}
                      <span className="orText">or </span>
                    </div>

                    <div className="col-12 d-flex justify-content-center align-items-center mb-3">
                      <GoogleButton
                        label="Sign in with Google"
                        style={{ background: "#342951" }}
                        onClick={signInWithGoogle}
                      />
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center mt-3">
                      <span className="optionText text-center">
                        Don't have an account?{" "}
                        <Link to="/role">Sign Up</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
