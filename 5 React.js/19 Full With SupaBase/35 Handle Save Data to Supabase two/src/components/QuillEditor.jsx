import React, { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import ReactQuill from 'react-quill-new';
import './quill.snow.css'

// Use forwardRef to properly handle ref

const QuillEditor = ({ value, onChange, placeholder, className, height = 400 }, ) => {


    // Create a separate ref for the ReactQuill component

    const quillRef = useRef();

    const [editorValue, setEditorValue] = useState(value || "");


    // Update local state when prop value changes
    useEffect(() => {
        setEditorValue(value || '');
    }, [value])

    // Create a memoized onChange handler

    const handleChange = useCallback((value) => {
         setEditorValue(value)
         onChange(value)
    }, [onChange])



    // Set up editor modules
    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ]
    };


    // Set up editor formats
    const formats = [
        'header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'indent', 'link', 'image', 'code-block', 'script'
    ]

    return (
        <div className={className || ""} style={{ height: `${height}px` }} >

            {/* Content editor  */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                <dic className=" border border-gray-300 rounded-md overflow-hidden">
                    <ReactQuill
                        ref={quillRef}
                        value={editorValue}
                        onChange={handleChange}
                        placeholder={placeholder || "Write your content..."}
                        style={{ height: `${height - 42}px` }}
                        modules={modules}
                        formats={formats}
                    />
                </dic>
            </div>

            <div className="px-6 py-4 md:px-10 flex justify-end space-x-4">
             <button
                // onClick={() => handleSave(false)}
                // disabled={isSaving}
                className='px-6 py-3 border border-gray-300 rounded-md shadow-sm
                text-gray-700 bg-white hover:bg-gray-50 focus:outline-none
                focus:ring-orange-500 focus:ring-offset-2
                disabled:opacity-50 disabled:cursor-not-allowed'
                >
                    {/* {isSaving ? 'Saving...' : 'Save as Draft'} */}
                    Save as Draft
              </button>
             <button
                // onClick={() => handleSave(true)}
                // disabled={isSaving}
                className='px-6 py-3 border border-transparent rounded-md shadow-sm
               text-white bg-orange-600 hover:bg-orange-700 focus:outline-none
                focus:ring-orange-500 focus:ring-offset-2
                disabled:opacity-50 disabled:cursor-not-allowed'
                >
                    {/* {isSaving ? 'Saving...' : 'Save and Publish'} */}
                    Save and Publish
              </button>
            </div>
        </div>
    )
}

export default QuillEditor
