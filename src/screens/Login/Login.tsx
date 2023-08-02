import React, {useState } from "react"
import Wrapper from "../../constant/Wrapper"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

import * as yup from "yup"
import errorMessage from "../../constant/errorMessage"
import ErrorMessage from "../../components/ErrorMessage"

interface LoginInput {
  email: string
  pass: string
}

const Login = () => {
  const [showPass, setShowPass] = useState<boolean>(false)


  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('')
  
  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .trim()
      .required(errorMessage.require)
      .email(errorMessage.email),
    pass: yup.string().trim().required(errorMessage.require),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: yupResolver(loginSchema),
  })

  const onSubmit = (data: LoginInput) => {
    console.log(data)
    setPass(data.pass);
    setEmail(data.email)
  }
  const togglePass = () => {
    setShowPass(!showPass)
  }

  return (
    <Wrapper title={"login"}>
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center justify-center flex-col w-full">
            <div>
              <input
                type="text"
                placeholder="Name"
                {...register("email")}
                className="border-1 border-red-200 text-md mb-3 px-2 py-1 rounded-md"
              />
              {errors.email?.message && (
                <ErrorMessage message={errorMessage.require} />
              )}
            </div>
            <div>
              <input
                type={`${showPass ? "text" : "password"}`}
                placeholder="Passwprd"
                {...register("pass")}
                className="border-1 border-red-200 text-md mb-1 px-2 py-1 rounded-md"
              />
              {errors.pass?.message && (
                <ErrorMessage message={errorMessage.require} />
              )}
              <div
                className="text-slate-900 text-xs text-left underline
       decoration-black underline-offset-7 cursor-pointer"
                onClick={togglePass}>
                {showPass ? "Hide Password" : "show Password"}
              </div>
            </div>
            <button className="mt-6 bg-yellow-600 hover:bg-yellow-500 rounded-md px-5 py-2 text-white ">
              Sign in
            </button>
          </div>
        </form>

        <div>
          <p>Show Data</p>
          <table className="w-11/12 overflow-auto mx-auto">
            <thead>
<tr className="bg-black py-2 mb-2">
              <th className="text-white">Email</th>
              <th className="text-white">Pass</th>
              <th className="text-white">Delete item</th>
              <th className="text-white">Add Item</th>
            </tr>
            </thead>


            <tbody>
<tr className="border-b-2 border-slate-300">
              <td className='py-2'>{pass}</td>
              <td className='py-2'>{email}</td>
              <td className='py-2'>
                <button><AiFillDelete color="blue" /></button>
              </td>
               <td className='py-2'>
                <button><FiEdit color="blue" /></button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </>
    </Wrapper>
  )
}

export default Login
