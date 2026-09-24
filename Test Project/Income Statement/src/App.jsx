import React from 'react'

function App() {
  return (
    <div>

      <div className="flex mt-5 items-center justify-center space-x-4">
        <div className="h-12 w-50 rounded-xl bg-gray-300 flex justify-center items0-center font-bold text-3xl">Day</div>
        <div className="h-12 w-50 rounded-xl bg-gray-300 flex justify-center items0-center font-bold text-3xl">Week</div>
        <div className="h-12 w-50 rounded-xl bg-gray-300 flex justify-center items0-center font-bold text-3xl">Month</div>
        <div className="h-12 w-50 rounded-xl bg-gray-300 flex justify-center items0-center font-bold text-3xl">Months 6</div>
        <div className="h-12 w-50 rounded-xl bg-gray-300 flex justify-center items0-center font-bold text-3xl">Year</div>
      </div>
         <div className="flex items-center justify-center mb-22">
            <div className="flex flex-col ">
                <div className="text-center font-bold text-4xl mt-10">Income Statement</div>
                <div className="h-[0.1rem] w-200 bg-gray-500 my-4"></div>
                <h1 className='text-3xl text-center'>For the year Ended December 31, 2021</h1>

               {/* Revenue  */}
               <div className="mt-8">
                <h1 className='font-bold text-3xl'>Revenue</h1>
                 <div className="h-[0.1rem] w-200 bg-gray-500 my-2"></div>
                 <div className="flex justify-between">
                  <h1 className='ml-10  text-2xl'>Sales Revenue</h1>
                  <h1 className='mr-5 text-2xl'>$950,000</h1>
                 </div>
                 <div className="flex justify-between">
                  <h1 className='ml-10  text-2xl'>Other Revenue</h1>
                  <h1 className='mr-5 text-2xl'>$25,000</h1>
                 </div>
                  <div className="h-[0.1rem] w-200 bg-gray-300 my-2"></div>
               </div>
                  <div className="flex justify-between">
                  <h1 className='ml-10  text-2xl font-medium'>Total Revenue</h1>
                  <h1 className='mr-5 text-2xl'>$975,000</h1>
                 </div>
                  <div className="h-[0.1rem] w-200 bg-gray-400 my-2"></div>

                   {/* Expenses */}
               <div className="mt-4">
                <h1 className='font-bold text-3xl'>Expenses</h1>
                 <div className="h-[0.1rem] w-200 bg-gray-500 my-2"></div>
                 <div className="flex justify-between">
                  <h1 className='ml-10  text-2xl'>Cost of Goods Sold</h1>
                  <h1 className='mr-5 text-2xl'>$650,000</h1>
                 </div>
                 <div className="flex justify-between">
                  <h1 className='ml-10  text-2xl'>Operating Expenses</h1>
                  <h1 className='mr-5 text-2xl'>$180,000</h1>
                 </div>
                 <div className="flex justify-between">
                  <h1 className='ml-10  text-2xl'>Depreciation Expenses</h1>
                  <h1 className='mr-5 text-2xl'>$20,000</h1>
                 </div>
                  <div className="h-[0.1rem] w-200 bg-gray-300 my-2"></div>
               </div>
                <div className="flex justify-between">
                  <h1 className='ml-10  text-2xl font-medium'>Total Expenses</h1>
                  <h1 className='mr-5 text-2xl'>($850,000)</h1>
                 </div>
                 <div className="h-[0.1rem] w-200 bg-gray-400 my-2"></div>

                  {/* Operating Income */}
                <div className="flex mt-4 justify-between">
                  <h1 className='text-2xl font-medium'>Operating Income</h1>
                  <h1 className='mr-5 font-medium text-2xl'>$125,000</h1>
                 </div>
                  <div className="h-[0.1rem] w-200 bg-gray-400 my-2"></div>

              {/* Other Income (Expenses) */}
                    <div className="mt-4">
                <h1 className='font-medium text-2xl'>Other Income (Expenses)</h1>
                 <div className="h-[0.1rem] w-200 bg-gray-500 my-2"></div>
                 <div className="flex justify-between">
                  <h1 className='ml-10  text-2xl'>Interest Expenses</h1>
                  <h1 className='mr-5 text-2xl'>($10,000)</h1>
                 </div>
                 <div className="flex justify-between">
                  <h1 className='ml-10  text-2xl'>Gain on Sales of Assets</h1>
                  <h1 className='mr-5 text-2xl'>$5,000</h1>
                 </div>
                  <div className="h-[0.1rem] w-200 bg-gray-00 my-2"></div>
                   <div className="flex justify-between">
                  <h1 className='ml-10  text-2xl'>Total Other Income (Expenses)</h1>
                  <h1 className='mr-5 text-2xl'>(5,000)</h1>
                 </div>
                   <div className="h-[0.1rem] w-200 bg-gray-400 my-2"></div>
               </div>

               {/* Net Income */}
                <div className="mt-4">
                 <div className="h-[0.1rem] w-200 bg-gray-500 my-2"></div>
                 <div className="flex justify-between">
                  <h1 className='font-extrabold text-2xl'>Net Income</h1>
                  <h1 className='mr-5 font-extrabold text-2xl'>$120,000</h1>
                 </div>
                  <div className="h-[0.1rem] w-200 bg-gray-500 my-1"></div>
                  <div className="h-[0.1rem] w-200 bg-gray-500"></div>
               </div>
            </div>
            
           
         </div>
    </div>
  )
}

export default App
