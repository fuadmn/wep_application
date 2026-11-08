import supabase from './supabase'




export const createArticle = async( article ) => {

    console.log("Creating article with data: ")


    const articleData = {
        title: article.title,
        context: article.context,
        tags: article.tags,
        author_id: article.authorId,
        published: article.published || false,
        featured_image: article.featuredImageUrl || null,
    }

     // insert to supabse

     const { data, error } = await supabase
         .from('articles')
         .insert(articleData)
         .select()
         .single()

         if(error) {
            console.error("Error creating article", error)
            throw error
         }
            console.error("Article created successFully", data)

            return data

}
