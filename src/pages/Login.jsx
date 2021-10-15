import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import LoginAction from '../Redux/Actions';

import rockGlass from '../images/rockGlass.svg';

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
      <Form className="meals">
        <div className="meals">
          <h4 className="logo">App de receitas</h4>
          <object
            className="rocksGlass"
            type="image/svg+xml"
            data={ rockGlass }
          >
            Glass
          </object>
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            id="login-input"
            placeholder="Email"
            data-testid="email-input"
            value={ email }
            onChange={ handleChangeOnEmail }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            id="password-input"
            value={ password }
            onChange={ handleChangeOnPassWord }
            placeholder="Password"
            data-testid="password-input"
          />
        </Form.Group>

        <Button
          type="submit"
          data-testid="login-submit-btn"
          disabled={ disabled }
          onClick={ handleClick }
          variant="primary"
          className="mb-3"
        >
          Entrar
        </Button>
      </Form>
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
