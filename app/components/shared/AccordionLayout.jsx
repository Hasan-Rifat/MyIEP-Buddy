
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs'

const AccordionLayout = ({ title, children, index, activeIndex, setActiveIndex }) => {
    const handleSetIndex = (index) => (activeIndex !== index) && setActiveIndex(index);

    return (
        <div className=' sm:w-10/12 w-full  border-t border-t-[#E3ECF6] transition-all duration-300 ease-in-out '>
            <div onClick={() => handleSetIndex(index)} className='flex justify-between cursor-pointer py-2 mt-2 transition-all duration-300 ease-in-out'>
                <div className='flex'>
                    <div className='text-[#4D4D4D] font-semibold text-lg'>{title}</div>
                </div>
                <div className="flex items-center justify-center">
                    {
                        (activeIndex === index)
                            ?
                            <div><div className=' h-[2px] w-4 rotate-45 bg-[#55B685] transition-all duration-300 ease-in-out'></div>
                                <div className=' h-[2px] w-4 -rotate-45 bg-[#55B685] mt-[-2px] transition-all duration-300 ease-in-out'></div>
                            </div>
                            : <div className=' h-[2px] w-3  bg-[#55B685] transition-all duration-300 ease-in-out'></div>
                    }
                </div>
            </div>
            {(activeIndex === index) ? (
                <div className="  py-4 pt-2 mb-6 transition-all duration-300 ease-in-out text-[#4D4D4D]">
                    {children}
                </div>) : (<div className="  transition-all duration-300 ease-in-out"></div>)
            }

        </div>
    );
};

export default AccordionLayout;