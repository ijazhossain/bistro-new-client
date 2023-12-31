import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import frameImg from '../../assets/icon/frame.png';
import useCart from "../../hooks/useCart";
const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart()
    const handleSignOut = () => {
        logOut()
            .then(() => {

            }).catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="navbar bg-opacity-40 fixed z-10 bg-black text-white  max-w-[2590px] mx-auto px-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <NavLink to="/" className="bs-head-font">
                    <p className="text-3xl">Bistro Boss</p>
                    <p className="tracking-[9.12px]">Restaurant</p>
                </NavLink>
            </div>
            <div className="navbar-end hidden lg:flex w-full">
                <ul className="menu menu-horizontal px-1  lg:flex items-center w-full">

                    <NavLink className=" text-xl font-extrabold me-5" to="/">HOME</NavLink>



                    <NavLink className=" text-xl font-extrabold me-5" to="/menu">OUR MENU</NavLink>

                    <NavLink className=" text-xl font-extrabold me-5" to="/order/desserts">ORDER</NavLink>

                    <NavLink className=" text-xl font-extrabold me-5" to="/dashboard/myCart">DASHBOARD</NavLink>

                    <NavLink className=" text-xl font-extrabold me-5" to="/secret">SECRET</NavLink>

                    <div>
                        <NavLink to="/dashboard/myCart" className=" text-xl font-extrabold me-5 flex items-center">
                            <FaShoppingCart></FaShoppingCart>
                            <div className="badge badge-secondary ml-2">+{cart.length}</div>
                        </NavLink>
                    </div>

                    {
                        user ?
                            <>
                                <button className=" me-5 text-xl font-extrabold" onClick={handleSignOut}>SIGNOUT</button>
                                <span className="cursor-pointer tooltip tooltip-bottom" data-tip={user?.displayName}>
                                    <img className="w-[50px] h-[50px] rounded-full" src={user?.photoURL} alt="" /></span>
                            </>
                            :
                            <>

                                <NavLink className=" me-5 text-xl font-extrabold" to="/login">LOGIN</NavLink>

                                <img className="w-[50px] h-[50px] rounded-full" src={frameImg} alt="" />
                            </>
                    }
                </ul>
            </div>

        </div>

    );
};

export default NavBar;