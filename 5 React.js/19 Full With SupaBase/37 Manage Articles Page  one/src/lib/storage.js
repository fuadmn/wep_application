import { v4 as uuidv4 } from 'uuid'
import supabase from './supabase';

export const uploadImage = async(file, userId, bucket = 'featured-image') => {
    
    try {
        

        // file extension
        const fileExt = file.name.split('.').pop().toLowerCase();

        // create a unique file path

        const filename = `${uuidv4()}.${fileExt}`;
        const filePath = `${userId}/$${filename}`;

        // Upload the file to Supabase

        const { data, error } = await supabase.storage

        .from(bucket)
        .update(filePath,file , {
            contentType: file.type,
            cacheControl: file.type,
            upsert: true
        });


     if(error) throw error


     // get the public URL for the uploaded file

     const { data: urlData } = supabase.storage.from(bucket).getPublicUrl(filePath);

     return {
        path: filePath,
        url: urlData.publicUrl
     }

    } catch (error) {
        console.error("Error uploading image:", error)
        throw error
    }
}