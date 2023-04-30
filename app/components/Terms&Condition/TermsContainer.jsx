'use client'

import { useState } from "react";






export default function TermsContainer() {
    const testimonials = [
        {
            id: 0,
            name: "Terms & Conditions 1",
            titles: "MyIEP Buddy Terms and Conditions 1",
            description:
                `Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the MyIEP Buddy website (the "Service") operated by MyIEP Buddy, LLC. ("us", "we", or "our").
                Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who wish to access or use the Service. By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you do not have permission to access the Service.
                
                1. Accounts
                When you create an account with us, you guarantee that you are above the age of 18 and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the Service.
                You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether your password is with our Service or a third-party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                
            `,
        },
        {
            id: 1,
            name: "Terms & Conditions 2",
            titles: "MyIEP Buddy Terms and Conditions 2",
            description:
                `Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the MyIEP Buddy website (the "Service") operated by MyIEP Buddy, LLC. ("us", "we", or "our").
                Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who wish to access or use the Service. By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you do not have permission to access the Service.
                
                1. Accounts
                When you create an account with us, you guarantee that you are above the age of 18 and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the Service.
                
            `,
        },
        {
            id: 2,
            name: "Terms & Conditions 3",
            titles: "MyIEP Buddy Terms and Conditions 3",
            description:
                `Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the MyIEP Buddy website (the "Service") operated by MyIEP Buddy, LLC. ("us", "we", or "our").
                Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who wish to access or use the Service. By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you do not have permission to access the Service.

                You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether your password is with our Service or a third-party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                
            `,
        },
        {
            id: 3,
            name: "Terms & Conditions 4",
            titles: "MyIEP Buddy Terms and Conditions 4",
            description:
                `Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the MyIEP Buddy website (the "Service") operated by MyIEP Buddy, LLC. ("us", "we", or "our").
                Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who wish to access or use the Service. By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you do not have permission to access the Service.
                
                You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether your password is with our Service or a third-party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities 
                
            `,
        },
        {
            id: 4,
            name: "Terms & Conditions 5",
            titles: "MyIEP Buddy Terms and Conditions 5",
            description:
                `Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the MyIEP Buddy website (the "Service") operated by MyIEP Buddy, LLC. ("us", "we", or "our").
                Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who wish to access or use the Service. By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you do not have permission to access the Service.
                
                1. Accounts
                When you create an account with us, you guarantee that you are above the age of 18 and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the Service.
                You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities 
                
            `,
        },
    ];


    const [singleR, SetSingleR] = useState([{
        id: 0,
        name: "Terms & Conditions 1",
        titles: "MyIEP Buddy Terms and Conditions 1",
        description:
            `Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the MyIEP Buddy website (the "Service") operated by MyIEP Buddy, LLC. ("us", "we", or "our").
            Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who wish to access or use the Service. By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you do not have permission to access the Service.
            
            1. Accounts
            When you create an account with us, you guarantee that you are above the age of 18 and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the Service.
            You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether your password is with our Service or a third-party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
            
        `,
    },])


    const testimonialHandler = (id) => {
        const testimonialItem = testimonials.filter(
            (elm) => elm.id === id
        );
        if (testimonialItem) {
            console.log(testimonialItem);
            SetSingleR(testimonialItem);
        }
    };

    return (
        <div className="bg-[#F7F9FA] py-20">
            <div className=" container mx-auto xl:px-20  px-5 md:flex items-center gap-10 2xl:h-[50vh] md:h-[60vh] ">

                <div className=" md:border-r border-r-[#C8C8C8] md:w-2/6 h-full md:flex md:flex-col grid sm:grid-cols-2 grid-cols-1 items-center md:items-start   gap-7 md:gap-0  justify-center mb-8 md:mb-0 ">
                    {
                        testimonials.map(t =>
                            <div key={t.id} className=" mx-auto md:mx-0">
                                <button className={`${t.id == singleR[0]?.id ? 'bg-black text-white px-4 rounded-lg' : 'text-[#8A8A8A]'}  cursor-pointer  text-lg font-medium py-2 md:mb-5 `} onClick={() => testimonialHandler(t.id)}>{t.name}</button>
                            </div>
                        )
                    }
                </div>

                <div className="  md:w-4/6 h-full flex flex-col  justify-center">
                    {
                        singleR.map((d) =>
                            <div key={d.id}>
                                <h1 className=" lg:text-3xl text-xl text-[#8A8A8A] font-medium mb-5">{d.titles}</h1>
                                <p className=" lg:text-xl text-base text-[#878787]">{d.description}</p>
                            </div>
                        )
                    }
                </div>

            </div>
        </div>
    )
}
