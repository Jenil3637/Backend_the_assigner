
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Homepage = () => {
    return (
        <div className='max-w-4xl mx-auto mt-10'>
            <div className='flex items-center justify-center mb-8'>
                <Avatar className="md:h-24 md:w-24 w-16 h-16 mr-4">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>JP</AvatarFallback>
                </Avatar>
                <div className='md:text-4xl text-2xl font-bold'>
                    <h2>Jenil Patel</h2>
                </div>
            </div>
            <div className='bg-white shadow-md rounded-lg p-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                        <h3 className='text-lg font-semibold mb-2'>Email:</h3>
                        <p>jenil.patel@example.com</p>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold mb-2'>Phone No:</h3>
                        <p>7383084538</p>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold mb-2'>Educational Qualification:</h3>
                        <p>10th, 12th, Diploma, Engineering</p>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold mb-2'>Current Location:</h3>
                        <p>Rajasthan, India</p>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold mb-2'>City/State:</h3>
                        <p>Jaipur, Rajasthan</p>
                    </div>
                </div>
                <div className='mt-6'>
                    <h3 className='text-lg font-semibold mb-2'>Additional Information:</h3>
                    <p>Any additional information you want to add here.</p>
                </div>
            </div>
        </div>
    );
}

export default Homepage;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// const Homepage = () => {
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         // Fetch user data from API
//         axios.get('http://localhost:8000/user/')
//             .then(response => {
//                 setUser(response.data); // Assuming response contains user data
//             })
//             .catch(error => {
//                 console.error('There was an error fetching the user data!', error);
//             });
//     }, []);

//     if (!user) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className='max-w-4xl mx-auto mt-10'>
//             <div className='flex items-center justify-center mb-8'>
//                 <Avatar className="md:h-24 md:w-24 w-16 h-16 mr-4">
//                     <AvatarImage src={user.avatar || "https://github.com/shadcn.png"} />
//                     <AvatarFallback>{user.name[0]}</AvatarFallback>
//                 </Avatar>
//                 <div className='md:text-4xl text-2xl font-bold'>
//                     <h2>{user.name}</h2>
//                 </div>
//             </div>
//             <div className='bg-white shadow-md rounded-lg p-6'>
//                 <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
//                     <div>
//                         <h3 className='text-lg font-semibold mb-2'>Email:</h3>
//                         <p>{user.email}</p>
//                     </div>
//                     <div>
//                         <h3 className='text-lg font-semibold mb-2'>Phone No:</h3>
//                         <p>{user.phone}</p>
//                     </div>
//                     <div>
//                         <h3 className='text-lg font-semibold mb-2'>Educational Qualification:</h3>
//                         <p>{user.education}</p>
//                     </div>
//                     <div>
//                         <h3 className='text-lg font-semibold mb-2'>Current Location:</h3>
//                         <p>{user.location}</p>
//                     </div>
//                     <div>
//                         <h3 className='text-lg font-semibold mb-2'>City/State:</h3>
//                         <p>{user.cityState}</p>
//                     </div>
//                 </div>
//                 <div className='mt-6'>
//                     <h3 className='text-lg font-semibold mb-2'>Additional Information:</h3>
//                     <p>{user.additionalInfo}</p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Homepage;


