import React, { useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { CgClose } from 'react-icons/cg'
import { FiInfo, FiSave, FiTag, FiX } from 'react-icons/fi'
import QuillEditor from '../components/QuillEditor'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { uploadImage } from '../lib/storage'
import { createArticle } from '../lib/articles'




// Available tags - In a Real App, fetch from Supabase
const AVAILABLE_TAGS = [
  'React', 'JavaScript', 'CSS', 'Tailwind', 'Web Development', 'Backend', 'Frontend', 'UI Design', 'Performance', 'Supabase', 'Real-time', 'API', 'Testing', 'TypeScript', 'Future Tech'
]

const ArticleEditorPages = () => {

  const isEditMode = false

  // State for article tata
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [selectedTags, setSelectedTags] = useState([])
  const [isSaving, setIsSaving] = useState(false)
  const [isTagsMenuOpen, setIsTagsMenuOpen] = useState(false)
  const [featuredImageUrl, setFeaturedImageUrl] = useState('')
  const [isPublished, setIsPublished] = useState(false)
  const [error, setError] = useState(null)

  // State for image upload
  const [selectedImage, setSelectedImage] = useState(null)
  const [isUploading, setIsUploading] = useState(false)
  const [imagePath, setImagePath] = useState(false)


  const { user } = useAuth()
  const navigate = useNavigate()


  const fileInputRef = useRef(null)
  const editorRef = useRef(null)



  const toggleTag = (tag) => {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag])
  }


  const handleContentChange = (value) => {
    setContent(value)
  }


  const handleImageSelect = (e) => {

    const file = e.target.files[0];

    if (file) {
      // check the file type

      if (!file.type.startsWith('image/')) {
        toast.error("Please select an image file")


        e.target.value = "";
        setSelectedImage(null)
        return
      }


      // check file size ( limit to 2MB)

      const maxSize = 2 * 1024 * 1024

      if (file.size > maxSize) {
        toast.error(`Image size ( ${(file.size / 1024 / 1024).toFixed(2)}MB) exceeds 2MB limit`);
        e.target.value = "";
        setSelectedImage(null)
        return
      }

      setSelectedImage(file);

      toast.success(`Select file : ${file.name}`)

    }


  }

  const handleUploadImage = async () => {

    if (!selectedImage) {
      toast.error("Please select an image")
      return
    }


    // check if the user is logged in

    if (!user) {
      toast.error("You must be signin in to upload images")
      navigate('/signin')
      return
    }


    // start uploading

    setIsUploading(true);

    console.log('Starting image upload for:', selectedImage);

    try {


      // upload image to supabase storage

      const { path, url } = await uploadImage(selectedImage, user.id);

      console.log("Image uploaded successFully", { path, url });

      setFeaturedImageUrl(url);
      setImagePath(path)

      // clear selected image and file input
      setSelectedImage(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }

      toast.success('Image uploaded successFully')
      console.log('Image state after upload:', {
        featuredImageUrl: url,
        imagePath: path
      })

      // Return the uploaded image data
      return { path, url }

    } catch (error) {

      console.error('Error uploading image:', error)
      toast.error(`Failed to upload image: ${error.message || 'Unknown  error'}`)
      throw error
    } finally {
      setIsUploading(false)
    }
  }


  const handleSave = async (publishStatus = null) => {


    // Validate inputs
    if (!title.trim()) {
      toast.error('Please add a title to your article')
      return
    }


    // Check for content
    if (!content || content === '<p><br></p>') {
      toast.error('Please add some content to your article')
      return
    }


    // If user not is not logged in, redirect to sign in
    if (!user) {
      toast.error('You must be signed in to save your article')
      navigate('/signin')
      return
    }


    let uploadedImageData = null

    // Check if there's selected image that hasn't been uploaded yet


    if (selectedImage) {
      console.log('Selected image needs to be uploaded first:', selectedImage)
      const ShouldUpload = confirm('You have a selected image that han yey Would you like to upload  it now?')

      if (ShouldUpload) {

        try {
          uploadedImageData = await handleUploadImage() 
          console.log('Image uploaded during save:', uploadedImageData)

          // Wait a moment fo state to update
          await new Promise(resolve => setTimeout(resolve, 100))
        } catch (error) {
          console.error('Failed to upload image during save:', error)
          toast.error('Failed to upload image. Please try uploading the image first.')
          return
        }
      } else {
        // If user doen't went to upload the image. ask they went to proceed without it
        const shouldProceed = confirm('Do you want to proceed without uploading the image')
        if (!shouldProceed) {
          return
        }
        // Clear the selected image since user chose not to upload
        setSelectedImage(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = ""
        }
      }
    }

    setIsSaving(true);

    console.log('Starting article save with state:', {
         isEditMode,
         featuredImageUrl,
         imagePath,
         selectedImage,
         uploadedImageData
    })
  


  try {
    

    // Determine if we should update the publish status
    const published = publishStatus !== null ? publishStatus : isPublished

    // Get the  current image state, preferring newly 
    const currentImageUrl = uploadedImageData?.url || featuredImageUrl
    const currentImagePath = uploadedImageData?.path || imagePath


    console.log('Current image state:', {
      featuredImageUrl: currentImageUrl,
      imagePath: currentImagePath,
      selectedImage,
      uploadedImageData
    })

        const articleData = {
        title,
        content,
        tags:  selectedTags,
        author_id: user.id,
        published,
        featuredImageUrl: currentImageUrl,
    }

   let saveArticle;

  
    // update

    if(isEditMode) {
      // insert functions
    } else {
      saveArticle = await createArticle(articleData)
    }

    
    console.log('Article saved successFully:', saveArticle)

    toast.success(`Article ${isEditMode ? 'updated' : 'create'} successFully`)

  } catch (error) {
    console.error('Error saving article:', error)
    toast.error('Failed to save your article. Please try again later.')
  } finally {
    setIsSaving(false)
  }
}

  return (
    <div className='max-w-4xl mx-auto px-4 py-8'>

      {/* header buttons */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">

        <h1 className='text-2xl font-bold text-gray-900 mb-4 md:md-0'>
          {isEditMode ? 'Edit Article' : 'Create New Article'}
        </h1>

        {/* buttons */}

        <div className="flex space-x-4">

          <button

            className='px-4 py-2 border border-gray-300 rounded-md 
          shadow-sm text-gray-700 bg-white hover:bg-gray-50
          focus:outline-none focus:ring-2 focus:ring-orange-500
          focus:ring-offset-2'
          >
            <FiX className='inline mr-2' />
            Cancel
          </button>

          <button
            onClick={() => handleSave(false)}
            className='px-4 py-2 border border-gray-300 rounded-md 
          shadow-sm text-gray-700 bg-white hover:bg-gray-50
          focus:outline-none focus:ring-2 focus:ring-orange-500
          focus:ring-offset-2 disabled:cursor-not-allowed'
          >
            <FiSave className='inline mr-2' />
            Save And Publish
          </button>

          <button
            onClick={() => handleSave(true)}
            className='px-4 py-2 border border-gray-300 rounded-md 
          shadow-sm text-white bg-orange-600 hover:bg-gray-700
          focus:outline-none focus:ring-2 focus:ring-orange-500
          focus:ring-offset-2 disabled:cursor-not-allowed'
          >
            <FiSave className='inline mr-2' />
            Save as Draft
          </button>
        </div>
      </div>

      {/* Title input */}
      <div className="mb-6">
        <label htmlFor="title" className='block text-sm font-medium text-gray-700'>Title</label>
        <input type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='mt-1 block w-full border border-gray-300 rounded-md
        shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500
        focus:border-orange-500 sm:text-sm' placeholder='Enter article title'
        />
      </div>

      {/* Featured Image Upload */}
      <div className="mb-6">

        <label className='block text-sm font-medium text-gray-700 mb-2' htmlFor="">Featured Image
          <button
            type="button"
            onClick={() => toast('Maximum image size allowed is 5MB')}
            className='ml-2 text-xs text-
            gray-500 hover:text-gray-700'
          ><FiInfo className='inline-block' />
          </button>
        </label>

        {/* Simplified Image Upload UI */}

        <div className="mb-4">
          <div className="flex  flex-col space-y-2">
            <div className="flex items-center space-x-2">

              <input
                type="file"
                accept='image/*'
                onChange={handleImageSelect}
                ref={fileInputRef}
                className='text-sm text-gray-500 file:mr-4 file:py-2
              file:px-4 file:rounded-md file:border-0 file:text-sm
              file:font-semibold file:bg-orange-50
              file:text-orange-700 hover:file:bg-orange-100'
              />

              {/* when we choose image */}

              {selectedImage && (


                <button
                  type="button"
                  onClick={async () => {
                    try {

                      await handleUploadImage();
                    } catch (error) {
                      console.error('Failed to upload image:', error)
                      toast.error('Failed to upload image. Please try again. ')

                    }
                  }}
                  disabled={isUploading}
                  className='px-3 py-2 bg-orange-500 text-white rounded text-sm hover:bg-orange-600 disabled:opacity-50 cursor-pointer'
                >
                  {isUploading ? 'Uploading...' : 'Upload'}
                </button>
              )}


            </div>
          </div>
        </div>

        {/* Display currently stored image */}

        {featuredImageUrl && (
          <div className="mt-2 mb-4">
            <img
              src={featuredImageUrl}
              alt="Featured image"
              className='w-full justify-between items-center mt-1'
            />

            <div className="flex justify-between items-center mt-1">
              <span className='text-xs text-gray-500 truncate max-w-[80%]'>{featuredImageUrl}</span>

              <button
                type="button"
                className='text-red-500 text-xs hover:text-red-700'
              >
                Remove
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Tags selection */}
      <div className="mb-6 relative">
        <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>

        <div className="flex flex-wrap gap-2">

          {selectedTags.map(tag => (
            <span
              key={tag}
              className='inline-flex items-center px-2.5 py-0.5
          rounded-full text-xs font-medium bg-orange-100
          text-orange-800 cursor-pointer'
              onClick={() => toggleTag(tag)}
            >
              {tag}
              <button
                type="button"
                className='mt-1.5 inline-flex text-orange-400
            hover:text-orange-600 focus:outline-none'
              >
                <span className='sr-only'>Remove tag {tag}</span>
                <CgClose />
              </button>

            </span>
          ))}
        </div>

        {/* add tag button */}

        <button
          type="button"
          className='inline-flex items-center px-3 py-1.5 border
       border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700
       bg-white hover:bg-gray-50 focus:outline-none focus:ring-2
       focus:ring-offset-2 focus:ring-orange-500'
          onClick={() => setIsTagsMenuOpen(!isTagsMenuOpen)}
        >
          <FiTag className='mr-1.5 h-4 w-4' />
          Add Tags
        </button>



        {isTagsMenuOpen && (
          <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5
          overflow-auto focus:outline-none sm:text-sm">
            <div className="grid grid-cols-2 gap-2 p-2">
              {AVAILABLE_TAGS.map(tag => (
                <div
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`cursor-pointer px-2 py-2 rounded
                hover:bg-gray-100 ${selectedTags.includes(tag) ? 'bg-orange-50 text-orange-700' : ''}`}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* React Quill */}

      <QuillEditor

        ref={editorRef}
        value={content}
        onChange={handleContentChange}
        placeholder={"Write your article content here..."}
        height="500 "

      />

    </div>
  )
}

export default ArticleEditorPages
