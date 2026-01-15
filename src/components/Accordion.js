import { useState } from "react";
export const Accordion = () => {
  
    const [openId, setOpenId] = useState(null);

    const toggleAccordion = (id) => {
        // If clicking the one that's already open, close it. Otherwise, open the new one.
        setOpenId(openId === id ? null : id);
      };

    const showData = [
        {
            id: "1",
            question: "How does the free trial work?",
            answer: "When you start your trial with Bonsai you'll receive full, unlimited access to all of Bonsai's Workflow or Workflow Plus Features! You will need to enter your credit card information to begin your trial, but don't worry - we won't charge you anything until the subscription ends! If you wish to cancel at any time during the trial period, you can do so through your Subscriptions Settings Page."
        },
        {
            id: "2",
            question: "Can I change plans anytime?",
            answer: "Yes, you can from within your account. If you have already subscribed to a plan, or want to downgrade or upgrade your current one, you can do this by going to your 'Settings' and 'Subscription'."
        },
        {
            id: "3",
            question: "How do I pause my Bonsai subscription?",
            answer: "We totally understand that with the nature of freelancing, work ebbs and flows so you might not always need your Bonsai subscription to remain active! The good news is that you can cancel or pause your monthly subscription at any time without penalty. Once cancelled, you'll be able to continue logging in to access all your documents and even continue to use our free features, like Time Tracking! In order to cancel your subscription, login to your Bonsai account."
        },
        {
            id: "4",
            question: "What is your refund policy?",
            answer: "If you contact us within 2 weeks of being charged for your subscription, we will be happy to issue a refund for you!Beyond those 2 weeks, you will need to cancel or modify the subscription from the Subscriptions Tab in Settings to avoid future charges, but refunds will not be issued. This applies to both monthly and annual plans."
        }
    ];
   
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-10 flex flex-col gap-4 text-primary-600">
    {showData.map((faq) => (
            
        <div key={faq.id} onClick={() => toggleAccordion(faq.id)} id="accordion-collapse" data-accordion="collapse" className="rounded-base overflow-hidden shadow-xs">
        <h2 id="accordion-collapse-heading-1" className="text-xl">
            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body rounded-t-base border border-t-0 border-x-0 border-b-default hover:text-heading hover:bg-neutral-secondary-medium gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
            <span>{faq.question}</span>
            <svg data-accordion-icon className="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7"/></svg>
            </button>
        </h2>
        {/* Only show the body if this specific ID is selected */}
        {openId === faq.id && (
            <div className="border-t border-default">
              <div className="p-4 md:p-5">
                <p className="text-body">{faq.answer}</p>
              </div>
            </div>
          )}
        </div>
        ))}
    </div>

  )
}
