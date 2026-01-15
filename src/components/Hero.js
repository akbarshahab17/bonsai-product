import { Card } from "../components/Card";

export const Hero = () => {
  return (
    <div className="text-primary-600">
      <div className="flex mx-20 py-16">
          <div className="text-3xl text-center w-full ">
              <h1>Plans & Pricing</h1>
          </div>
          <div className="flex justify-center w-full">             
            <label className="inline-flex items-center cursor-pointer">
              <span className="select-none text-sm font-medium text-heading">MONTHLY</span>
              <input type="checkbox" value="" className="sr-only peer"/>
              <div className="relative mx-3 w-9 h-5 bg-primary-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
              <span className="select-none text-sm font-medium text-heading">YEARLY</span>
            </label>
          </div>
        </div>
        <div>
            <Card />
        </div>
    </div>
  )
}
