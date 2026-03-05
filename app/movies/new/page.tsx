'use client'

import { addMovie } from "@/Actions/movieAction"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Movie, NewMovie } from "@/db/schema"
import { useCurrentUser } from "@/hooks/useUser"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"


const page = () => {
    
    const {email , isLoaded} = useCurrentUser()
    const router =  useRouter()
    
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Movie>()


  const newMovie = async (data:NewMovie) => {

    if(!email) return 

    // console.log(data);

    const newData = {...data, email}

    // console.log(newData);

    const newmovie = await addMovie(newData)

    router.replace("/movies")


  }


  return (
    <div>
        
         <form onSubmit={handleSubmit(newMovie)}>

      <Input {...register("name", { required: true })} placeholder="Name" className="border" />
      {errors.name && <span>This field is required</span>}

      <Input {...register("genre", { required: true })} placeholder="Genre" className="border" />
      {errors.genre && <span>This field is required</span>}

      <Input {...register("image", { required: true })} placeholder="Image URL" className="border" />
      {errors.image && <span>This field is required</span>}

      <Input {...register("description", { required: true })} placeholder="Description" className="border" />
      {errors.description && <span>This field is required</span>}

      <Button type="submit" variant="outline">submit</Button>
    </form>

    </div>
  )
}

export default page
