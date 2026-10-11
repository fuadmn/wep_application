import React, { useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { FiInfo, FiSave, FiX } from 'react-icons/fi'

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


  const fileInputRef = useRef(null)
  const editorRef = useRef(null)



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

            className='px-4 py-2 border border-gray-300 rounded-md 
          shadow-sm text-gray-700 bg-white hover:bg-gray-50
          focus:outline-none focus:ring-2 focus:ring-orange-500
          focus:ring-offset-2 disabled:cursor-not-allowed'
          >
            <FiSave className='inline mr-2' />
            Save And Publish
          </button>

          <button

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
            className='ml-2 text-xs text-gray-500 hover:text-gray-700'
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
                // onChange={handleImageSelect}
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

                  disabled={isUploading}
                  className='px-3 py-2 bg-orange-500 text-white rounded text-sm hover:bg-orange-600'
                >
                  {isUploading ? 'Uploading...' : 'Upload'}
                </button>
              )}


            </div>
          </div>
        </div>

        {/* Display currently stored image */}



      </div>


    </div>
  )
}

export default ArticleEditorPages
