import React, { forwardRef, useEffect, useRef } from 'react'
import { useState } from 'react';
import ReactQuill from 'react-quill-new';
import './quill.snow.css'

// Use forwardRef to properly handle the ref
const QuillEditor = forwardRef(({value, onChange, placeholder, className, height = 400 }, ref) => {


    //Create a separate ref the ReactQuill component

    const quillRef = useRef();

    const [editorValue, setEditorValue] = useState(value || '');


    // Update local state when prop value changes
    useEffect(() => {
        setEditorValue(value || '');
    }, [value]);

    
    // Create a memoized onChange handler

   const handleChange = () => {
     
   }


     // Set up editor modules
     const modules = {
      toolbar: [
        ['bold', 'italic','underline','strike'],
        ['header', 'code-block'],
        [{ 'header': 1 }, { 'header': 2 }],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],
        [{ 'indent': '-1'}, { 'indent': '+1' }],
        ['link','image'],
        ['clean'],
      ]
     };


     // Set up editor formats
     const formats = [
      'header','bold','italic','underline','strike','blockquote','list','indent','link','image','code-block','script'
     ];


  return (
    <div className={className || ""}  style={{height: `${height}px`}}>

      <ReactQuill
       ref={quillRef}
       value={editorValue}
       onChange={handleChange}
       placeholder={placeholder || "Write your content..."}
      //  theme='snow'
       style={{ height: `${height - 42}px `}}
       modules={modules}
       formats={formats}
       />
    </div>
  )
})

export default QuillEditor

