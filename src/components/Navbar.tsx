import { Menu, X } from "@boxicons/react"
import { useState } from "react"
import { NavLink } from "react-router-dom"

function Navbar(){
    const [isOpen , setIsOpen] = useState(false)

    return(
        <>
            <nav className="bg-blue-300 w-full">
                <div className="p-6 md:px-8 flex justify-between items-center">
                    <h1 className="text-3xl font-[Lalezar]">amyrdar</h1>
                    
                    {/* open navbar */}
                     <ul className="hidden md:flex items-center gap-3 lg:text-lg">
                        <li><NavLink className={({isActive}) => `${isActive ? 'text-black' : 'text-gray-600'}`} to={'/'}>صفحه اصلی</NavLink></li>
                        <li><NavLink className={({isActive}) => `${isActive ? 'text-black' : 'text-gray-600'}`} to={'/products'}>محصولات</NavLink></li>
                        <li><NavLink className={({isActive}) => `${isActive ? 'text-black' : 'text-gray-600'}`} to={'/blog'}>مقالات</NavLink></li>
                        <li><NavLink className={({isActive}) => `${isActive ? 'text-black' : 'text-gray-600'}`} to={'/about'}>درباره ما</NavLink></li>
                        <li><NavLink className={({isActive}) => `${isActive ? 'text-black' : 'text-gray-600'}`} to={'/panel'}>پنل</NavLink></li>
                        <li><NavLink className={({isActive}) => `${isActive ? 'text-black' : 'text-gray-600'}`} to={'/login'}>ورود</NavLink></li>
                    </ul>




                    {/* open/close navbar */}
                    <button className="md:hidden cursor-pointer" onClick={()=> isOpen ? setIsOpen(false) : setIsOpen(true)} ><Menu/></button>
                    <div className={`md:hidden h-screen fixed z-50 right-0 top-0 bg-white overflow-hidden transition-all duration-400 ${isOpen ? 'w-full sm:w-[45%]' : 'w-0'}`}>
                            <div className="flex justify-between p-4 border-b">
                                <h1 className="text-3xl font-[Lalezar]">amyrdar</h1>
                                <button className="cursor-pointer" onClick={()=> isOpen ? setIsOpen(false) : setIsOpen(true)}><X/></button>
                            </div>
                        <ul className="flex flex-col items-center py-4 text-lg gap-2">
                            <li><NavLink className={({isActive}) => `${isActive ? 'text-black' : 'text-gray-600'}`} to={'/'}>صفحه اصلی</NavLink></li>
                            <li><NavLink className={({isActive}) => `${isActive ? 'text-black' : 'text-gray-600'}`} to={'/products'}>محصولات</NavLink></li>
                            <li><NavLink className={({isActive}) => `${isActive ? 'text-black' : 'text-gray-600'}`} to={'/blog'}>مقالات</NavLink></li>
                            <li><NavLink className={({isActive}) => `${isActive ? 'text-black' : 'text-gray-600'}`} to={'/about'}>درباره ما</NavLink></li>
                            <li><NavLink className={({isActive}) => `${isActive ? 'text-black' : 'text-gray-600'}`} to={'/panel'}>پنل</NavLink></li>
                            <li><NavLink className={({isActive}) => `${isActive ? 'text-black' : 'text-gray-600'}`} to={'/login'}>ورود</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar