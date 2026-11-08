import React, { forwardRef, useEffect, useRef, useState } from 'react'

    // Use forwardRef to properly handle ref

const QuillEditor = forwardRef(({ value, onChange, placeholder, className, height = 400 }, ref) => {


    // Create a separate ref for the ReactQuill component

    const quillRef = useRef();

    const [editorValue, setEditorValue] = useState( value || "");


    // Update local state when prop value changes
    useEffect(() => {
        setEditorValue(value || '');
    }, [value])

    // Create a memoized onChange handler


    
  return (
    <div>
      
    </div>
   )
})

export default QuillEditor
