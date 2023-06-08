import { NavLink } from "react-router-dom"
import { Context } from "../../Context"
import { useContext } from "react"

const NavBar = () =>{
    const context = useContext(Context)
    const activeStyles = 'underline underline-offset-4'
    return(
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'><NavLink to='/'>Shopi</NavLink></li>
                <li><NavLink to='/' className={({isActive})=> isActive ? activeStyles : undefined}>All</NavLink></li>
                <li><NavLink to='/clotes' className={({isActive})=> isActive ? activeStyles : undefined}>Clotes</NavLink></li>
                <li><NavLink to='/electronic' className={({isActive})=> isActive ? activeStyles : undefined}>Electronic</NavLink></li>
                <li><NavLink to='/furnitures' className={({isActive})=> isActive ? activeStyles : undefined}>Furnitures</NavLink></li>
                <li><NavLink to='/toys' className={({isActive})=> isActive ? activeStyles : undefined}>Toys</NavLink></li>
                <li><NavLink to='/others' className={({isActive})=> isActive ? activeStyles : undefined}>Others</NavLink></li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>rubio@rubiocorp.com</li>
                <li><NavLink to='/my-orders' className={({isActive})=> isActive ? activeStyles : undefined}>My Orders</NavLink></li>
                <li><NavLink to='/my-account' className={({isActive})=> isActive ? activeStyles : undefined}>My Account</NavLink></li>
                <li><NavLink to='/sign-in' className={({isActive})=> isActive ? activeStyles : undefined}>Sign-In</NavLink></li>
                <li>🛒 { context.count }</li>
                
            </ul>
        </nav>
    )
}
export { NavBar }