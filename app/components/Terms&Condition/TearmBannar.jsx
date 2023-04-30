// Image import
import Image from 'next/image'
import terams from '../../../images/Terams/terams.svg'

export default function TearmBannar() {
    return (
        <div className=" tearm">
            <div className=" container px-20 mx-auto py-10 flex items-center justify-between">
                <h1 className=' text-[#555555] text-3xl font-medium'>Terms & Conditions</h1>
                <Image
                    src={terams}
                    alt="Picture of the author"
                />
            </div>
        </div>
    )
}
