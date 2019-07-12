import React from "react";
import "./login.css";
function LoginComponent() {
  return (
    <div >
      <form className="log_in">
        <br />
        <br />
        <label for="email">
          Email
          <br/>
          <input
            type="text"
            id="email"
            // style={{ height: "3vw", width: "40vw" }}
          />
        </label>

        <br />
        <br />
        <label for="password">
          password
          <br/>
          <input
            type="text"
            id="password"
            // style={{ height: "3vw", width: "40vw" }}
          />
        </label>
        <br />
        <br />

        <div id="fp">
          <a style={{ color: "#2b9cef" }} href="#">
            Forgot password?
          </a>
          </div>
        <br />
       

        <a href="index1.html">
          <div  class="button_1" value="1" >
            Log in
          </div>
        </a>
      </form>
    </div>
  );
}

export default LoginComponent;
