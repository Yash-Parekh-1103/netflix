'use client'

import { addMovie } from "@/Actions/movieAction"
import { Movie, NewMovie } from "@/db/schema"
import { useCurrentUser } from "@/hooks/useUser"
import { useForm, SubmitHandler } from "react-hook-form"


const page = () => {
    
    const {email , isLoaded} = useCurrentUser()
    
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Movie>()


  const newMovie = async (data:NewMovie) => {

    if(!email) return 

    console.log(data);

    const newData = {...data, email}

    console.log(newData);

    const newmovie = await addMovie(newData)

    
    
    
  }


  return (
    <div>
        
         <form onSubmit={handleSubmit(newMovie)}>

      <input {...register("name", { required: true })} placeholder="Name" className="border" />
      {errors.name && <span>This field is required</span>}

      <input {...register("genre", { required: true })} placeholder="Genre" className="border" />
      {errors.genre && <span>This field is required</span>}

      <input {...register("image", { required: true })} placeholder="Image URL" className="border" />
      {errors.image && <span>This field is required</span>}

      <input {...register("description", { required: true })} placeholder="Description" className="border" />
      {errors.description && <span>This field is required</span>}

      <input type="submit" />
    </form>





    </div>
  )
}

export default page
