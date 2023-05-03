"use client";

import { useState } from "react";

export default function TermsContainer() {
  const testimonials = [
    {
      id: 0,
      name: "Terms & Conditions 1",

      description: [
        `Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the MyIEP Buddy website (the "Service") operated by MyIEP Buddy, LLC. ("us", "we", or "our").",
        "Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who wish to access or use the Service. By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you do not have permission to access the Service.`,
        "1. Accounts",
        "When you create an account with us, you guarantee that you are above the age of 18 and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the Service.",
        "You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether your password is with our Service or a third-party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.",
      ],
    },
    {
      id: 1,
      name: "Terms & Conditions 2",

      description: [
        "2. Intellectual Property",
        "The Service and its original content, features, and functionality are and will remain the exclusive property of MyIEP Buddy, LLC and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of MyIEP Buddy, LLC.",

        "3. Links to Other Websites",
        "Our Service may contain links to third-party websites or services that are not owned or controlled by MyIEP Buddy, LLC. MyIEP Buddy, LLC has no control over and assumes no responsibility for the content, privacy policies, or practices of any third-party websites or services. We do not warrant the offerings of any of these entities/individuals or their websites.",

        "You acknowledge and agree that MyIEP Buddy, LLC shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such third-party websites or services.",
        "We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.",
      ],
    },
    {
      id: 2,
      name: "Terms & Conditions 3",

      description: [
        "4. Termination",
        "We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms",
        "If you wish to terminate your account, you may simply discontinue using the Service. In the event of account termination, the provisions of these Terms will remain in effect.",
        "5. Limitation of Liability",

        " In no event shall MyIEP Buddy, LLC, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.",
      ],
    },
    {
      id: 3,
      name: "Terms & Conditions 4",

      description: [
        "6. Disclaimer",
        `"Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
      MyIEP Buddy, LLC, its subsidiaries, affiliates, and licensors do not warrant that a) the Service will function uninterrupted, secure, or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements."`,

        "7. Governing Law",
        "These Terms shall be governed and construed in accordance with the laws of Michigan, United States, without regard to its conflict of law provisions.",
        "Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have had between us regarding the Service.",
      ],
    },
    {
      id: 4,
      name: "Terms & Conditions 5",

      description: [
        "8. Changes",
        "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.",
        "By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.",
        "9. Refund Policy",

        "We strive to provide the best possible experience for our users. However, please note that we do not offer refunds for cancellations. We encourage users to fully utilize their free trial period to ensure that MyIEP Buddy, LLC meets their needs before committing to a paid subscription.",

        "   10. Contact Us",
        " If you have any questions about these Terms, please contact us at support@myiepbuddy.com.",
      ],
    },
  ];

  const [singleR, SetSingleR] = useState([
    {
      id: 0,
      name: "Terms & Conditions 1",

      description: [
        `Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the MyIEP Buddy website (the "Service") operated by MyIEP Buddy, LLC. ("us", "we", or "our").",
        "Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who wish to access or use the Service. By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you do not have permission to access the Service.`,
        "1. Accounts",
        "When you create an account with us, you guarantee that you are above the age of 18 and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the Service.",
        "You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether your password is with our Service or a third-party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.",
      ],
    },
  ]);

  const testimonialHandler = (id) => {
    const testimonialItem = testimonials.filter((elm) => elm.id === id);
    if (testimonialItem) {
      SetSingleR(testimonialItem);
    }
  };

  return (
    <div className="bg-[#F7F9FA]">
      <div className=" container mx-auto xl:px-20  px-5 md:flex items-center gap-10 ">
        <div className=" md:border-r border-r-[#C8C8C8] md:w-2/6  md:flex md:flex-col grid sm:grid-cols-2 grid-cols-1 items-center md:items-start   gap-7 md:gap-0  justify-center mb-8 md:mb-0 ">
          {testimonials.map((t) => (
            <div key={t.id} className=" mx-auto md:mx-0">
              <button
                className={`${
                  t.id == singleR[0]?.id
                    ? "bg-black text-white px-4 rounded-lg"
                    : "text-[#8A8A8A]"
                }  cursor-pointer  text-lg font-medium py-2 md:mb-5 `}
                onClick={() => testimonialHandler(t.id)}
              >
                {t.name}
              </button>
            </div>
          ))}
        </div>

        <div className="  md:w-4/6  flex flex-col  justify-center py-20">
          {singleR.map((d) => (
            <div key={d.id}>
              <h1 className=" lg:text-3xl text-xl text-[#8A8A8A] font-medium mb-5">
                MyIEP Buddy Terms and Conditions
              </h1>
              {d.description.map((desc, i) => (
                <p
                  key={i}
                  className=" lg:text-xl text-base text-[#878787] py-3"
                >
                  {desc}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
