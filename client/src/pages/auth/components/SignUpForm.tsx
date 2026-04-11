import { Link } from "react-router-dom";

const SignUpForm = () => {
  return (
    <form>
      <header>
        <h1>Create your account</h1>
        <p>
          Join us and start saving your favorite links — organized, searchable,
          and always within reach.
        </p>
      </header>
      <div>
        <label htmlFor="fullName">Full name *</label>
        <input id="fullName" type="text" name="fullName" />
      </div>
      <div>
        <label htmlFor="email">Email address *</label>
        <input id="email" type="email" name="email" />
      </div>
      <div>
        <label htmlFor="password">Password *</label>
        <input id="password" type="password" name="password" />
      </div>
      <button>Create account</button>
      <div>
        Already have an account? <Link to="/sign-in">Log in</Link>
      </div>
    </form>
  );
};

export default SignUpForm;
