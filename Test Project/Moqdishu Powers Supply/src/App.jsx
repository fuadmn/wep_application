import React from 'react'

const App = () => {
  return (
    <div className='mx-10 my-3'>
     
     {/* Moqdishu Powers Supply */}
     <div className="flex justify-between mb-3">

      <div className="">
        <h1 className='text-3xl font-bold'>Moqadishu Powers Supply</h1>
        <p className='text-2xl'>Headquarter Bakaro Market H/w district</p>
        <p className='text-2xl'>188</p>
        <h1 className='text-2xl'>https:info@Moqdishupower.com/</h1>
      </div>

      {/* logo */}
      <div className="">
        <img className='h-33' src="https://www.muqdishopower.com/wp-content/uploads/2019/12/logo-web-5.png" alt="" />
      </div>
     </div>

     {/* CUSTOMER STATEMENT */}
     <div className="">
      <div className="h-1 w-full bg-black"></div>
      <div className="h-13 w-full bg-black mt-2 flex justify-center items-center">
        <h1 className='text-white text-4xl font-bold'>CUSTOMER STATEMENT</h1>
      </div>

      <div className="flex justify-between mt-3">
        <div className="">
          <h1 className='text-2xl'>  <span className='font-bold'> Brach </span>Bakaaro Brach</h1>
          <h1 className='text-2xl'>  <span className='font-bold'> Name </span>Maxamed Nur Warsame</h1>
          <h1 className='text-2xl'>  <span className='font-bold'> Print Date : </span>09-06-2026</h1>
        </div>
        <div className="">
          <h1 className='text-2xl'>  <span className='font-bold'> Zone </span>B2</h1>
          <h1 className='text-2xl'>  <span className='font-bold'> Tel </span>615602020</h1>
          <h1 className='text-2xl'>  <span className='font-bold'> Group Name : </span>N/A</h1>
        </div>
        <div className="">
          <h1 className='text-2xl'>  <span className='font-bold'> SQN :</span>128396</h1>
          <h1 className='text-2xl'>  <span className='font-bold'> Cust ID : </span>CUS01-004325</h1>
        </div>
      </div>

     </div>

     {/* Table */}
     <table className='mt-3`'>
      <thead>
        <tr>
          <th className='py-2 w-screen bg-black text-white border-l text-2xl'>S/N</th>
          <th className='py-2 w-screen bg-black text-white border-l text-2xl'>Date</th>
          <th className='py-2 w-screen bg-black text-white border-l text-2xl'>Ref</th>
          <th className='py-2 w-screen bg-black text-white border-l text-2xl'>Description </th>
          <th className='py-2 w-screen bg-black text-white border-l text-2xl'>L R</th>
          <th className='py-2 w-screen bg-black text-white border-l text-2xl'>C R</th>
          <th className='py-2 w-screen bg-black text-white border-l text-2xl'>Usage</th>
          <th className='py-2 w-screen bg-black text-white border-l text-2xl'>Rate</th>
          <th className='py-2 w-screen bg-black text-white border-l text-2xl'>Credit</th>
          <th className='py-2 w-screen bg-black text-white border-l text-2xl'>Debit</th>
          <th className='py-2 w-screen bg-black text-white border-l text-2xl'>Balance</th>
          <th className='py-2 w-screen bg-black text-white border-l text-2xl'>Users</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td  className='py-2 w-screen  text-black  border-l border-b text-2xl'>1</td>
          <td  className='py-2 w-screen  text-black  border-l border-b text-2xl'>2025-06-29</td>
          <td  className='py-2 w-screen  text-black  border-l border-b text-2xl'>June2025</td>
          <td  className='py-2 w-screen  text-black  border-l border-b text-2xl'>Bill Usage</td>
          <td  className='py-2 w-screen  text-black  border-l border-b text-2xl'>6530.0</td>
          <td  className='py-2 w-screen  text-black  border-l border-b text-2xl'>6725.0</td>
          <td  className='py-2 w-screen  text-black  border-l border-b text-2xl'>194.0</td>
          <td  className='py-2 w-screen  text-black  border-l border-b text-2xl'>0.41</td>
          <td  className='py-2 w-screen  text-black  border-l border-b text-2xl'>79.95</td>
          <td  className='py-2 w-screen  text-black  border-l border-b text-2xl'></td>
          <td  className='py-2 w-screen  text-black  border-l border-b text-3xl font-bold'>$ 79.95</td>
          <td  className='py-2 w-screen  text-black border-r border-b border-l   text-2xl'>Xasan</td>
        </tr>
        <tr>
         <td  className='py-2 w-screen  text-black  border-l border-b text-2xl'>2</td>
          <td  className='py-2 w-screen  text-black  border-l border-b text-2xl'>2025-07-02</td>
          <td  className='py-2 w-screen  text-black  border-l border-b text-2xl'>RV0686272</td>
          <td  className='py-2 w-screen  text-black  border-l border-b text-2xl'>SSB-6049 615602020</td>
          <td  className='py-2 w-screen  text-black  border-l border-b text-2xl'>6530.0</td>
          <td  className='py-2 w-screen  text-black  border-l border-b text-2xl'>6725.0</td>
          <td  className='py-2 w-screen  text-black  border-l border-b text-2xl'>194.0</td>
          <td  className='py-2 w-screen  text-black  border-l border-b text-2xl'>0.41</td>
          <td  className='py-2 w-screen  text-black  border-l border-b text-2xl'></td>
          <td  className='py-2 w-screen  text-black  border-l border-b text-2xl '>79</td>
          <td  className='py-2 w-screen  text-black  border-l border-b text-3xl font-bold '>$ 0.95</td>
          <td  className='py-2 w-screen  text-black border-r border-b  border-l text-2xl'>Xasan</td>
        </tr>
        <tr>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
          <td  className='py-2 w-screen  text-black  border-l border-b text-2xl  font-bold'>79.95</td>
          <td  className='py-2 w-screen  text-black  border-l border-b text-2xl  font-bold'>79</td>
          <td  className='py-2 w-screen  text-black  border-l border-b text-3xl font-bold '>$ 0.95</td>
          <td  className='py-2 w-screen  text-black border-r border-b  border-l text-2xl'></td>
        </tr>

      </tbody>
     </table>
    </div>
  )
}

export default App
