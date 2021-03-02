import React from 'react';
import { useForm } from 'react-hook-form';

const ReactHookForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log('data', data);
    console.log('errors', errors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="First name"
        name="firstName"
        ref={register({ required: true, maxLength: 80 })}
      />
      <br />
      <input
        type="text"
        placeholder="Last name"
        name="lastName"
        ref={register({ required: true, maxLength: 100 })}
      />
      <br />
      <input
        type="text"
        placeholder="Email"
        name="email"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      <br />
      <input
        type="tel"
        placeholder="Mobile number"
        name="mobileNumber"
        ref={register({ required: true, minLength: 6, maxLength: 12 })}
      />
      <br />
      <select name="title" ref={register({ required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>
      <br />
      Developer:
      <input
        name="developer"
        type="radio"
        value="Yes"
        ref={register({ required: true })}
      />
      Yes
      <input
        name="developer"
        type="radio"
        value="No"
        ref={register({ required: true })}
      />
      No
      <br />
      <br />
      <input type="submit" />
    </form>
  );
};

export default ReactHookForm;
