import { useEffect, useState, useTransition } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { getArticleByAuthor } from '../lib/articles'
import toast from 'react-hot-toast'
import { FiPlus } from 'react-icons/fi'
import { useOptimistic } from 'react'

const ManageArticles = () => {


  
 const { user } = useAuth()
 const navigate = useNavigate()
 const [articles, setArticles] = useState([])
 const [loading, setLoading] = useState(true)
 const [error, setError] = useState(null)
 const [totalCount, setTotalCount] = useState(0)
 const [articleToDelete, setArticleToDelete] = useState(null)
 const [isDeleting, setIsDeleting] = useState(false)
 const [isPending, setTransition] = useTransition()

const [optimisticArticles, updatedOptimisticArticles] = useOptimistic(articles, (state, ArticlesToRemove) => state.filter (article => article.id !== ArticlesToRemove ))



 useEffect(() => {
  if (user) {
    fetchUserArticles()
  } else {
    navigate('signin')
   }
 }, [user])


 const fetchUserArticles = async () => {

  try {
    setLoading(true)
    const {articles, count} = await getArticleByAuthor(user.id, {includeUnPublished: true, limit: 100})

    setArticles(articles)
    setTotalCount(count)
    
    console.log("articles", articles)
  } catch (error) {

    console.error('Error fetching articles:', error)
    setError('Failed to load your articles. Please try again.')
    toast.error('Failed to load your articles')
    
  } finally {
    setLoading(false)
  }



 }


  
  return (
    <div className='min-h-screen bg-gradient-to-b from-orange-50 to-white pb-12'>
      

      {/* Here Section */}
      <div className=" bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className='text-4xl font-bold mb-2'>Manage Your Articles</h1>
              <p className='text-orange-100'>Create, edit, and manage your published and draft Articles</p>
             </div>
              <Link
              to='/editor'
              className='mt-4 md:mt-0 inline-flex items-center px-6 py-3 bg-white text-orange-600 rounded-xl shadow-md hover:bg-orange-50 transition-colors duration-200'>
                <FiPlus className='mr-2' />
                Create New Article
              </Link>
            </div>    
         </div>
      </div>
    </div>
  )
}

export default ManageArticles
