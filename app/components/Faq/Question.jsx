import Image from 'next/image'

// Image Import
import faqGroup from '../../../images/faqImg/faqgroup.svg'

export default function Question() {
    return (
        <div className=' flex flex-col items-center justify-center'>
            <Image
                src={faqGroup}
                alt="Picture of the author"
            />
            <h1 className=' text-2xl text-[#3F3F3F] font-semibold mt-6'>Still have questions ?</h1>
            <p className=' text-[#737373] mt-2 text-lg'>Can’t find the answer you’re looking for ? Please contact our friendly team</p>
            <button className=' py-3 px-8 text-sm text-[#737373] rounded-lg bg-white mt-6 font-medium'>Contact Us</button>
        </div>
    )
}
