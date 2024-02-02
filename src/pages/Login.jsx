import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
//import "./App.css";

function Login(props) {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>
    navigate("/home", {
      state: data,
    });
  return (
    <>
      <p className="title">Registration Form</p>
      <form className="Login" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name")} />
        <input type="email" {...register("email")} />
        {errors.email && (
          <span style={{ color: "red" }}>*Email* is mandatory </span>
        )}
        <input type="password" {...register("password")} />
        <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
      </form>
    </>
  );
}
export default Login;
