
const App = () => {
  return (
    <div>
     
   <div className="">
 
     {/* UNIVERSITY OF SOMALIA(UNISO) */}

      <div className="mt-6 text-center">
       <h1 className="text-[1.3rem] md:text-4xl font-bold">UNIVERSITY OF SOMALIA(UNISO)</h1>
       <h1 className="text-2xl md:text-4xl md:mt-3 mt-2 font-extralight">STUDENT STATEMENT</h1>
     </div>

     <div className="flex mt-5 ml-2 md:ml-10">

      <div className="flex flex-col w-150">
        <h1 className="text-[0.8rem] md:text-[1.4rem]">Student ID :<span className="md:text-[1.4rem] text-[0.9rem] font-medium ml-2">99406</span></h1>
        <h1 className="text-[0.8rem] md:text-[1.4rem]">Student Name :<span className="md:text-[1.4rem] text-[0.9rem] font-medium ml-2">Abdinaasir Aden Warsame</span></h1>
        <h1 className="text-[0.8rem] md:text-[1.4rem]">Payment Type :<span className="md:text-[1.4rem] text-[0.9rem] font-medium ml-2">Full Payment</span></h1>
      </div>
      <div className="flex flex-col w-150 ml-7">
        <h1 className="text-[0.8rem] md:text-[1.4rem]">Date :<span className="md:text-[1.4rem] text-[0.9rem] font-medium ml-2">03/06/2022</span></h1>
        <h1 className="text-[0.8rem] md:text-[1.4rem]">Class:<span className="md:text-[1.4rem] text-[0.9rem] font-medium ml-2">Al21a</span></h1>
        <h1 className="text-[0.8rem] md:text-[1.4rem]">Status :<span className="md:text-[1.4rem] text-[0.9rem] font-medium ml-2">Active</span></h1>
        <h1 className="text-[0.8rem] md:text-[1.4rem]">Absent Status : <button className="bg-orange-500 text-white rounded px-3 py-1 ">Ver Low - Absent 72.09%</button></h1>
      </div>

     
     </div>
   </div>

   {/* table */}

   <div className="overflow-x-auto mx-2 mt-7">
  <table className="min-w-full border border-gray-300 ">
    <thead className="bg-gray-100 ">
      <tr>
        <th className="border px-1 py-1  text-left text-[.7rem]">NO</th>
        <th className="border px-1 py-1  text-left text-[.7rem]">Date</th>
        <th className="border px-1 py-1  text-left text-[.7rem]">Description</th>
        <th className="border px-1 py-1  text-left text-[.7rem]">Debit</th>
        <th className="border px-1 py-1  text-left text-[.7rem]">Credit</th>
        <th className="border px-1 py-1  text-left text-[.7rem]">Balance</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td className="border px-1 py-1  text-left text-[.7rem]">1</td>
        <td className="border px-1 py-1  text-left text-[.7rem]">01/01/2021</td>
        <td className="border px-1 py-1  text-left text-[.7rem]">Tuition Fees</td>
        <td className="border px-1 py-1  text-left text-[.7rem]">40</td>
        <td className="border px-1 py-1  text-left text-[.7rem]">0</td>
        <td className="border px-1 py-1  text-left text-[.9rem] font-bold">$ 40</td>
      </tr>
      <tr>
        <td className="border px-1 py-1  text-left text-[.7rem]">1</td>
        <td className="border px-1 py-1  text-left text-[.7rem]">01/01/2021</td>
        <td className="border px-1 py-1  text-left text-[.7rem]">Tuition Fees</td>
        <td className="border px-1 py-1  text-left text-[.7rem]">40</td>
        <td className="border px-1 py-1  text-left text-[.7rem]">0</td>
        <td className="border px-1 py-1  text-left text-[.9rem] font-bold">$ 80</td>
      </tr>
      <tr>
        <td className="border px-1 py-1  text-left text-[.7rem]">3</td>
        <td className="border px-1 py-1  text-left text-[.7rem]">01/01/2021</td>
        <td className="border px-1 py-1  text-left text-[.7rem]">Tuition Fees</td>
        <td className="border px-1 py-1  text-left text-[.7rem]">40</td>
        <td className="border px-1 py-1  text-left text-[.7rem]">0</td>
        <td className="border px-1 py-1  text-left text-[.9rem] font-bold">$ 120</td>
      </tr>
      <tr>
        <td className="border px-1 py-1  text-left text-[.7rem]">4</td>
        <td className="border px-1 py-1  text-left text-[.7rem]">01/01/2021</td>
        <td className="border px-1 py-1  text-left text-[.7rem]">Tuition Fees</td>
        <td className="border px-1 py-1  text-left text-[.7rem]">40</td>
        <td className="border px-1 py-1  text-left text-[.7rem]">0</td>
        <td className="border px-1 py-1  text-left text-[.9rem] font-bold">$ 160</td>
      </tr>
      <tr>
        <td className="border px-1 py-1  text-left text-[.7rem]">5</td>
        <td className="border px-1 py-1  text-left text-[.7rem]">01/01/2021</td>
        <td className="border px-1 py-1  text-left text-[.7rem]">Tuition Fees</td>
        <td className="border px-1 py-1  text-left text-[.7rem]">40</td>
        <td className="border px-1 py-1  text-left text-[.7rem]">0</td>
        <td className="border px-1 py-1  text-left text-[.9rem] font-bold">$ 200</td>
      </tr>
      <tr>
        <td className="border px-1 py-1  text-left text-[.7rem]">6</td>
        <td className="border px-1 py-1  text-left text-[.7rem]">01/01/2021</td>
        <td className="border px-1 py-1  text-left text-[.7rem]">Tuition Fees</td>
        <td className="border px-1 py-1  text-left text-[.7rem]">40</td>
        <td className="border px-1 py-1  text-left text-[.7rem]">0</td>
        <td className="border px-1 py-1  text-left text-[.9rem] font-bold">$ 240</td>
      </tr>
      <tr>
        <td className="border px-1 py-1  text-left text-[.7rem]">7</td>
        <td className="border px-1 py-1  text-left text-[.7rem]">01/01/2021</td>
        <td className="border px-1 py-1  text-left text-[.7rem]">Tuition Fees</td>
        <td className="border px-1 py-1  text-left text-[.7rem]">40</td>
        <td className="border px-1 py-1  text-left text-[.7rem]">0</td>
        <td className="border px-1 py-1  text-left text-[.9rem] font-bold">$ 280</td>
      </tr>
      <tr>
        <td className="border px-1 py-1  text-left text-[.7rem]">8</td>
        <td className="border px-1 py-1  text-left text-[.7rem]">01/01/2021</td>
        <td className="border px-1 py-1  text-left text-[.7rem]">Tuition Fees</td>
        <td className="border px-1 py-1  text-left text-[.7rem]">40</td>
        <td className="border px-1 py-1  text-left text-[.7rem]">0</td>
        <td className="border px-1 py-1  text-left text-[.9rem] font-bold">$ 220</td>
      </tr>
      <tr>
        <td className="border px-1 py-1  text-left text-[.7rem]">9</td>
        <td className="border px-1 py-1  text-left text-[.7rem]">01/01/2021</td>
        <td className="border px-1 py-1  text-left text-[.7rem]">Tuition Fees</td>
        <td className="border px-1 py-1  text-left text-[.7rem]">0</td>
        <td className="border px-1 py-1  text-left text-[.7rem]">180</td>
        <td className="border px-1 py-1  text-left text-[.9rem] font-bold">$ 40</td>
      </tr>
      <tr>
        <td className="border px-1 py-1  text-left text-[.7rem]">10</td>
        <td className="border px-1 py-1  text-left text-[.7rem]">01/01/2021</td>
        <td className="border px-1 py-1  text-left text-[.7rem]">Tuition Fees</td>
        <td className="border px-1 py-1  text-left text-[.7rem]">0</td>
        <td className="border px-1 py-1  text-left text-[.7rem]">20</td>
        <td className="border px-1 py-1  text-left text-[.9rem] font-bold">$ 20</td>
      </tr>
      <tr>
        <td className=""></td>
        <td className=""></td>
        <td className=""></td>
        <td className="border px-1 py-1  text-left text-[.7rem] font-bold">320</td>
        <td className="border px-1 py-1  text-left text-[.7rem] font-bold">200</td>
        <td className="border px-1 py-1  text-left text-[.9rem] font-bold">$ 20</td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
  )
}

export default App
