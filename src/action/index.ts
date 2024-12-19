"use server"
import {prisma} from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export const deleteBook=async(BookId:string)=>{
     await prisma.book.delete({
        where:{
            id:BookId
        }
    })
    return revalidatePath('/')
}


export const createBook=async(formData:FormData)=>{
    const title=formData.get('title') as string
    const author=formData.get('author') as string
    const isbn=formData.get('isbn') as string
    const year=parseInt(formData.get('year') as string)
    const genre=formData.get('genre') as string
   const imageUrl= formData.get('imageUrl') as string
   const resumer=formData.get('resumer') as string
   console.log({title,author,isbn,year,genre,imageUrl,resumer})
    await prisma.book.create({
        data:{
            title,
            author,
            ISBN:isbn,
            year,
            genre,
            imageUrl,
            resumer
        }
    })
    
     revalidatePath('/')
     redirect('/')
}