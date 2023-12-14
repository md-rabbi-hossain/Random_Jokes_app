// import React, { useEffect } from 'react';
// import axios from 'axios';
// import { useState } from 'react';

// export default function Post() {
//     const url = "https://jsonplaceholder.typicode.com/users"
//     const [user, setUsers] = useState('');
//     const [input, setinput] = useState('');

//     const Getdata = async () => {
//         const response = await axios.post(url, {
//             father: input
//         })
//         const data = response.data
//         setUsers(data)
//         console.log(input);
//     }

//     const handele = (e) => {
//         setinput(e.target.value)
//     }
//     return (
//         <>
//             <input type="text" value={input} onChange={handele} />
//             <button onClick={Getdata}>submit</button>
//             <h2>{user && user.father}</h2>
//         </>
//     );
// }


























// const url = "https://jsonplaceholder.typicode.com/users"
// const [user, setUsers] = useState('');

// const Getdata = async () => {
//     const response = await axios(url)
//     const data = response.data
//     setUsers(data)
// }

// useEffect(() => {
//     Getdata()
// }, []);
// return (
//     <>
//         {user && user.map((item) => (
//             <h2>{item.name}</h2>
//         ))}
//     </>
// );