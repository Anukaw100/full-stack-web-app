import React from "react";
import PropTypes from "prop-types";
import Bus from "Common/bus.js";
import FlashMessage from "Common/flash-message.jsx";
import "Common/css/authentication/header.css";
import "Common/css/authentication/container.css";
import "Common/css/authentication/form.css";

export function AuthInput(props) {
  const { type, name, value, onChange } = props;
  const label = name[0].toUpperCase() + name.substring(1);
  const updateValue = (event) => onChange(event.target.value);

  return (
    <label>
      {label}:
      <input
        className="form__input"
        type={type}
        name={name}
        value={value}
        onChange={updateValue}
        required
      />
    </label>
  );
}

AuthInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export function AuthForm(props) {
  const { signUp, formJsonObject, failureStatus, failureMessage, children } =
    props;

  const formTitle = signUp ? "Sign Up" : "Log In";
  const formUrl = signUp ? "/signup" : "/login";
  const altTitle = signUp ? "Log In" : "Sign Up";
  const altUrl = signUp ? "/login" : "/signup";

  const flash = (message) => Bus.emit("flash", message);
  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(formUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formJsonObject),
    });

    if (response.status === 200) {
      const user = await response.json();
      sessionStorage.setItem("Name", user.name);
      window.location = "/account";
    }

    if (response.status === failureStatus) {
      flash(await failureMessage(response));
    }
  };

  return (
    <main className="container">
      <h1 className="container__heading">{formTitle}</h1>
      <FlashMessage />
      <form className="form" onSubmit={handleSubmit}>
        {children}
        <button className="form__button" type="submit">
          {formTitle}
        </button>
      </form>
      <span className="container__alt-info">OR</span>
      <a className="container__alt-button" href={altUrl}>
        {altTitle}
      </a>
    </main>
  );
}

AuthForm.propTypes = {
  signUp: PropTypes.bool.isRequired,
  formJsonObject: PropTypes.objectOf(PropTypes.string).isRequired,
  failureStatus: PropTypes.number.isRequired,
  failureMessage: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.AuthInput).isRequired,
};
