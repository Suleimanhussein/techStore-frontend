import axios from "axios";
import { useState } from "react";
import { Link } from "react-router";
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const url = "http://localhost:3000";
    const [allValues, setAllValues] = useState({ email: "", password: "" }); // Initialize state with default values

    const handelChange = (event) => {
        setAllValues({ ...allValues, [event.target.id]: event.target.value });
    };

    const onsubmit = async (event) => {
        event.preventDefault();

        // Prepare the data you need to send, including 'data' and 'hash'
        // const requestData = {
        //     email: allValues.email,
        //     password: allValues.password,
        //     // If the server expects a 'data' field, you can include it here
        //     data: {
        //         // Add any other required data here
        //         email: allValues.email,
        //         timestamp: new Date().toISOString(),
        //     },
        //     // For hash, you may need to calculate it based on the password or other data
        //     hash: calculateHash(allValues.password), // You may need to implement hash calculation logic here
        // };

       
        const { data } = await axios.post(`${url}/user/login`, allValues);
        if (data.status === true) {
            // toast(data.message);
            toast.error(data.message);
        } else {
            toast.success(data.message);
            localStorage.setItem("token", data.token)



        }
    
    }
    // Example hash calculation function (you might use a library like 'crypto' for this)
    // const calculateHash = (password) => {
    //     // This is just an example, modify it based on your needs
    //     return password.split('').reverse().join('');
    // };

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
            <ToastContainer />
            <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
            <form onSubmit={onsubmit} className="space-y-4">
                <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    onChange={handelChange}
                    value={allValues.email}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    onChange={handelChange}
                    value={allValues.password}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-[#0a363a] text-white p-2 rounded hover:bg-[#084d50] flex items-center justify-center"
                >
                    Login
                </button>
                <p className=" font-thin text-center"> Don't have an account?  <Link to="/singUp" className="font-black capitalize">singUp</Link></p>
            </form>
        </div>
    );
};

export default Login;









// import axios from "axios";
// import { useState } from "react";

// const Login = () => {
//     const url = "http://localhost:3000";
//     const [allValues, setAllValues] = useState()
//     const handelChange = (event) => {
//         setAllValues({...allValues,[event.target.id]:event.target.value})
//     }
//     const onsubmit = async(event) => {
//         event.preventDefault()
//         // console.log(allValues)
//         const { data } = await axios.post(`${url}/user/login`, allValues)
//     //    try {
//     //     data
//     //    } catch (error) {
//     //     alert("error"+error+"sssss")
//     //    }
//         // if (data.status == true) {
//         //     alert(data.message)
//         // } else {
//         //     alert("error"+data.message)
//         // }
//         try {
//             const { data } = await axios.post(`${url}/user/login`, values);
//             alert(data.message);
//         } catch (error) {
//             alert("Error: " + error + "User already exists");
//         }
//     };
    

        

//     return (
//         <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
//             <form onSubmit={(event)=>onsubmit(event)} className="space-y-4">
//                 <input
//                     type="email"
//                     placeholder="email"
//                     onChange={(event) => handelChange(event)}
//                     className="w-full p-2 border border-gray-300 rounded"
//                     required
//                 />
//                 <input
//                     id="password"
//                     type="password"
//                     placeholder="Password"
//                     onChange={(event) => handelChange(event)}
//                     className="w-full p-2 border border-gray-300 rounded"
//                     required
//                 />
//                 {/* {error && <p className="text-red-500 text-sm text-center">{error}</p>} */}
//                 <button
//                     type="submit"
//                     className="w-full bg-[#0a363a] text-white p-2 rounded hover:bg-[#084d50] flex items-center justify-center"
//                     // disabled={loading}
//                 >
//                     login
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Login;
