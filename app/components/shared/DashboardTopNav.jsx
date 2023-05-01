// Image Import
import { BsFillBellFill } from 'react-icons/bs'
import { IoMdArrowDropdown } from 'react-icons/io'
import user from '../../../images/dashboard/dashUser.svg'
import Image from 'next/image'

export default function DashboardTopNav() {
    return (
        <div className=' bg-white  shadow-md  flex items-center justify-between px-20 py-5  '>
            <div></div>
            <div className=' flex items-center gap-5 text-[#9B9B9B]'>
                <BsFillBellFill className=' text-2xl text-[#9B9B9B]' />
                <div className=' flex items-center gap-2'>
                    <div>
                        <Image src={user} alt="Picture of the author" />
                    </div>
                    <div className=' flex items-center '>
                        <p>Ardian</p>
                        <IoMdArrowDropdown className=' text-xl mt-1' />
                    </div>
                </div>
            </div>
        </div>
    )
}
