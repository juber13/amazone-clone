import { Link } from "react-router-dom";
const Register = () => {
   return (
    <div className="form-wrapper">
      <div className="form-container">
        <span className="logo">Register</span>
        <form autoComplete="on" >
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="file" id="file" style={{ display: "none" }} />
          <label htmlFor="file">
            {/* <img src={Add} alt="user" /> */}
            <span>Add an Avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>
          You don't have account ? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
