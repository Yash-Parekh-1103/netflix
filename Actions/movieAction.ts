'use server'

import { movieTable, NewMovie } from "@/db/schema"
import { db } from ".."
import { eq } from "drizzle-orm"

//backend to add new movie

export const addMovie = async (data:NewMovie) => {

    await db.insert(movieTable).values(data)

    // console.log(data);

    return {msg:"Movie Added Successfully"};
       
}

//show all movies in startup

export const fetchAllMovies = async () => {


    //we took all movies from database
    const allmovies = await db.select().from(movieTable)

    // now we log this on backend terminal
    // console.log(allmovies);

    return allmovies;
  
}

//show single movie

export const fetchSingleMovie = async (id:number) => {

 const singleMovie = await db.select().from(movieTable).where(eq(movieTable.id,id))

 console.log(singleMovie);

 return singleMovie;
 

    
}

