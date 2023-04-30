import Link from 'next/link'


export default function TermsContainer() {
    return (
        <div>
            <div>
                <Link href={"/terms/menu1"}>
                    <p className=" py-6   2xl:px-[14px] px-[10px] cursor-pointer rounded-md text-[15px] font-[550]  text-black hover:text-[#FFAAA9] ">
                        Menu 1
                    </p>
                </Link>
                <Link href={"/terms/menu2"}>
                    <p className=" py-6   2xl:px-[14px] px-[10px] cursor-pointer rounded-md text-[15px] font-[550]  text-black hover:text-[#FFAAA9] ">
                        Menu 2
                    </p>
                </Link>
                <Link href={"/terms/menu1"}>
                    <p className=" py-6   2xl:px-[14px] px-[10px] cursor-pointer rounded-md text-[15px] font-[550]  text-black hover:text-[#FFAAA9] ">
                        Menu 3
                    </p>
                </Link>
            </div>

            <div>
                { }
            </div>

        </div>
    )
}
