import Image from 'next/image'
import BlogCard from '../shared/BlogCard'

// Image import 
import heroicon2 from '../../../images/homeImg/heroIcon4.svg'
import blog1 from '../../../images/blogImg/blog1.svg'
import blog2 from '../../../images/blogImg/blog2.svg'
import blog3 from '../../../images/blogImg/blog3.svg'

export default function EducationBlog() {
    return (
        <div className='bg-[#F7F9FA] py-20'>
            <div className=' container mx-auto xl:px-20 px-5'>
                <div className=' mx-auto h-[60px] bg-[#D4ECDF] rounded-lg w-[60px] flex items-center justify-center mb-6'>
                    <Image
                        src={heroicon2}
                        alt="Picture of the author"
                        className=" h-12"
                    />
                </div>
                <h1 className=' text-4xl text-center font-semibold text-[#232933]'>Special Education <span className=' text-[#43A4F5]'> Blog</span></h1>
                <p className=' text-[#4D4D4D] mt-4 text-lg text-center mb-10'>Set dolorum fuga. Et harum quidem rerum facilis est et expedita</p>

                <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:gap-16 xl:gap-14 lg:gap-10 gap-14'>
                    <BlogCard img={blog1} title={'Lorem ipsum dolor sit amet consectetur'} text={'similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio ...'} date={'December 24, 2022'} />
                    <BlogCard img={blog2} title={'Sed do euismod tempor incididunt'} text={'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus  ...'} date={'January 18, 2023'} />
                    <BlogCard img={blog3} title={'At vero eos et accusamus et iusto odio dignissimos'} text={'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui umquam ...'} date={'January 24, 2023'} />
                </div>
            </div>
        </div>
    )
}
