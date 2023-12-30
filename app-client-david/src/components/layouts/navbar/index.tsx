import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/actions/authActions";
import { RootState } from "../../../redux/store";
import { LOGOUT } from "../../../types";

const Navbar = () => {

    const { isAuthenticated, user, error } = useSelector((state:RootState) => state.auth);
    const dispatch = useDispatch()

    useEffect(() => {
        if (error) {
            alert(error);
        }
    }, [error]);

    const handleLogout = () => {
        logout()
        dispatch({
            type: LOGOUT,
        });
    };

    return (
        <nav className="flex flex-row justify-between px-32 bg-[#F1F3FF] py-4">
            <a href="/" className="cursor-pointer">
                <div className="w-[100px] h-[34px] bg-blue-800" />
            </a>
            <div className="">
                <div className="">
                    <ul className="flex flex-row gap-8 content-center items-center">
                        <li className="">
                            <a href="#services" className="scroll-smooth">Our Services</a>
                        </li>
                        <li className="">
                            <a href="#whyus" className="scroll-smooth">Why Us</a>
                        </li>
                        <li className="">
                            <a href="#testi" className="scroll-smooth">Testimonial</a>
                        </li>
                        <li className="">
                            <a href="#faq" className="scroll-smooth">FAQ</a>
                        </li>
                        {!isAuthenticated ? (
                            <a href="/register" className="">
                                <div className="w-[81px] h-9 px-3 py-2 bg-green-400 rounded-sm border justify-center items-center gap-2.5 inline-flex">
                                    <div className="text-white text-sm font-bold font-['Helvetica'] leading-tight">Register</div>
                                </div>
                            </a>
                        ) : (
                            <>
                                <button id="" title={user?.name || ''} className="ms-3  ">
                                    <div onClick={()=>handleLogout()} >Logout</div>
                                </button>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
