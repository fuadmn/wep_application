import { v4 as uuidv4 } from 'uuid'

export const uploadImage = async(file, userId, bucket = 'featured-image') => {

    try {
        
        const fileExt = file.name.split('.').pop().toLowerCase();

        // create a unique file path xxxeuye-ewuywyue6-ewew.pnf

        const filename = `${uuidv4()}.${fileExt}`;
        const filePath = `${userId()}.${filename}`;

        // Upload the file to Supabase

        const { data, error } = await supabase.storage

        .from(bucket)
        .upload(filePath.file , {
            contentType: file.type,
            cacheControl: '300',
            upsert: true
        });

        if(error) throw error


        // get public URL for the Uploadded file

        const {data: urlData } = await supabase.storage.from(bucket).getPublicUrl(filePath)

       return{
        path: filePath,
        url: urlData.publicUrl
       }


    } catch (error) {
        console.error("Error uploading image:", error)
        throw error
    }
}