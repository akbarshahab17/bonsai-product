
export const Featured = () => {
  return (
    <div className="grid grid-cols-1 gap-6 justify-items-center text-primary-600 w-full px-4 py-20">
        <div className="text-center mb-4">
            <h1 className="text-3xl font-bold">Super charge your work with add-ons</h1>
        </div>
        <div className="w-full max-w-5xl h-full flex justify-between items-start bg-neutral-primary-soft p-6 rounded-base shadow-lg ">
            <div className="flex flex-col">
                <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">Collaborators</h5>
                <p className="text-body mb-6">Invite other users to specific projects for limited access and functionality.</p>
            </div>
            <span className="text-3xl font-bold">Free</span>
                
        </div>  
        <div className="w-full max-w-5xl h-full flex justify-between items-start bg-neutral-primary-soft p-6 rounded-base shadow-lg">
            <div className="flex flex-col">
                <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">Partners</h5>
                <p className="text-body mb-6">Invite other users for full account access and company management.</p>
            </div>
            <div>
                <span className="flex flex-col text-4xl font-bold text-center">$9</span>
                <span className="text-sm">/MONTH</span>
            </div>
        </div>
        <div className="w-full max-w-5xl h-full flex justify-between items-start bg-neutral-primary-soft p-6 rounded-base shadow-lg">
            <div className="flex flex-col">
                <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">Bonsai Tax</h5>
                <p className="text-body mb-6">Track expenses, identify write-offs, and estimate quarterly taxes easily.</p>
            </div>
            <div className="ml-auto">
                <span className="flex flex-col text-4xl font-bold text-center ">$10</span>
                <span className="text-sm">/MONTH</span>
            </div>
        </div>
    </div>
  )
}
