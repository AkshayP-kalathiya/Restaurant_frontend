import React, { useEffect, useState } from "react";
import login from "../Image/loginLarge1.jpeg";
import loginlarge from "../Image/login_n1.png";
import logo from "../Image/Group.png";
import { IoMdLock, IoMdMail } from "react-icons/io";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1441) {
        console.log("small");
        setImageSrc(login);
      } else if (window.innerWidth >= 1441) {
        console.log("large");
        setImageSrc(loginlarge);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // const validate = () => {
  //   const errors = {};
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //   if (!email) {
  //     errors.email = "Email is required";
  //   } else if (!emailRegex.test(email)) {
  //     errors.email = "Email is invalid";
  //   }

  //   if (!password) {
  //     errors.password = "Password is required";
  //   } else if (password.length < 6) {
  //     errors.password = "Password must be at least 6 characters";
  //   }

  //   return errors;
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const validationErrors = validate();
  //   setErrors(validationErrors);

  //   if (Object.keys(validationErrors).length === 0) {
  //     console.log("Form submitted", { email, password });
  //   }
  // };
  return (
    <div>
      <div className="j-login-page">
        <div className="login-container">
          <div className="row j-row-width position-relative">
            <div className="col-6  login-img-col">
              <div className="login-img position-relative">
                <div  className="a_loginImg"><img src={imageSrc} alt="login"/></div>
                <img src={logo} alt="login"  className="logo_position"/>
              </div>
            </div>
            <div className="col-6 j-form-center">
              <div className="login-form">
                <form
                // onSubmit={handleSubmit}
                >
                  <div className="j-form-head">
                    <h2 className="text-white">Bienvenido a Cypro</h2>
                    <p className="text-white">
                      Llena tus datos de cuenta para ingresar
                    </p>
                  </div>
                  <div className="j-form-body">
                    <div className="mb-3">
                      <label
                        htmlFor="email"
                        className="form-label text-white"
                      >
                        Correo
                      </label>
                      <div className="icon-input">
                        <IoMdMail className="i" />
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Escribir . . ."
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      {errors.email && (
                        <div className="text-danger">{errors.email}</div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="password"
                        className="form-label text-white"
                      >
                        Contraseña
                      </label>
                      <div className="icon-input">
                        <IoMdLock className="i" />
                        <input
                          type={showPassword ? "text" : "password"}
                          className="form-control"
                          id="password"
                          placeholder="Escribir . . ."
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                        />

                        <button
                          type="button"
                          className="border-0 bg-transparent"
                          onClick={() =>
                            setShowPassword((prevState) => !prevState)
                          }
                        >
                          {showPassword ? (
                            <FaEye className="i" />
                          ) : (
                            <FaEyeSlash className="i" />
                          )}
                        </button>
                      </div>
                      {errors.password && (
                        <div className="text-danger">{errors.password}</div>
                      )}
                    </div>
                    <Link to={'/dashboard'}>
                      <button type="submit" className="j-login-btn text-white">
                        Ingresar
                      </button>
                    </Link>
                  </div>
                </form>

                <div className="j-login-last text-white text-center">
                  <a href="" className="me-2">
                    <span>Términos y Condiciones</span>{" "}
                  </a>
                  /
                  <a href="" className="ms-2">
                    <span>Políticas de privacidad</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
