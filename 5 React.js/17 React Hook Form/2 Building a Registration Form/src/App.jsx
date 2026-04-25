import { useForm } from "react-hook-form";

const App = () => {

   const {register, handleSubmit, formState: {errors} } = useForm();

   console.log(errors.username)

   const onSubmit = (data) => {
    console.log(data)
   }

  return (
    <form className="p-20" onSubmit={handleSubmit(onSubmit)}>
    <div className="">
        <div className="">
<label htmlFor="">Username</label></div>
        <input className="border p-4" type="text" {...register('username', {required: "Username is required"})}/>
        {errors.username && <p className="text-red-500">{errors.username.message}</p>}
    </div>

     <div className="">
       <label htmlFor="">Email</label>
       <input className="border p-4" type="email" {...register('email', {required: "Email is Required", pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/}, message:"Invalid email address"})}/>
       {errors.email && <p className="text-red-500">{errors.email.message}</p>}
     </div>

    <div className="">
        <label htmlFor="">Password</label>
        <input  className="border p-4" type="password" {...register('password', {required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters"}})}/>
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
    </div>

    <div className="">
        <label htmlFor="">Confirm Password</label>
        <input  className="border p-4" type="password" {...register('confirmPassword', {required: "Confirm Password is required"})}/>
        {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
    </div>

    <div className="">
      <legend>
        <input type="checkbox" {...register('terms', {required:  "You must accepts the terms"})}/>
          I accept the must and conditions
         {errors.terms && <p className="text-red-500">{errors.terms.message}</p>}
      </legend>
    </div>

        <button className="border p-4 bg-rose-600 text-white" type="submit">Submit</button>
    </form>
  )
}

export default App


