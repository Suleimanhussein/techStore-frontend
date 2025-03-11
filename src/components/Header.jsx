import { useEffect, useState } from "react";
import { Link } from "react-router";
import { jwtDecode } from "jwt-decode";
import { IoLogOut } from "react-icons/io5";

function Header() {
    const [loginUser, setLoginUser] = useState(false)
    useEffect(() => {
        function checkToken() {
            const token = localStorage.getItem("token")
            // console.log(token)
            if (token) {
                const decoded = jwtDecode(token)
                setLoginUser(decoded)
            }
        }
        checkToken()
    }, [])
    return (
        <>
            {/*computer screen*/}
            <header className=" w-[100%] items-center bg-[#0a363a] text-white px-9 py-5 ">
                {/* <h1>My React App</h1> */}
                <nav className="flex justify-between items-center">
                    <h1 className="text-lg font-bold">TechStore</h1>
                    <ul className="flex space-x-19">
                        <li><Link to="/">Home</Link></li> {/* Use 'to' instead of 'href' */}
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/about">About</Link></li>
                        {loginUser &&
                            <li><Link to="/purchase">activetiy</Link></li>
                        }
                    </ul>
                    <div className="mt-4 flex">
                        <input type="text" placeholder="Search..." className="py-3 px-9 border-1 border-[#c09e09] mx-9 w-100 rounded" />
                        {
                            loginUser ? <div className=" flex gap-3 items-center">

                                <i className=" text-[#be7f03] cursor-pointer text-3xl fa-solid fa-circle-user"></i>
                                <p>{loginUser.name}</p>
                                <button
                                    className=" text-2xl mx-3 cursor-pointer"
                                    onClick={() => {
                                        localStorage.removeItem("token")
                                        window.location.reload()
                                    }}
                                    
                                ><IoLogOut /></button>

                            </div> :

                                <button className="bg-[#c09e09] cursor-pointer text-white capitalize py-3 px-5 rounded"><Link to={"/singUp"}>sinng up</Link></button>
                        }

                    </div>
                </nav>

            </header>

            {/*mobile screen*/}

        </>
    );
}

export default Header;