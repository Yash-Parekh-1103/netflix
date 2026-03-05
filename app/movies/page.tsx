'use client'

import { fetchAllMovies } from "@/Actions/movieAction"
import { Movie } from "@/db/schema"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const page = () => {



  const [allmovie, setallmovie] = useState<Movie[] | null>(null)

  // const router = useRouter()

  // const {id} = useParams()

  // console.log(id);
  
  
  //this function will be called on useEffect when user will go to movies page
  const getAllMovies = async () => {
    
    const allmovies =  await fetchAllMovies() as Movie[]
    
    // console.log(allmovies);
    
    setallmovie(allmovies)
    
  }

  useEffect(() => {
    
    getAllMovies()

  }, [])

  // const navigate = () => {

  //   router.push(`/movies/{id}`)
    
  // }
  



  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-6">
      {allmovie && allmovie?.map((m) => (
        <Link key={m.id} href={`/movies/${m.id}`} className="border border-gray-700 rounded-lg overflow-hidden hover:border-gray-400 transition-colors">
          <img src={m.image} alt={m.name} className="w-full h-48 object-cover" />
          <div className="p-2">
            <p className="font-semibold text-sm truncate">{m.name}</p>
            <p className="text-xs text-gray-400">{m.genre}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default page
