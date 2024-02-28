import React, { useEffect, useRef, useState } from "react";
import "./Login.css";
import login_1 from "../../assets/design/login-1.svg";
import login_2 from "../../assets/design/login-2.svg";
import { FaUser, FaPhoneAlt, FaLock } from "react-icons/fa";

const Login = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [otpValues, setOtpValues] = useState(Array(6).fill(""));
  const OTPinputs = Array.from({ length: 6 }, (_, index) => index);

  useEffect(() => {
    const handleSignUpClick = () => {
      setIsSignUpMode(true);
    };

    const handleSignInClick = () => {
      setIsSignUpMode(false);
    };

    document
      .getElementById("sign-up-btn")
      .addEventListener("click", handleSignUpClick);
    document
      .getElementById("sign-in-btn")
      .addEventListener("click", handleSignInClick);

    return () => {
      document
        .getElementById("sign-up-btn")
        .removeEventListener("click", handleSignUpClick);
      document
        .getElementById("sign-in-btn")
        .removeEventListener("click", handleSignInClick);
    };
  }, []);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      // your timer logic
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  useEffect(() => {
    if (otpValues[5] !== "") {
      document.getElementById("sign-in-btn").classList.add("active-otp");
    } else {
      document.getElementById("sign-in-btn").classList.remove("active-otp");
    }
  }, [otpValues]);

  const handleInputChange = (index, value) => {
    setOtpValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = value;

      if (value.length > 1 && value.length === 2) {
        newValues[index] = "";
      }

      return newValues;
    });

    const nextInput = OTPinputs[index + 1];
    if (nextInput !== undefined && value !== "") {
      document
        .getElementById(`otp-input-${nextInput}`)
        .removeAttribute("disabled");
      document.getElementById(`otp-input-${nextInput}`).focus();
    }
  };

  const handleBackspace = (index, e) => {
    if (e.key === "Backspace" && index > 0 && otpValues[index] === "") {
      setOtpValues((prevValues) => {
        const newValues = [...prevValues];
        newValues[index - 1] = "";
        return newValues;
      });

      const prevInput = OTPinputs[index - 1];
      if (prevInput !== undefined) {
        document.getElementById(`otp-input-${prevInput}`).focus();
      }
    }
  };

  const timer = (n) => {
    const timeOtpElement = document.querySelector(".time-otp");

    if (timeOtpElement) {
      document.getElementById("resend").disabled = true;

      const interval = setInterval(() => {
        if (n === 0) {
          clearInterval(interval);
          document.getElementById("resend").disabled = false;
        } else {
          timeOtpElement.innerHTML = n;
          n = n - 1;
        }
      }, 1000);
    }
  };

  useEffect(() => {
    timer(30);
  }, []);

  useEffect(() => {
    document.getElementById("resend").onclick = () => {
      timer(30);
    };
  }, []);

  return (
    <>
      <div
        className={`container-otp ${isSignUpMode ? "sign-up-mode-otp" : ""}`}
      >
        <div className="forms-container-otp">
          <div className="signin-signup-otp">
            <form action="#" className="sign-in-form-otp">
              <h2 className="title-otp">Sign in</h2>
              <div className="input-field-otp">
                <div className="icon_login">
                  <FaUser />
                </div>
                <input type="text" placeholder="Id" />
              </div>
              <div className="input-field-otp">
                <div className="icon_login">
                  <FaPhoneAlt />
                </div>
                <input type="text" placeholder="Phone Number" />
              </div>
              <div className="input-field-otp">
                <div className="icon_login">
                  <FaLock />
                </div>
                <input type="password" placeholder="Password" />
              </div>
              <input
                type="submit"
                id="sign-up-btn"
                value="continue"
                className="btn-otp solid"
              />
            </form>

            <form action="#" className="sign-up-form-otp">
              <div className="title-otp">
                <h2>OTP Verification</h2>
              </div>
              <p>Please type OTP send to registered number</p>
              <p>
                The OTP will expire in <span className="time-otp"></span>s
              </p>
              <div className="row-otp">
              <form action="#">
              <div class="input_fields-otp">
                <input type="number" />
                <input type="number" disabled />
                <input type="number" disabled />
                <input type="number" disabled />
                <input type="number" disabled />
                <input type="number" disabled />
              </div>
              </div>
              <button type="button" id="sign-in-btn" className="btn-otp solid">
                Login
              </button>

              <div className="timer-otp">
                Didn't recieve code?
                <button type="button" id="resend" className="btn-otp solid">
                  Resend OTP
                </button>
              </div>
              </form>
            </form>
          </div>
        </div>

        <div className="panels-container-otp">
          <div className="panel-otp left-panel-otp">
            <div className="content-otp">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
            </div>
            <img src={login_1} className="image-otp" alt="" />
          </div>

          <div className="panel-otp right-panel-otp">
            <div className="content-otp">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
            </div>
            {isSignUpMode && <img src={login_2} className="image-otp" alt="" />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
