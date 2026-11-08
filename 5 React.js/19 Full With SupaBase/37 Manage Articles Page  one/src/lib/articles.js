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