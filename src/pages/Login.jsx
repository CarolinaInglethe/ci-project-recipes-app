import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import LoginAction from '../Redux/Actions';

function Login({ loginEmail }) {
  const [email, setNewEmail] = useState('');
  const [password, setNewPassword] = useState('');
  const [disabled, setDisable] = useState(true);
  const history = useHistory();

  const handleChangeOnEmail = ({ target }) => {
    setNewEmail(target.value);
  };

  const handleChangeOnPassWord = ({ target }) => {
    setNewPassword(target.value);
  };

  const handleClick = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({
      email,
    }));
    loginEmail(email);
    history.push('/comidas');
  };

  useEffect(() => {
    const handleDisable = () => {
      const regex = /\S+@\S+\.\S+/; // Font: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
      const testEmail = regex.test(email);
      const minLength = 6;
      const testPassword = (password.length > minLength);
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
      <p>Login</p>
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
          onClick={ handleClick }
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  loginEmail: (email) => dispatch(LoginAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  loginEmail: PropTypes.func.isRequired,
};
