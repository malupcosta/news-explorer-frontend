import { useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

const INITIAL_FORM_VALUES = {
  email: "",
  password: "",
  name: "",
};

function Register({ isOpen, onClose, onRegister, onLoginClick, errorMessage }) {
  const [values, setValues] = useState(INITIAL_FORM_VALUES);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    const form = event.target.closest("form");

    setValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: event.target.validationMessage,
    }));

    setIsValid(form.checkValidity());
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!isValid) {
      return;
    }

    onRegister(values);
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      title="Inscrever-se"
      name="register"
      buttonText="Inscrever-se"
      onClose={onClose}
      onSubmit={handleSubmit}
      captionText="ou"
      linkText="Entrar"
      onLinkClick={onLoginClick}
      isValid={isValid}
      errorMessage={errorMessage}
    >
      <label className="popup__field">
        <span className="popup__label">E-mail</span>
        <input
          className="popup__input"
          type="email"
          name="email"
          placeholder="Insira seu e-mail"
          value={values.email}
          onChange={handleChange}
          required
        />
        <span className="popup__input-error">{errors.email}</span>
      </label>

      <label className="popup__field">
        <span className="popup__label">Senha</span>
        <input
          className="popup__input"
          type="password"
          name="password"
          placeholder="Insira sua senha"
          minLength="8"
          value={values.password}
          onChange={handleChange}
          required
        />
        <span className="popup__input-error">{errors.password}</span>
      </label>

      <label className="popup__field">
        <span className="popup__label">Nome de usuário</span>
        <input
          className="popup__input"
          type="text"
          name="name"
          placeholder="Insira seu nome de usuário"
          minLength="2"
          maxLength="30"
          value={values.name}
          onChange={handleChange}
          required
        />
        <span className="popup__input-error">{errors.name}</span>
      </label>
    </PopupWithForm>
  );
}

export default Register;
