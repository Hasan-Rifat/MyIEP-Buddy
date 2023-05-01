import Image from 'next/image';
// Image import
import img from '../../../../images/dashboard/goalsAndObj/Sales-target.svg'

const GoalsGenerator = () => {
  return <div className=" min-h-screen  bg-[#F2F2F2]  px-10 flex items-center gap-10">

    <div className=' flex flex-col items-center justify-center w-2/6'>
      <Image src={img} alt="Picture of the author" />
      <h1 className=' text-[#616161] font-medium text-2xl mt-5 mb-3'>Goal and Objectives Generator</h1>
      <p className=' text-[#878787]'>1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
    </div>
    <div className=' w-4/6 bg-white'>
      <ol class="flex items-center w-full">
        <li class="flex w-full items-center text-blue-600  after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-500 after:border-4 after:inline-block ">
          <span class="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12  shrink-0">
            <svg aria-hidden="true" class="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          </span>
        </li>
        <li class="flex w-full items-center  ">
          <span class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12  shrink-0">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 lg:w-6 lg:h-6 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </span>
        </li>

      </ol>
    </div>
  </div>;
};

export default GoalsGenerator;
