import { useState, useRef, useEffect } from "react"
import logo from "../assets/logo.png";

export const Header = () => {
    const [openDropdown, setOpenDropdown] = useState(null); // 'product', 'templates', or null
    const [openSubMenu, setOpenSubMenu] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const dropdownRef = useRef(null);

    // 2. Update toggle to accept which menu is being clicked
    const toggleDropDown = (menuName) => {
        setOpenDropdown((prev) => (prev === menuName ? null : menuName));
        setOpenSubMenu(null); // Close submenus when switching main menus
    };

    const toggleSubMenu = (subMenuName) => {
        setOpenSubMenu((prev) => (prev === subMenuName ? null : subMenuName));
    };
    
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleEvents = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenDropdown(null); // Close everything
                setOpenSubMenu(null);
            }
            if (event.key === 'Escape' || event.key === "Esc") {
                setOpenDropdown(null); //Close everything using Escape button
                setOpenSubMenu(null);
            }
        };
        
    
    
        document.addEventListener("mousedown", handleEvents);
        document.addEventListener("keydown", handleEvents); // Listen for keys
    
        return () => {
            document.removeEventListener("mousedown", handleEvents);
            document.removeEventListener("keydown", handleEvents);
        };
    }, []);
    
    return (
    
    <header>
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 text-primary-600">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl w-full">
            <a href="/" className="flex items-center">
                <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Bonsai</span>
            </a>
            <div className="flex items-center justify-end lg:order-2">
                <a href="/" className="block text-primary-700 outline outline-primary-700 outline-1 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">LOG IN</a>
                <a href="/" className="text-white bg-primary-700 hover:bg-green-700 focus:ring-4 focus:ring-primary-300 font-medium rounded-md text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-green-700">START FREE</a>
                <button onClick={toggleMobileMenu} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ml-1" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    {!isMobileMenuOpen ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    ) : (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    )}
                    </button>
            </div>
            
            <div ref={dropdownRef} className={`${isMobileMenuOpen ? "flex" : "hidden"} overflow-visible justify-between items-center w-full lg:flex lg:w-auto lg:order-1`} id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                  <li className="relative">

                    {/*Dropdown Button for Product*/}                    
                    <button onClick={() => toggleDropDown("product")} id="multiLevelDropdownButton" data-dropdown-toggle="multi-dropdown" className="inline-flex w-full py-2 pr-4 pl-3 my-3 text-md text-primary-600 bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-semibold leading-5 rounded-base px-4 focus:outline-none hover:text-primary-700" type="button">
                    Product
                    <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/></svg>
                    </button>

                   {/* Dropdown Menu - Only shows if isShow is true */}
                    {openDropdown === 'product' &&(  
                    <div id="multi-dropdown" className="absolute left-0 top-full z-50 bg-white border-default-medium rounded-base shadow-lg w-80">
                        <ul className="divide-y-2 p-2 text-lg text-body font-medium" aria-labelledby="multiLevelDropdownButton">
                        <li className="relative py-7">
                            <button onClick={() => toggleSubMenu("workflow")} id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                            Bonsai Workflow
                            <svg className="h-4 w-4 ms-auto rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/></svg>
                            </button>
                            <p className="text-base font-normal text-left mx-2">Look professional, win more clients and manage your business from one place</p>
                            {openSubMenu === 'workflow' &&(
                            <div id="doubleDropdown" className="relative w-full mt-1 ml-4 border-l-2 border-gray-100 lg:absolute lg:left-full lg:top-0 lg:ml-0 lg:w-80 lg:border lg:shadow-xl lg:z-10 lg:bg-white">
                                <ul className="p-2 text-base text-body font-medium" aria-labelledby="doubleDropdownButton">
                                <li>
                                    <a href="#/" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Invoices</a>
                                  
                                </li>
                                <li>
                                    <a href="/" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Proposals</a>
                                </li>
                                <li>
                                    <a href="/" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Contracts</a>
                                </li>
                                <li>
                                    <a href="/" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Client CRM</a>
                                </li>
                                </ul>
                            </div>
                            )}
                        </li>    
                                    
                        <li className="py-7">
                            <a href="/" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Bonsai Tax</a>
                            <p className="text-base font-normal text-left mx-2">Track expenses, maximize tax write-offs and estimate taxes without the headache.</p>
                        </li>
                        <li className="py-7">
                            <a href="/" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Bonsai Cash</a>
                            <p className="text-base font-normal text-left mx-2">Bonsai's all-in-one financial hub: No fees and lightening fast payouts.</p>
                        </li>
                        </ul>
                    </div>
                    )}
                    </li>
                    <li className="relative">
                    {/*Dropdown Button for Templates*/}                    
                    <button onClick={() => toggleDropDown("templates")} id="multiLevelDropdownButton" data-dropdown-toggle="multi-dropdown" className="inline-flex w-full py-2 pr-4 pl-3 my-3 text-md text-primary-600 bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-semibold leading-5 rounded-base px-4 focus:outline-none hover:text-primary-700" type="button">
                    Templates
                    <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/></svg>
                    </button>

                   {/* Dropdown Menu - Only shows if isShow is true */}
                    {openDropdown === 'templates' &&(  
                    <div id="multi-dropdown" className="absolute left-0 top-full z-50 bg-white border-default-medium rounded-base shadow-lg w-80">
                        <ul className="p-2 text-lg text-body font-medium" aria-labelledby="multiLevelDropdownButton">
                        <li className="relative">
                            <button onClick={() => toggleSubMenu("contracts")} id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                            Contract Templates
                            <svg className="h-4 w-4 ms-auto rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/></svg>
                            </button>
                            {openSubMenu === 'contracts' && (
                            <div id="doubleDropdown" className="relative w-full mt-1 ml-4 border-l-2 border-gray-100 lg:absolute lg:left-full lg:top-0 lg:ml-0 lg:w-80 lg:border lg:shadow-xl lg:z-10 lg:bg-white">
                                <h2 className="text-xl text-center">Featured Invoice Templates</h2>
                                <ul className="p-2 text-base text-body font-medium" aria-labelledby="doubleDropdownButton">
                                <li>
                                    <a href="#/" className="relative group block p-3 
                                    bg-gray-50 border border-gray-100 rounded-lg 
                                    overflow-hidden transition-all hover:border-primary-700">Free Contract Maker</a>
                                </li>
                                <li>
                                    <a href="/" className="relative group block p-3 
                                    bg-gray-50 border border-gray-100 rounded-lg 
                                    overflow-hidden transition-all hover:border-primary-700">Social Media Management Contract Template</a>
                                </li>
                                <li>
                                    <a href="/" className="relative group block p-3 
                                    bg-gray-50 border border-gray-100 rounded-lg 
                                    overflow-hidden transition-all hover:border-primary-700">Graphic Design Contract Template</a>
                                </li>
                                <li>
                                    <a href="/" className="relative group block p-3 
                                    bg-gray-50 border border-gray-100 rounded-lg 
                                    overflow-hidden transition-all hover:border-primary-700">Digital Marketing Contract Template</a>
                                </li>
                                </ul>
                                <span className="text-center text-blue-500 mx-20">See all templates</span>
                            </div>
                            )}
                        </li>    
                                    
                        <li className="relative">
                            <button onClick={() => toggleSubMenu("proposals")} id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                            Proposal Templates
                            <svg className="h-4 w-4 ms-auto rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/></svg>
                            </button>
                            {openSubMenu === "proposals" && (
                            <div id="doubleDropdown" className="relative w-full mt-1 ml-4 border-l-2 border-gray-100 lg:absolute lg:left-full lg:top-0 lg:ml-0 lg:w-80 lg:border lg:shadow-xl lg:z-10 lg:bg-white">
                                <h2 className="text-xl text-center">Featured Proposal Templates</h2>
                                <ul className="p-2 text-base text-body font-medium" aria-labelledby="doubleDropdownButton">
                                <li>
                                    <a href="#/" className="relative group block p-3 
                                    bg-gray-50 border border-gray-100 rounded-lg 
                                    overflow-hidden transition-all hover:border-primary-700">Graphic Design Proposal Template</a>
                                </li>
                                <li>
                                    <a href="/" className="relative group block p-3 
                                    bg-gray-50 border border-gray-100 rounded-lg 
                                    overflow-hidden transition-all hover:border-primary-700">Business Proposal Template</a>
                                </li>
                                <li>
                                    <a href="/" className="inline-flex items-center w-full hover:bg-neutral-tertiary-medium hover:text-heading rounderelative group p-3 
                                    bg-gray-50 border border-gray-100 rounded-lg 
                                    overflow-hidden transition-all hover:border-primary-700">Brand Ambassador Proposal Template</a>
                                </li>
                                <li>
                                    <a href="/" className="relative group block p-3 
                                    bg-gray-50 border border-gray-100 rounded-lg 
                                    overflow-hidden transition-all hover:border-primary-700">Interior Design Scope of Work Template</a>
                                </li>
                                </ul>
                                <span className="text-center text-blue-500 mx-20">See all templates</span>
                            </div>
                            )}
                        </li>
                        <li className="relative">
                            <button onClick={() => toggleSubMenu("invoice")} id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                            Invoice Templates
                            <svg className="h-4 w-4 ms-auto rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/></svg>
                            </button>
                            {openSubMenu === "invoice" && (
                            <div id="doubleDropdown" className="relative w-full mt-1 ml-4 border-l-2 border-gray-100 lg:absolute lg:left-full lg:top-0 lg:ml-0 lg:w-80 lg:border lg:shadow-xl lg:z-10 lg:bg-white">
                                <h2 className="text-xl text-center">Featured Invoice Templates</h2>
                                <ul className="p-2 text-base text-body font-medium" aria-labelledby="doubleDropdownButton">
                                <li>
                                    <a href="#/" className="relative group block p-3 
                                      bg-gray-50 border border-gray-100 rounded-lg 
                                      overflow-hidden transition-all hover:border-primary-700">Social Media Invoice Template</a>
                                </li>
                                <li>
                                    <a href="/" className="relative group block p-3 
                                    bg-gray-50 border border-gray-100 rounded-lg 
                                    overflow-hidden transition-all hover:border-primary-700">Contractor Invoice Template</a>
                                </li>
                                <li>
                                    <a href="/" className="relative group block p-3 
                                    bg-gray-50 border border-gray-100 rounded-lg 
                                    overflow-hidden transition-all hover:border-primary-700">Web Design Invoice Template</a>
                                </li>
                                <li>
                                    <a href="/" className="relative group block p-3 
                                    bg-gray-50 border border-gray-100 rounded-lg 
                                    overflow-hidden transition-all hover:border-primary-700">Influencer Invoice Template</a>
                                </li>
                                </ul>
                                <span className="text-center text-blue-500 mx-20">See all templates</span>
                            </div>
                            )}
                        </li>        
                        <li className="relative">
                            <button onClick={() => toggleSubMenu("agreement")} id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                            Agreement Templates
                            <svg className="h-4 w-4 ms-auto rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/></svg>
                            </button>
                            {openSubMenu === "agreement" && (
                            <div id="doubleDropdown" className="relative w-full mt-1 ml-4 border-l-2 border-gray-100 lg:absolute lg:left-full lg:top-0 lg:ml-0 lg:w-80 lg:border lg:shadow-xl lg:z-10 lg:bg-white">
                                <h2 className="text-xl text-center">Featured Agreement Templates</h2>
                                <ul className="p-2 text-base text-body font-medium" aria-labelledby="doubleDropdownButton">
                                <li>
                                    <a href="#/" className="relative group block p-3 
                                    bg-gray-50 border border-gray-100 rounded-lg 
                                    overflow-hidden transition-all hover:border-primary-700">Influencer Agreement Template</a>
                                </li>
                                <li>
                                    <a href="/" className="relative group block p-3 
                                        bg-gray-50 border border-gray-100 rounded-lg 
                                        overflow-hidden transition-all hover:border-primary-700">Influencer Collaboration Agreement Template</a>
                                </li>
                                <li>
                                    <a href="/" className="relative group block p-3 
                                    bg-gray-50 border border-gray-100 rounded-lg 
                                    overflow-hidden transition-all hover:border-primary-700">Monthly Retainer Agreement Template</a>
                                </li>
                                <li>
                                    <a href="/" className="relative group block p-3 
                                    bg-gray-50 border border-gray-100 rounded-lg 
                                    overflow-hidden transition-all hover:border-primary-700">Writer Agreement Template</a>
                                </li>
                                </ul>
                                <span className="text-blue-500 mx-20">See all templates</span>
                            </div>
                            )}
                        </li>        
                        <li>
                            <a href="/" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</a>
                        </li>
                        </ul>
                    </div>
                    )}
                    </li>
                    <li>
                        <a href="/" className="block py-2 pr-4 pl-3 my-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 lg:py-1.5">Pricing</a>
                    </li>
                    <li>
                        <a href="/" className="block py-2 pr-4 pl-3 my-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 lg:py-1.5">Reviews</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
  )
}
