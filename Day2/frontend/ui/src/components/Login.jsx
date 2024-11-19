// import React, { useState } from 'react';
// import { Input } from "@/components/ui/input";
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import toast from "react-hot-toast";

// const Login = () => {
//     const [user, setUser] = useState({
//         userName: "",
//         password: ""
//     });

//     const navigate = useNavigate();

//     const onSubmitHandler = async (e) => {
//         e.preventDefault();
//         try {
//             console.log("Submitting login request with user data:", user); // Log user data before submitting

//             const res = await axios.post(`http://localhost:8000/user/login`, user, {
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 withCredentials: true
//             });

//             console.log("Received response from server:", res); // Log the response received

//             if (res.data.success) {
//                 toast.success(res.data.message);
//                 navigate("/homePage");
//             } else {
//                 toast.error("Login failed");
//             }
//         } catch (error) {
//             console.error("Error during login request:", error); // Log the error for debugging
//             if (error.response && error.response.data) {
//                 toast.error(error.response.data.message);
//             } else {
//                 toast.error("An unexpected error occurred");
//             }
//         }
//     };

//     return (
//         <div className="flex justify-center items-center min-h-screen">
//             <div className='m-3 flex flex-col justify-center items-center w-[40%]'>
//                 <div className='mb-10 text-center'>
//                     <h2 className="text-3xl">Login</h2>
//                     <h2 className="text-1xl text-zinc-500">Please fill all fields!</h2>
//                 </div>
//                 <form onSubmit={onSubmitHandler}>
//                     <div className='flex flex-col'>
//                         <Input
//                             className="m-2 min-w-[300px]"
//                             type="text"
//                             value={user.userName}
//                             onChange={(e) => setUser({ ...user, userName: e.target.value })}
//                             placeholder="User Name"
//                         />
//                         <Input
//                             className="m-2 min-w-[300px]"
//                             type="password"
//                             value={user.password}
//                             onChange={(e) => setUser({ ...user, password: e.target.value })}
//                             placeholder="Password"
//                         />
//                         <div className='flex justify-center items-center'>
//                             <h2>Don't have an account?</h2>
//                             <a className="text-sm m-2 hover:underline text-blue-500 hover:text-blue-700" href="/">Signup</a>
//                         </div>
//                         <button
//                             className="m-2 min-w-[300px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                             type="submit">
//                             Login
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Login;


import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from "react-hot-toast";

const Login = () => {
    const [user, setUser] = useState({
        userName: "",
        password: ""
    });
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        try {
            console.log("Submitting login request with user data:", user);

            const res = await axios.post(`http://localhost:8000/user/login`, user, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });

            console.log("Received response from server:", res);

            if (res.data.success) {
                // Store the token and user data
                if (res.data.token) {
                    localStorage.setItem('token', res.data.token);
                }
                
                // Store essential user data
                localStorage.setItem('userData', JSON.stringify({
                    _id: res.data._id,
                    userName: res.data.userName,
                    profilePhoto: res.data.profilePhoto
                }));

                toast.success(res.data.message || 'Login successful!');
                
                // Small delay to ensure storage is complete
                setTimeout(() => {
                    navigate("/homePage", { replace: true });
                }, 100);
            } else {
                toast.error(res.data.message || "Login failed");
            }
        } catch (error) {
            console.error("Error during login request:", error);
            if (error.response?.data?.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error("An unexpected error occurred");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className='m-3 flex flex-col justify-center items-center w-full max-w-md'>
                <div className='mb-10 text-center'>
                    <h2 className="text-3xl font-bold">Login</h2>
                    <h2 className="text-sm text-zinc-500 mt-2">Please fill all fields!</h2>
                </div>
                <form onSubmit={onSubmitHandler} className="w-full px-4">
                    <div className='flex flex-col space-y-4'>
                        <Input
                            className="w-full"
                            type="text"
                            value={user.userName}
                            onChange={(e) => setUser({ ...user, userName: e.target.value })}
                            placeholder="User Name"
                            disabled={isLoading}
                            required
                        />
                        <Input
                            className="w-full"
                            type="password"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            placeholder="Password"
                            disabled={isLoading}
                            required
                        />
                        <div className='flex justify-center items-center text-sm'>
                            <span>Don't have an account?</span>
                            <a 
                                className="ml-2 hover:underline text-blue-500 hover:text-blue-700" 
                                href="/"
                            >
                                Signup
                            </a>
                        </div>
                        <button
                            className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors
                                ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Logging in...' : 'Login'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;