import React from 'react'

const RecipeCollection = () => {

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
      title: 'breakfast',
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
    
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-rose-100 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center  mb-12 ">
            <h1 className='text-3xl font-bold text-gray-800'>My Recipe Collection</h1>
          <p className='text-gray-600'>Find your facite recipes and start cooking!</p>
          </div>
        </div>
      </div>
  )
}

export default RecipeCollection
 