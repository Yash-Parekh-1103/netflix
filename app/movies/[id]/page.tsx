'use client'

import { fetchSingleMovie } from "@/Actions/movieAction"
import { Button } from "@/components/ui/button"
import { Movie } from "@/db/schema"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

const page = () => {

  const [singleMovie, setsingleMovie] = useState<Movie[] | null>(null)

  const {id} = useParams()

  const getSingleMovie = async () => {

    //this Number(id) is coming from params by using hook useParams
  const singleM = await fetchSingleMovie(Number(id)) as Movie[]

  console.log(singleM);

  //showed in frontend by this state
  setsingleMovie(singleM);
  
    
  }
  
useEffect(() => {

  getSingleMovie()

}, [])



  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-4 py-12">
      {singleMovie && singleMovie.map((m) => (
        <div key={m.id} className="max-w-3xl w-full bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={m.image}
            alt={m.name}
            className="w-full h-80 object-cover"
          />
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4 tracking-tight">{m.name}</h1>
            <span className="inline-block bg-red-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-6">
              {m.genre}
            </span>
            <p className="text-zinc-300 text-base leading-relaxed">{m.description}</p>
          </div>
          <Button className="bg-white text-black m-4">Watch now </Button>
          <Button className="bg-white text-black m-4">Add to Playlist</Button>
        </div>
      ))}
    </div>
  )
}

export default page
