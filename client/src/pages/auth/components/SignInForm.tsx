import { Link } from "react-router-dom";

const SignInForm = () => {
  return (
    <form>
      <header>
        <h1>Log in to your account</h1>
        <p>Welcome back! Please enter your details.</p>
      </header>
      <div>
        <label htmlFor="email">Email address *</label>
        <input id="email" type="email" name="email" />
      </div>
      <div>
        <label htmlFor="password">Password *</label>
        <input id="password" type="password" name="password" />
      </div>
      <button>Log in</button>
      <div>
        Forgot password? <Link to="/reset-password">Reset it</Link>
      </div>
      <div>
        Don't have an account? <Link to="/sign-up">Sign up</Link>
      </div>
    </form>
  );
};

export default SignInForm;
