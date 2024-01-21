import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
const Navbar = ()=>{
    const countCountext = useContext(ShoppingCartContext);

    const activeStyle = 'underline underline-offset-4'
    return (
        <nav className="flex justify-between items-center fixed w-full z-10 top-0 px-8 py-5 font-light">
            <ul className="flex items-center gap-3">
                <li className=" font-semibold text-lg">
                    <NavLink to='/' className={({ isActive }) => isActive ? activeStyle:undefined}>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink  to='/' >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes' className={({ isActive }) => isActive ? activeStyle:undefined}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics' className={({ isActive }) => isActive ? activeStyle:undefined}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/fornitures' className={({ isActive }) => isActive ? activeStyle:undefined}>
                        Fornitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys' className={({ isActive }) => isActive ? activeStyle:undefined}>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others' className={({ isActive }) => isActive ? activeStyle:undefined} >
                        Others
                    </NavLink>
                </li>
            </ul>

            <ul className=" flex items-center gap-3 ">
                <li className="text-black/60">
                    correo@correo.com
                </li>
                <li>
                    <NavLink to='/my-orders' className={({ isActive }) => isActive ? activeStyle:undefined}>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account' className={({ isActive }) => isActive ? activeStyle:undefined}>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in' className={({ isActive }) => isActive ? activeStyle:undefined}>
                        Sign in
                    </NavLink>
                </li>
                <li>
                    <div className='flex flex-col-2'>
                        <ShoppingCartIcon className='h-6 w-6 text-black'></ShoppingCartIcon>
                        <div>
                            {countCountext.count}

                        </div>
                    </div> 
                </li>
                
                
            </ul>




        </nav>
    )
}

export default Navbar