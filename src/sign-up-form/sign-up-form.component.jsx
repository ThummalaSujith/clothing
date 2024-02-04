import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../src/utils/firebase/firebase.utils";
import  FormInput  from "../form-input/form-input"
import "./sign-up-form.styles.scss"
import Button from '../button/button.component'
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formData, setformData] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setformData((oldvalue) => {
      return { ...oldvalue, [name]: value };
    });
    console.log(formData);
  }

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
        />

        <FormInput
          label="email"
          type="email"
          name="email"
          value={email}
          required
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          required
          onChange={handleChange}
        />

        <FormInput
          label="confirm password"
          type="password"
          value={confirmPassword}
          name="confirmPassword"
          required
          onChange={handleChange}
        />
        <Button type="submit" buttontype='inverted'>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
