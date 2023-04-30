"use client"
import { useState } from "react";
import AccordionLayout from "../shared/AccordionLayout";


export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState(1);
    return (
        <div className='bg-[#F7F9FA] py-20'>
            <div className=' container mx-auto xl:px-20 px-5'>
                <h1 className=' text-4xl text-center font-semibold text-[#232933]'>Frequently Asked  <span className=' text-[#43A4F5]'>Questions</span></h1>
                <div className='flex flex-col justify-center items-center mt-16'>
                    <AccordionLayout
                        title="What is MyIEP Buddy?"
                        index={1}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                    >
                        Using advanced artificial intelligence, MyIEP Buddy analyzes your input and generates customized IEP components, including goals, objectives, accommodations, present level statements, and progress monitoring ideas. You can review, edit, and save these components to create a comprehensive IEP for each student.
                    </AccordionLayout>

                    <AccordionLayout
                        title="How does MyIEP Buddy work?"
                        index={2}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                    >
                        Using advanced artificial intelligence, MyIEP Buddy analyzes your input and generates customized IEP components, including goals, objectives, accommodations, present level statements, and progress monitoring ideas. You can review, edit, and save these components to create a comprehensive IEP for each student.
                    </AccordionLayout>


                    <AccordionLayout
                        title="How do I sign up for MyIEP Buddy?"
                        index={3}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                    >
                        Using advanced artificial intelligence, MyIEP Buddy analyzes your input and generates customized IEP components, including goals, objectives, accommodations, present level statements, and progress monitoring ideas. You can review, edit, and save these components to create a comprehensive IEP for each student.
                    </AccordionLayout>


                    <AccordionLayout
                        title="Can I try MyIEP Buddy for free?"
                        index={4}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                    >
                        Using advanced artificial intelligence, MyIEP Buddy analyzes your input and generates customized IEP components, including goals, objectives, accommodations, present level statements, and progress monitoring ideas. You can review, edit, and save these components to create a comprehensive IEP for each student.
                    </AccordionLayout>


                    <AccordionLayout
                        title="Can I cancel my subscription?"
                        index={5}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                    >
                        Using advanced artificial intelligence, MyIEP Buddy analyzes your input and generates customized IEP components, including goals, objectives, accommodations, present level statements, and progress monitoring ideas. You can review, edit, and save these components to create a comprehensive IEP for each student.
                    </AccordionLayout>


                </div>
            </div>
        </div>
    )
}
