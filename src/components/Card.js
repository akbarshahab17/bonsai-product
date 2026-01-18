
export const Card = ({isYearly}) => {

    const cardData = [
        {id:"1", 
         title:"Standard plan", 
         monthlyPrice:"$24", 
         yearlyPrice:"$17",
         period:"/month", 
         features: [
            "All Templates", "Unlimited Clients & Projects", "Invoicing & Payments",
            "Proposals & Contracts", "Tasks & Time Tracking", "Client CRM",
            "Expense Tracking", "Up to 5 Project Collaborators"
            ], 
        button:"START FREE", 
        isPopular: false},
        {id:"2", 
         title:"Professional", 
         monthlyPrice:"$39", 
         yearlyPrice:"$32", 
         period:"/month", 
         features: [
            "Everything in Starter plus...", "Custom Branding", "Forms & Questionnaires",
            "Workflow Automations", "Client Portal", "QuickBooks Integration",
            "Calendly Integration", "Zapier Integration", "Up to 15 Project Collaborators"
          ], 
          button:"START FREE", 
          isPopular: true},
        {id:"3", title:"Business", monthlyPrice:"$79", 
            yearlyPrice:"$52", period:"/month", features: [
            "Everything in Starter and Professional plus...", "Subcontractor Management",
            "Hiring Agreement Templates (1099 contracts)", "Subcontractor Onboarding",
            "Talent Pool", "3 Team Seats (additional seats $9/month)",
            "Accountant Access", "Connect Multiple Bank Accounts",
            "Unlimited Subcontractors", "Unlimited Project Collaborators"
          ], button:"START FREE", isPopular: false}
    ]

  return (
    <div className="flex flex-wrap justify-center gap-2">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-stretch max-w-screen-xl">    
        {cardData.map((item) => (
            <div key={item.id} className={`relative flex flex-col w-full max-w-sm p-8 bg-white border rounded-base drop-shadow-sm transition-all duration-300
                ${item.isPopular 
                    ? 'border-primary-700 scale-105 z-10 drop-shadow-xl' 
                    : 'border-default hover:drop-shadow-xl'
                }`}>
                {/* THE POPULAR TAG */}
                {item.isPopular && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-700 text-white text-[13px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md whitespace-nowrap">
                            Most Popular
                        </span>
                )}
                <h5 className="mb-4 text-xl font-medium text-body">{item.title}</h5>
                <div className="flex flex-col text-heading">
                 <div className="flex items-baseline text-heading">
                        <span className="text-5xl font-extrabold tracking-tight">{isYearly ? item.yearlyPrice : item.monthlyPrice}</span>
                        <span className="ms-2 font-medium text-body">{item.period}</span>
                    </div>
                    {isYearly && (
                    <span className="text-xs font-bold text-primary-700 mt-2 uppercase tracking-wide">
                    Billed Annually
                    </span>
                    )}
                </div>
                <ul className="space-y-4 my-6 flex-grow">
                {item.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                        <span className="text-body">{feature}</span>
                    </li>
                    
                ))}
                </ul>
                <button type="button" className="w-full bg-primary-700 rounded-md text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">{item.button}</button>
            </div>
        ))}
    </div>
    </div>
  )
}
