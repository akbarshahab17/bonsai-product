
export const Card = () => {

    const cardData = [
        {id:"1", title:"Standard plan", price:"$49", period:"/month", list:"", button:"START FREE"},
        {id:"2", title:"Professional", price:"$39", period:"/month", list:"", button:"START FREE"},
        {id:"3", title:"Business", price:"$79", period:"/month", list:"", button:"START FREE"}
    ]

  return (
    <div className="flex flex-wrap justify-center gap-2">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 justify-items-start">    
        {cardData.map((item) => (
            <div key={item.id} className="w-full max-w-sm p-6 bg-neutral-primary-soft border border-default rounded-base drop-shadow-sm hover:drop-shadow-xl">
                <h5 className="mb-4 text-xl font-medium text-body">{item.title}</h5>
                <div className="flex items-baseline text-heading">
                    <span className="text-5xl font-extrabold tracking-tight">{item.price}</span>
                    <span className="ms-2 font-medium text-body">{item.period}</span>
                </div>
                <ul className="space-y-4 my-6">
                    <li className="flex items-center">
                        <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                        <span className="text-body">2 team members</span>
                    </li>
                    <li className="flex items-center">
                        <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                        <span className="text-body">20GB Cloud storage</span>
                    </li>
                    <li className="flex items-center">
                        <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                        <span className="text-body">Integration help</span>
                    </li>
                    <li className="flex items-center line-through decoration-body">
                        <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                        <span className="text-body">Sketch Files</span>
                    </li>
                    <li className="flex items-center line-through decoration-body">
                        <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                        <span className="text-body">API Access</span>
                    </li>
                    <li className="flex items-center line-through decoration-body">
                        <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                        <span className="text-body">Complete documentation</span>
                    </li>
                    <li className="flex items-center line-through decoration-body">
                        <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                        <span className="text-body">24×7 phone & email support</span>
                    </li>
                </ul>
                <button type="button" className="w-full bg-primary-700 rounded-md text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">{item.button}</button>
            </div>
        ))}
    </div>
    </div>
  )
}
