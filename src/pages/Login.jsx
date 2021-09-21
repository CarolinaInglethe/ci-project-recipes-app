import React, { useState, useEffect } from 'react';

function Login() {
  const [email, setNewEmail] = useState('');
  const [password, setNewPassword] = useState('');
  const [disabled, setDisable] = useState(true);

  const handleChangeOnEmail = ({ target }) => {
    setNewEmail(target.value);
  };

  const handleChangeOnPassWord = ({ target }) => {
    setNewPassword(target.value);
  };

  useEffect(() => {
    const handleDisable = () => {
      const regex = /\S+@\S+\.\S+/; // Font: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
      const testEmail = regex.test(email);
      const minLength = 5;
      const testPassword = (password.length >= minLength);
      if (testEmail && testPassword) {
        setDisable(false);
      } else {
        setDisable(true);
      }
    };
    handleDisable();
  }, [email, password]);

  return (
    <div>
      <h2>Login</h2>

      <form>
        <input
          type="text"
          id="login-input"
          placeholder="Email"
          data-testid="email-input"
          value={ email }
          onChange={ handleChangeOnEmail }
        />

        <input
          type="password"
          id="password-input"
          value={ password }
          onChange={ handleChangeOnPassWord }
          placeholder="Password"
          data-testid="password-input"
        />

        <button
          type="submit"
          data-testid="login-submit-btn"
          disabled={ disabled }
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
