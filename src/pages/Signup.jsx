import axios from "axios";
import { useState } from "react"
import { Link } from "react-router";
import { ToastContainer, toast } from 'react-toastify';

function Signup() {
    const url = "http://localhost:3000";
    const [values, setValues] = useState("")

    const handleChange = (event) => {
        setValues({...values,[event.target.id]:event.target.value})
        // console.log(event.target.id,event.target.value)
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        const { data } = await axios.post(`${url}/user`,values)
        console.log(data)
        if (data.status == false) {
            toast.success(data.message)
        }
        else {
            toast.error(data.message)
        }

        // try {
        //     const { data } = await axios.post(`${url}/user`, values);
        //     alert(data.message);
        //     console.log(data.message)
        // } catch (error) {
        //     console.log(error)
        //     alert( "User already exists");
        // }
    };



    console.log(values)
    return (
        <>
            <div className="w-[40%] m-auto mt-9 shadow-lg p-13">
                <ToastContainer />

                {/* <label htmlFor="name" className=" block text-sm font-medium text-gray-700">
                    full name
                </label> */}
                <div>
                    <form 
                        onSubmit={(event)=>onSubmit(event)}
                    >
                        <input
                            id="name"
                            type="text"
                            required
                            placeholder="username"
                            onChange={(event) => handleChange(event)}                        // onChange={(event)=>console.log(event.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        {/* you are typing {values} */}

                        <input
                            id="email"
                            type="email"
                            required
                            placeholder="email"
                            onChange={(event) => handleChange(event)}
                            // onChange={(event)=>console.log(event.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        <input
                            id="password"
                            type="password"
                            required
                            placeholder="password"
                            onChange={(event) => handleChange(event)}
                            // onChange={(event)=>console.log(event.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        <button
                            className="w-full bg-[#0a363a] text-white p-2 rounded hover:bg-[#0a363a] flex items-center justify-center"
                        >                             
                            singUp</button>
                    </form>
                </div>
                <p className="mt-5 text-center  font-thin"> Already have an acocunt? <Link to="/login" className=" font-bold">login</Link></p>
            </div>
        </>
    )
}
export default Signup














// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//     const url = "http://localhost:3000";
//     const navigate = useNavigate();

//     const [value, setValue] = useState({ username: "", email: "", password: "" });
//     const [loading, setLoading] = useState(false);

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setValue((prev) => ({ ...prev, [name]: value }));
//     };

//     const onSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);

//         try {
//             const { data } = await axios.post(`${url}/user`, value);
//             console.log(data)
//             if (data.status === true) {
//                 alert(data.message);
//                 navigate("/login"); // Redirect to login page after successful signup
//             } else {
//                 alert("Error: " + data.message);
//             }
//         } catch (error) {
//             alert("Signup failed. Please try again.");
//             console.error("Error:", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold text-center mb-4">Signup</h2>
//             <form onSubmit={onSubmit} className="space-y-4">
//                 <input
//                     type="text"
//                     name="username"
//                     placeholder="Username"
//                     value={value.username}
//                     onChange={handleChange}
//                     className="w-full p-2 border border-gray-300 rounded"
//                     required
//                 />
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Gmail (Email)"
//                     value={value.email}
//                     onChange={handleChange}
//                     className="w-full p-2 border border-gray-300 rounded"
//                     required
//                 />
//                 <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     value={value.password}
//                     onChange={handleChange}
//                     className="w-full p-2 border border-gray-300 rounded"
//                     required
//                 />
//                 <button
//                     type="submit"
//                     className="w-full bg-[#0a363a] text-white p-2 rounded hover:bg-[#0a363a] flex items-center justify-center"
//                     disabled={loading}
//                 >
//                     {loading ? (
//                         <svg
//                             className="animate-spin h-5 w-5 mr-2 border-t-2 border-white rounded-full"
//                             viewBox="0 0 24 24"
//                         ></svg>
//                     ) : (
//                         "Sign Up"
//                     )}
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Signup;
