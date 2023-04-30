import Image from "next/image";


export default function BlogCard({ img, title, text, date }) {
    return (
        <div className=' bg-white shadow-md p-4 rounded-2xl'>
            <Image
                src={img}
                alt="Picture of the author"
                className=' w-full rounded-lg'
            />
            <div className=' mt-6'>
                <h1 className=' text-[#161616] text-2xl font-semibold mb-2'>{title}</h1>
                <p className=' text-[#161616] text-[18px] mb-1'>{text}</p>
                <p className=' text-sm text-[#666666]'>{date}</p>
            </div>
        </div>
    )
}
