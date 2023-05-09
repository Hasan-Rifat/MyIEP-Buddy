'use client'
import Image from 'next/image';
import { useState } from 'react';

// Image import
import img from '../../../../../images/dashboard/user/present/present.svg'

const PresentGenerator = () => {
  const [next, setNext] = useState(true)

  const handelSubmit = (event) => {
    event.preventDefault();
    const goal = event.target.goal.value;
    const name = event.target.name.value;
    const age = event.target.age.value;
    const level = event.target.level.value;
    const date = event.target.date.value;
    const area = event.target.area.value;
    const info = event.target.info.value;
    console.log(goal, name, age, level, area, date, info);
  }

  return <div className=" min-h-screen  bg-[#F2F2F2]  sm:px-10 px-2 pt-5 lg:flex items-center gap-10">

    <div className=' flex flex-col items-center lg:w-2/6 mb-10 transition-all duration-200 ease-out'>
      <Image src={img} alt="Picture of the author" />
      <h1 className=' text-[#616161] font-medium text-2xl mt-5 mb-3'>Present Levels Generator</h1>
      <p className=' text-[#878787] w-9/12 mx-auto'>1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
    </div>
    <div className=' lg:w-4/6 bg-white mb-10  py-12 px-7 rounded-3xl'>
      <ol class="flex items-center justify-center ">
        <div className=' flex flex-col items-start justify-center'>
          <li class={`flex  items-center text-blue-600 after:content-[''] after:w-10 after:h-1 after:border-b after:border-[#A9F8FD] after:border-4  after:rounded-l-full`}>
            <span class={`flex text-xl text-[#555555] font-medium items-center justify-center w-10 h-10 bg-[#A9F8FD]  rounded-full lg:h-12 lg:w-12  shrink-0`}>
              1
            </span>
          </li>
          <h1 className=' text-[#A9F8FD] font-medium'>Create</h1>
        </div>
        <div className=' flex flex-col items-end '>
          <li class={`flex  items-center before:content-[''] before:w-10 before:h-1 before:border-b  before:border-4 before:inline-block before:rounded-r-full ${next ? 'before:border-[#555555]' : ' before:border-[#A9F8FD]'} `}>
            <span class={`flex text-xl items-center justify-center rounded-full w-10 h-10  lg:h-12 lg:w-12  shrink-0 ${next ? ' bg-transparent border border-[#555555] ' : 'bg-[#A9F8FD]'}`}>
              2
            </span>
          </li>
          <h1 className={` font-medium ${next ? 'text-[#555555]' : 'text-[#A9F8FD]'} `}>Result</h1>
        </div>
      </ol>

      {
        next ? <form onSubmit={handelSubmit}>
          <div>
            <label className=' text-[#5F5F5F] ' htmlFor="goal">Select Goal</label>
            <select required id="goal" name='goal' class="bg-[#F5F5F5] border border-gray-300 text-gray-900 mt-2 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3  ">
              <option selected value="CA">Select Goal</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>

          <div className=' mt-4'>
            <label className=' text-[#5F5F5F] ' htmlFor="name">What is the student’s name <span className=' text-[#5f5f5fa6]'>(First name only)</span></label>
            <input id='name' name='name' type="text" placeholder='Enter Age' className=' w-full p-3 mt-2 rounded-lg outline-none border border-[#BFBFBF]' />
          </div>

          <div className=' mt-4'>
            <label className=' text-[#5F5F5F] ' htmlFor="age">What is the student’s age</label>
            <input id='age' name='age' type="text" placeholder='Enter Grade Level' className=' w-full p-3 mt-2 rounded-lg outline-none border border-[#BFBFBF]' />
          </div>

          <div className=' mt-4'>
            <label className=' text-[#5F5F5F] ' htmlFor="level">What is the student’s grade</label>
            <input id='level' name='level' type="text" placeholder='Enter Grade' className=' w-full p-3 mt-2 rounded-lg outline-none border border-[#BFBFBF]' />
          </div>

          <div className=' mt-4'>
            <label className=' text-[#5F5F5F] ' htmlFor="date">IEP Date </label>
            <input name='date' id='date' type="date" placeholder='Select Date' className=' bg-[#F5F5F5] w-full p-3 mt-2 rounded-lg outline-none border border-[#BFBFBF]' />
          </div>

          <div className=' mt-4'>
            <label className=' text-[#5F5F5F] ' htmlFor="area">Area of need</label>
            <select id="area" name='area' class="bg-[#F5F5F5] border border-gray-300 text-gray-900 mt-2 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3  ">
              <option selected value="CA">Select  area of need</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>

          <div className=' mt-4'>
            <label className=' text-[#5F5F5F] ' htmlFor="info">Additional Information</label>
            <textarea placeholder='Enter Additional Information' name="info" id="info" cols="30" rows="10" className=' w-full p-3 mt-2 rounded-lg outline-none border border-[#BFBFBF]'></textarea>
          </div>


          <button
            // onClick={() => setNext(!next)}
            type='submit'
            className=' py-3 w-full rounded-lg bg-[#A9F8FD] text-[#555555]  mt-8 font-medium'>Create</button>
        </form> : <div className=' flex flex-col items-center'>


          <div>
            <h1 className=' text-[#616161] text-2xl text-center font-medium mt-10'>Present Levels</h1>
            <p className=' w-10/12 mx-auto text-center text-[#878787] text-lg'>1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
          </div>


          <div className=' border border-[#EFEFEF] p-8  mt-10 rounded-lg mb-4 w-full'>
            <h1 className=' text-[#616161] text-[22px] font-medium '>Student’s Strengths</h1>
            <p className=' text-[#878787] mt-2 mb-10 text-[18px]'>1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>


            <h1 className=' text-[#616161] text-[22px] font-medium '>Student’s Weaknesses</h1>
            <p className=' text-[#878787] mt-2 mb-10 text-[18px]'>1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>

            <h1 className=' text-[#616161] text-[22px] font-medium '>Student’s Accommodations</h1>
            <p className=' text-[#878787] mt-2 mb-28 text-[18px]'>1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
          </div>
          <div className=' w-full flex items-start'>
            <button className=' bg-[#EFEFEF] text-[#00000086] py-3 px-20 rounded-md border border-[#c8c8c8] mb-10 font-medium'>Edit</button>
          </div>

          <div className=' flex items-center w-full gap-10'>
            <button className=' w-1/2 py-3 border border-[#A9F8FD] rounded-lg text-[#555555] font-medium'>Copy</button>
            <button className=' w-1/2 bg-[#A9F8FD] rounded-lg py-3 text-[#555555] font-medium'>Save</button>
          </div>
        </div>
      }
    </div>
  </div>;
};

export default PresentGenerator;
