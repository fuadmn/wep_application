import React, { useState } from 'react'

 const RecipeCollection = () => {

  const [selectCategory, setSelectCategory] = useState("All")

 const categories = ["All","breakfast","lunch","dinner","dessert"]

  const recipes = [
      {
      id: 1,
      title: 'Pancakes',
      category: 'breakfast',
      time: '20 min',
      difficulty: 'easy',
      image: '🥞',
      ingredients: ['flour', 'eggs', 'milk', 'butter']
    },
    {
      id: 2,
      title: 'pasta Carb',
      category: 'lunch',
      time: '30 min',
      difficulty: 'medium',
      image: '🍝',
      ingredients: ['pasta', 'eggs', 'cheese', 'bacon']
    },
    {
      id: 3,
      title: 'Caesar Salad',
      category: 'dinner',
      time: '15 min',
      difficulty: 'easy',
      image: '🥗',
      ingredients: ['lettuce', 'croutons', 'parmesan', 'chicken']
    },
    {
      id: 4,
      title: 'Chocolate Cake',
      category: 'dessert',
      time: '45 min',
      difficulty: 'medium',
      image: '🍰',
      ingredients: ['flour', 'cocoa', 'sugar', 'eggs']
    }
  ];
  
  return (
    
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-rose-100 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center  mb-12 ">
            <h1 className='text-3xl font-bold text-gray-800'>My Recipe Collection</h1>
          <p className='text-gray-600'>Find your facite recipes and start cooking!</p>
          </div>

          {/* Category Filters */}

         <div className="flex justify-center gap-4 mb-4 flex-wrap">
          {
            categories.map((category) => (
              <button key={category}
                onClick={() => setSelectCategory(category)}
                className={`px-4 py-2 rounded-full capitalize cursor-pointer ${selectCategory === category ? "bg-orange-500 text-white" : "bg-white text-gray-600 hover:bg-black-100"}`}>{category}</button>
            ))
          }
         </div>
          
        </div>
      </div>
  )
}

export default RecipeCollection;
 