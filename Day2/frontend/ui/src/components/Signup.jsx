// import React, { useState } from 'react';
// import { Input } from "@/components/ui/input";
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import toast from "react-hot-toast";

// const Signup = () => {

//     const [user, setUser] = useState({
//         fullName: "",
//         userName: "",
//         password: "",
//         confirmPassword: "",
//         gender: ""
//     });

//     const navigate = useNavigate();
//     const handleCheckbox = (gender) => {
//         setUser({ ...user, gender });
//     }   

//     const onSubmitHandler = async (e) => {
//         try {
//             e.preventDefault();
//             const res = await axios.post(`http://localhost:8000/user/register`, user, {
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 withCredentials: true
//             }); 
//             if (res.data.success) {
//                 navigate("/login");
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             if (error.response) {
//                 // The request was made and the server responded with a status code
//                 // that falls out of the range of 2xx
//                 toast.error(error.response.data.message);
//             } else if (error.request) {
//                 // The request was made but no response was received
//                 toast.error("No response received from the server.");
//             } else {
//                 // Something happened in setting up the request that triggered an Error
//                 toast.error("An error occurred while setting up the request.");
//             }
//             console.log(error);
//         }
    
//         setUser({
//             fullName: "",
//             userName: "",
//             password: "",
//             confirmPassword: "",
//             gender: ""
//         });
//     }
    
//     return (
//         <div className="flex justify-center items-center min-h-screen">
//             <div className='m-3 flex flex-col justify-center items-center w-[40%]'>
//                 <div className=' mb-10 text-center'>
//                     <h2 className="text-3xl">Register New Account</h2>
//                     <h2 className="text-1xl text-zinc-500">Please fill all fields!</h2>
//                 </div>
//                 <form onSubmit={onSubmitHandler} action="">
//                     <div className='flex flex-col'>
//                         <Input
//                             className="m-2 min-w-[300px]"
//                             type="text"
//                             value={user.fullName}
//                             onChange={(e) => setUser({ ...user, fullName: e.target.value })}
//                             placeholder="Full Name"
//                         />
//                         <Input
//                             className="m-2 min-w-[300px]"
//                             type="text"
//                             value={user.userName}
//                             onChange={(e) => setUser({ ...user, userName: e.target.value })}
//                             placeholder="User Name"
//                         />
//                         <Input
//                             className="m-2 min-w-[300px]"
//                             type="text"
//                             value={user.password}
//                             onChange={(e) => setUser({ ...user, password: e.target.value })}
//                             placeholder="Password"
//                         />
//                         <Input
//                             className="m-2 min-w-[300px]"
//                             type="text"
//                             value={user.confirmPassword}
//                             onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
//                             placeholder="Confirm Password"
//                         />
//                         <div className='flex'>

//                             <div className="m-2 flex items-center">
//                                 <p>Male</p>
//                                 <input
//                                     type="checkbox"
//                                     value={user.gender === "male"}
//                                     onChange={(e) => handleCheckbox("male")}
//                                     className="checkbox mx-2" />
//                             </div>
//                             <div className='flex items-center'>
//                                 <p>Female</p>
//                                 <input
//                                     type="checkbox"
//                                     value={user.gender === "female"}
//                                     onChange={(e) => handleCheckbox("female")}
//                                     className="checkbox mx-2" />
//                             </div>
//                         </div>

//                         <div className='flex justify-center items-center' >
//                             <h2> Already have an account? </h2>
//                             <a className=" text-sm m-2 hover:underline text-blue-500 hover:text-blue-700" href="/login">Login</a>
//                         </div>

//                         <button
//                             className="m-2 min-w-[300px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                             type="submit">
//                             Sign Up
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div >
//     );
// }

// export default Signup;

import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from "react-hot-toast";

const Signup = () => {
    const [user, setUser] = useState({
        userName: "",
        email: "",
        phoneNo: "",
        educationalQualification: "",
        currentLocation: "",
        cityState: "",
        additionalInformation: "",
        password: "",
        confirmPassword: "",
        gender: "",
        profilePhoto: ""
    });

    const navigate = useNavigate();

    const handleCheckbox = (gender) => {
        setUser({ ...user, gender });
    };

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const res = await axios.post(`http://localhost:8000/user/register`, user, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });

            if (res.data.success) {
                navigate("/login");
                toast.success(res.data.message);
            }
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message);
            } else if (error.request) {
                toast.error("No response received from the server.");
            } else {
                toast.error("An error occurred while setting up the request.");
            }
            console.log(error);
        }

        setUser({
            userName: "",
            email: "",
            phoneNo: "",
            educationalQualification: "",
            currentLocation: "",
            cityState: "",
            additionalInformation: "",
            password: "",
            confirmPassword: "",
            gender: "",
            profilePhoto: ""
        });
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className='m-3 flex flex-col justify-center items-center w-[40%]'>
                <div className='mb-10 text-center'>
                    <h2 className="text-3xl">Register New Account</h2>
                    <h2 className="text-1xl text-zinc-500">Please fill all fields!</h2>
                </div>
                <form onSubmit={onSubmitHandler}>
                    <div className='flex flex-col'>
                        <Input
                            className="m-2 min-w-[300px]"
                            type="text"
                            value={user.userName}
                            onChange={(e) => setUser({ ...user, userName: e.target.value })}
                            placeholder="User Name"
                        />
                        <Input
                            className="m-2 min-w-[300px]"
                            type="email"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            placeholder="Email"
                        />
                        <Input
                            className="m-2 min-w-[300px]"
                            type="text"
                            value={user.phoneNo}
                            onChange={(e) => setUser({ ...user, phoneNo: e.target.value })}
                            placeholder="Phone Number"
                        />
                        <Input
                            className="m-2 min-w-[300px]"
                            type="text"
                            value={user.educationalQualification}
                            onChange={(e) => setUser({ ...user, educationalQualification: e.target.value })}
                            placeholder="Educational Qualification"
                        />
                        <Input
                            className="m-2 min-w-[300px]"
                            type="text"
                            value={user.currentLocation}
                            onChange={(e) => setUser({ ...user, currentLocation: e.target.value })}
                            placeholder="Current Location"
                        />
                        <Input
                            className="m-2 min-w-[300px]"
                            type="text"
                            value={user.cityState}
                            onChange={(e) => setUser({ ...user, cityState: e.target.value })}
                            placeholder="City and State"
                        />
                        <Input
                            className="m-2 min-w-[300px]"
                            type="text"
                            value={user.additionalInformation}
                            onChange={(e) => setUser({ ...user, additionalInformation: e.target.value })}
                            placeholder="Additional Information"
                        />
                        <Input
                            className="m-2 min-w-[300px]"
                            type="password"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            placeholder="Password"
                        />
                        <Input
                            className="m-2 min-w-[300px]"
                            type="password"
                            value={user.confirmPassword}
                            onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
                            placeholder="Confirm Password"
                        />

                        <div className='flex'>
                            <div className="m-2 flex items-center">
                                <p>Male</p>
                                <input
                                    type="checkbox"
                                    checked={user.gender === "male"}
                                    onChange={() => handleCheckbox("male")}
                                    className="checkbox mx-2" />
                            </div>
                            <div className='flex items-center'>
                                <p>Female</p>
                                <input
                                    type="checkbox"
                                    checked={user.gender === "female"}
                                    onChange={() => handleCheckbox("female")}
                                    className="checkbox mx-2" />
                            </div>
                        </div>

                        <div className='flex justify-center items-center'>
                            <h2>Already have an account?</h2>
                            <a className="text-sm m-2 hover:underline text-blue-500 hover:text-blue-700" href="/login">Login</a>
                        </div>

                        <button
                            className="m-2 min-w-[300px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            type="submit">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;

