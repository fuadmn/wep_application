import { useForm } from "react-hook-form";

const App = () => {

   const {register, handleSubmit, formState: {errors} } = useForm();

   console.log(errors.username)

   const onSubmit = (data) => {
    console.log(data)
   }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input className="border p-4" type="text" {...register('username', {required: "Username is required"})}/>
      {errors.username && <p className="text-red-500">{errors.username.message}</p>}
      <input className="border p-4" type="email" {...register('email')}/>
      <button className="border p-4 bg-rose-600 text-white" type="submit">Submit</button>
    </form>
  )
}

export default App
