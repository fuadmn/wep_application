import { useState, useTransition } from 'react'
import { user } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const ManageArticles = () => {


  
const { user } = useAuth()
const navigate = useNavigate()
 const [articles, setArticle] = useState([])
 const [loading, setLoading] = useState(true)
 const [error, setError] = useState(null)
 const [totalCount, setTotalCount] = useState(0)
 const [articleToDelete, setArticleToDelete] = useState(null)
 const [isDeleting, setIsDeleting] = useState(false)
 const [isPending, setTransition] = useTransition()


  
  return (
    <div>
      ManageArticles
    </div>
  )
}

export default ManageArticles
