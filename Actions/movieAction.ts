'use server'

import { movieTable, NewMovie } from "@/db/schema"
import { db } from ".."

//backend to add new movie

export const addMovie = async (data:NewMovie) => {

    await db.insert(movieTable).values(data)

    console.log(data);

    return {msg:"Movie Added Successfully"}
    
    
}

