"use client";
import { useState } from "react";
import AccordionLayout from "../shared/AccordionLayout";

export default function FaqAccording() {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <div className="flex flex-col justify-center items-center mt-16">
      <AccordionLayout
        title="How do I sign up for MyIEP Buddy?"
        index={1}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        To sign up for MyIEP Buddy, visit our website and click on the
        &quot;Sign Up&quot; button. Choose a subscription plan, create an
        account with your email address and a password, and complete the payment
        process. Once your account is set up, you can start using MyIEP Buddy
        immediately!
      </AccordionLayout>

      <AccordionLayout
        title="How does MyIEP Buddy work?"
        index={2}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        Using advanced artificial intelligence, MyIEP Buddy analyzes your input
        and generates customized IEP components, including goals, objectives,
        accommodations, present level statements, and progress monitoring ideas.
        You can review, edit, and save these components to create a
        comprehensive IEP for each student.
      </AccordionLayout>

      <AccordionLayout
        title="Can I try MyIEP Buddy for free?"
        index={3}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        A: We understand the importance of evaluating a tool before committing
        to a subscription. However, at this time, we do not offer a free version
        of MyIEP Buddy. Our platform&apos;s features, resources, and continuous
        updates require resources to maintain, and as such, we are unable to
        provide a free option, at least for the time being. We encourage you to
        explore the features, benefits, and testimonials on our website to help
        you make an informed decision about subscribing to MyIEP Buddy!
      </AccordionLayout>

      <AccordionLayout
        title="Can I cancel my subscription?"
        index={4}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        We strive to provide the best possible experience for our users.
        However, please note that we do not offer refunds for cancellations at
        this time. We encourage users to fully utilize their free trial period
        to ensure that MyIEP Buddy meets their needs before committing to a paid
        subscription.
      </AccordionLayout>
    </div>
  );
}
