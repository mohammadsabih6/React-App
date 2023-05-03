import React, { useState } from "react";
import Home from './Home';

function App() {

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);


  const database = [
    {
      email: "admin@xloopdigital.com",
      password: "admin123"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, pass } = e.target.elements;
    const user = database.find((user) => user.email === email.value && user.password === pass.value);
    // const notUser = database.find((user) => user.email !== email.value || user.password !== pass.value);

  if (user) {
    setIsSubmitted(true);
    // return <Navigate replace to="/Home" />;
  } else {
    setErrorMessages({message:"email or password incorrect"})
  }

  }

  const renderErrorMessage = () => {
    if (errorMessages.message) {
      return <div className="error">{errorMessages.message}</div>;
    } else {
      return null;
    }
  };
  
  const renderForm = (
    <>
    <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="Email" className= "form-label"> Email </label>
          <input type="email" name="email"  className= "form-control" required />
        </div>
        <div className="mb-3">
          <label htmlFor="Password" className="form-label"> Password </label>
          <input type="password" name="pass" className="form-control" required />
          {renderErrorMessage()}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </>
  );

  return (
    <div className="app">
      <div className="login-form">
        {isSubmitted ? <Home/> : renderForm}
      </div>
    </div>
  );
}


export default App;