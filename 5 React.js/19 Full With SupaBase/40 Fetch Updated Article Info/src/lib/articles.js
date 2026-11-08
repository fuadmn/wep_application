import { data } from 'react-router-dom'
import supabase from './supabase'




export const createArticle = async( article ) => {

    console.log("Creating article with data: ")


    const articleData = {
        title: article.title,
        content: article.content,
        tags: article.tags,
        author_id: article.author_id,
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

export const getArticleByAuthor = async(author_id, {includeUnPublished = false, limit = 10, offset = 0 } ) => {

    let query = supabase 
                  .from('articles')
                  .select(`
                    *, 
                    comments:comments(count)`)
                    .eq('author_id', author_id)
                    .order('created_at',{ascending: false})
                    .range(offset, offset + limit -1 )


        if(!includeUnPublished){
            query = query.eq('published', true)
        }


        const {data , error, count } = await query

        if(error) throw error

        return{
            articles : data,
            count
        }



}

export const deleteArticle = async(id) => {

    console.log(`Attempting to delete article with ID: ${id}`)


    // First delete all associated comment

    const { error: commentError } = await supabase.from('comments').delete().eq('author_id', id)


    if (commentError) {
        console.error('Error deleting comments:', commentError)
        console.error('Comments error details:', JSON.stringify(commentError,null, 2))
    } else {
       console.log('SuccessFully deleted associated commentError')


       /// Finally delete the article

       const { data, error } = await supabase.from('articles').delete().eq('id', id).select();



       if (error) {
          console.error('Error deleting article:', error)
          console.error('Articles error deleting:', JSON.stringify(error, null, 2))
          throw error
       } else {
          console.log(`SuccessFully deleted article with ID: ${id}`)
       }

       return data
    }
}

export const getArticleById = async (id) => {

    const { data, error } = await supabase
        .from('article')
        .select(`*

            comments:comments(id, content, created_at
            user:user_id(id, content, avatar_url)
            )`)
        .eq('id', id)
        .select()

    if ( error ) throw error
    return data
}