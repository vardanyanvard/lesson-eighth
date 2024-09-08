import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import * as yup from "yup";

const NAME = "Name";
const SURNAME = "Surname";
const LOGIN = "Login";
const AGE = "Age";
const PASSWORD = "Password";

export const formFields = [NAME, SURNAME, LOGIN, AGE, PASSWORD];

export const UserPropTypes = {
  Name: PropTypes.string,
  Surname: PropTypes.string,
  Login: PropTypes.string,
  Age: PropTypes.number,
  Password: PropTypes.string,
  id: PropTypes.string,
};

const schema = yup
  .object()
  .shape({
    [NAME]: yup.string().required(),
    [SURNAME]: yup.string().required(),
    [LOGIN]: yup.string().email().required(),
    [AGE]: yup.number().required(),
    [PASSWORD]: yup.string().min(8).required(),
  })
  .required();

function Form({ addUser }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className="formWrapper">
      <form
        onSubmit={handleSubmit((user) => {
          addUser(user);
          reset();
        })}
      >
        {formFields.map((item, i) => (
          <div className="formFiled" key={i}>
            <input {...register(item)} placeholder={item} />
            {errors[item] && <p>{errors[item].message}</p>}
          </div>
        ))}
        <button>Add</button>
      </form>
    </div>
  );
}

Form.propTypes = {
  addUser: PropTypes.func,
};

export default Form;
