<?php
include('database/conn.php');
include('assets/login-header.php');
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- font-awsom-cdn  -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <!-- font-awsom-cdn  -->

    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/style_login.css" />
    <title>Sign in & Sign up Form</title>
  </head>
  <body>
    <div class="container-otp">
      <div class="forms-container-otp">
        <div class="signin-signup-otp">
          <form action="#" class="sign-in-form-otp">
            <h2 class="title-otp">Sign in</h2>
            <div class="input-field-otp">
              <i class="fa-solid fa-user"></i>
              <input type="text" placeholder="Id" />
            </div>
            <div class="input-field-otp">
              <i class="fa-solid fa-phone"></i>
              <input type="text" placeholder="Phone Number" />
            </div>
            <div class="input-field-otp">
              <i class="fa-solid fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <!--<input-->
            <!--  type="submit"-->
            <!--  id="sign-up-btn"-->
            <!--  value="continue"-->
            <!--  class="btn-otp solid"-->
            <!--/>-->
            <button type="buttton" id="sign-up-btn" class="btn-otp solid"
            onClick=loginAlert()>  
              Continue
            </button>
          </form>

          <form action="#" class="sign-up-form-otp">
            <div class="title-otp">
              <h2>OTP Verification</h2>
            </div>
            <p>Please type OTP send to registered number</p>
            <p>The OTP will expire in <span class="time-otp"></span>s</p>
            <div class="row-otp">
              
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
            <button type="button" id="sign-in-btn" class="btn-otp solid">
              Login
            </button>
            
            <div class="timer-otp">
              Didn't recieve code?
              <button type="button" id="resend" class="btn-otp solid">
                Resend OTP
              </button>
            </div>
            </form>
          </form>
        </div>
      </div>

      <div class="panels-container-otp">
        <div class="panel-otp left-panel-otp">
          <div class="content-otp">
            <p>
                <br>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
          </div>
          <img src="images/login/login-1.png" class="image-otp" alt="" />
        </div>
        <div class="panel-otp right-panel-otp">
          <div class="content-otp">
              <h6></h6>
              <h6></h6>
            <p>
                <br>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
          </div>
          <img src="images/login/login-2.png" class="image-otp" alt="" />
        </div>
      </div>
    </div>

    <script>
      const idValue = document.querySelector('.sign-in-form-otp input[placeholder="Id"]').value;
      const phoneNumberValue = document.querySelector('.sign-in-form-otp input[placeholder="Phone Number"]').value;
      const passwordValue = document.querySelector('.sign-in-form-otp input[placeholder="Password"]').value;
      const sign_in_btn = document.querySelector("#sign-in-btn");
      const sign_up_btn = document.querySelector("#sign-up-btn");
      const container = document.querySelector(".container-otp");
      
      function loginAlert(){
          if (!idValue || !phoneNumberValue || !passwordValue) {
              alert('Please fill in all the fields');
              return;
          }

          console.log('User input:', { idValue, phoneNumberValue, passwordValue });
      }

      sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode-otp");
      });

      sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode-otp");
      });


      const OTPinputs = document.querySelectorAll("input");
      const button = document.querySelector("button");

      window.onload = () => OTPinputs[0].focus();

      OTPinputs.forEach((input) => {
        input.addEventListener("input", () => {
          const currentInput = input;
          const nextInput = currentInput.nextElementSibling;

        //   if (currentInput.value.length > 1 && currentInput.value.length == 2) {
        //     currentInput.value = "";
        //   }

          if (
            nextInput !== null &&
            nextInput.hasAttribute("disabled") &&
            currentInput.value !== ""
          ) {
            nextInput.removeAttribute("disabled");
            nextInput.focus();
          }

          if (!OTPinputs[3].disabled && OTPinputs[3].value !== "") {
            button.classList.add("active-otp");
          } else {
            button.classList.remove("active-otp");
          }
        });

        input.addEventListener("keyup", (e) => {
          console.log(e);
          if (e.key == "Backspace") {
            if (input.previousElementSibling != null) {
              e.target.value = "";
              e.target.setAttribute("disabled", true);
              input.previousElementSibling.focus();
            }
          }
        });
      });

      function timer(n) {
      document.getElementById("resend").disabled = true;
      const interval = setInterval(() => {
        if (n == 0) {
          clearInterval(interval);
          document.getElementById("resend").disabled = false;
        }
        document.querySelector(".time-otp").innerHTML = n;
        n = n - 1;
          }, 1000);
      }
      timer(30);
      document.getElementById("resend").onclick = function () {
         timer(30);
      };
    </script>
  </body>
</html>
