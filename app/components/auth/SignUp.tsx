"use client";
import React, { FC, useState, useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { styles } from "../../styles/style";
import {
  AiOutlineClose,
  AiFillGithub,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import toast from "react-hot-toast";

type Props = {
  setRoute: (route: string) => void;
  setOpen: (open: boolean) => void;
};

const schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is requried"),
  password: Yup.string().required("Password is requried").min(6),
  name: Yup.string().required("Name is requried"),
});

export const SignUp: FC<Props> = ({ setOpen, setRoute }) => {
  const [show, setShow] = useState(false);
  const [register, {data, isSuccess, error}] = useRegisterMutation()

  useEffect(() => {
    if(isSuccess){
       const message = data?.message || "Registration successful";
       toast.success(message);
       setRoute("Verification");
    }
    if(error){
     if("data" in error){
       const errorData = error as any;
       toast.error(errorData.data.message);
     }
    }
   }, [isSuccess,error, setRoute, data]);

  const formik = useFormik({
    initialValues: { email: "", password: "", name: "" },
    validationSchema: schema,
    onSubmit: async ({ email, password, name }) => {
      const data = {email,password,name}
      await register(data)
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <>
      <div>
        <div className="relative flex justify-between">
          <h2 className={`${styles.title}`}> Join to Elearning </h2>
          <span
            className={`${styles.closeBtn} top-[6px]`}
            onClick={() => setOpen(false)}
          >
            <AiOutlineClose />
          </span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className={`${styles.label}`} htmlFor="name">
              Enter Name
            </label>
            <input
              className={`${
                errors.email && touched.email && "border-red-500"
              } ${styles.input}`}
              value={values.name}
              onChange={handleChange}
              id="name"
              type="text"
              placeholder="Humayun Kabir"
            />
            {errors.name && touched.name && (
              <span className="text-red-500 pt-2 block">{errors.name}</span>
            )}
          </div>
          <div className="mb-4">
            <label className={`${styles.label}`} htmlFor="email">
              Enter email
            </label>
            <input
              className={`${
                errors.email && touched.email && "border-red-500"
              } ${styles.input}`}
              value={values.email}
              onChange={handleChange}
              id="email"
              type="email"
              placeholder="example@gmail.com"
            />
            {errors.email && touched.email && (
              <span className="text-red-500 pt-2 block">{errors.email}</span>
            )}
          </div>
          <div className="mb-5 relative">
            <label className={`${styles.label}`} htmlFor="password">
              Enter Password
            </label>
            <input
              className={`${
                errors.password && touched.password && "border-red-500"
              } ${styles.input}`}
              value={values.password}
              onChange={handleChange}
              type={!show ? "password" : "text"}
              placeholder="password#4@"
              id="password"
            />
            {!show ? (
              <AiOutlineEyeInvisible
                className="absolute right-6 top-11 z-1 cursor-pointer"
                onClick={() => setShow(true)}
              />
            ) : (
              <AiOutlineEye
                className="absolute right-6 top-11 z-1 cursor-pointer"
                onClick={() => setShow(false)}
              />
            )}
            {errors.password && touched.password && (
              <span className="text-red-500 pt-2 block">{errors.email}</span>
            )}
          </div>
          <div className="mb-4">
           <input type="submit" value="Sign Up" className={`${styles.submitBtn}`} />
          </div>
          <div className="py-2 text-center">
            <span className="text-center text-black dark:text-white">
              {" "}
              Connect with us by{" "}
            </span>
            <div className="flex justify-center items-center gap-2 mt-3">
              <FcGoogle size={23} className={`${styles.socialIcon}`} />
              <AiFillGithub size={23} className={`${styles.socialIcon}`} />
            </div>
          </div>
          <div className="mt-5 mb-3 text-center">
            <span className="text-center text-black dark:text-white">
             Already have an account?
              <span
                className="text-blue-500 font-semibold font-Poppins cursor-pointer"
                onClick={() => setRoute("Login")}
              >
                {" "}
                Sign in{" "}
              </span>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};
