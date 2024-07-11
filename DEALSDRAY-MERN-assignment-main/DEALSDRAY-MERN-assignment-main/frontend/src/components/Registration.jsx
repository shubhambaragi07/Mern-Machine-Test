import React, { useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const Registration = () => {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [cnfPassword, setCnfPassword] = useState('')
    let navigate = useNavigate()

    let submitForm =()=>{
        let payload = {
            name,email,cnfPassword
        }
        if(!name || !email || !cnfPassword){
            alert("To register Fill all the fields..!")
        }
        else{
            if(password === cnfPassword ){
                axios.post('http://localhost:4001/register', payload)
            .then((e)=>{
                alert(e.data);
                navigate("/")
            })
            .catch((e)=>{
                alert("problem in sending data to the Backend.!");
            })
            }
            else{
                alert("both password should be matched..")
            }
            
        }
    }

    return (
        <div className=''>
            <div className=' max-w-[940px]  h-[600px] bg-white mx-auto relative  shadow-xl scale-75 p-[20px]'>
                <h1 className='text-center font-bold text-2xl my-3'>Admin Registration Form</h1>
                <div className='border border-red-600 max-w-[300px] h-[400px] mx-auto my-5 p-10 '>
                    <input className='bg-white border-2 border-violet-400 text-black my-4 placeholder-black' placeholder='Enter Full Name' type="text" value={name} onChange={(e)=>{setName(e.target.value)}} required />
                    <input required  className='bg-white border-2 border-violet-400 text-black my-3 placeholder-black' placeholder='Enter Email' type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                    <input required  className='bg-white border-2 border-violet-400 text-black my-3 placeholder-black' placeholder='Enter Password' type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    <input className='bg-white border-2 border-violet-400 text-black my-3 placeholder-black' placeholder='Retype Password' type="password" value={cnfPassword} onChange={(e)=>{setCnfPassword(e.target.value)}}/> 
                    <button className='bg-blue-300 ml-5  p-1' onClick={submitForm}>Register Me</button>
                    <p>already have Account? <Button variant="outlined"><Link to='/'> Sign In</Link></Button> </p>
                </div>
            </div>
        </div>
    //     <div className="container mt-5">
    //     <div className="row justify-content-center">
    //       <div className="col-md-6">
    //         <h2 className="text-center mb-4">Registration Form</h2>
    //         <form>
    //           <div className="mb-3">
    //             <label for="name" className="form-label">Name</label>
    //             <input required  className='form-control' placeholder='Enter your Name' type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
    //             {/* <input type="text" class="form-control" value={name}placeholder="Enter your name"> */}
    //           </div>
    //           <div class="mb-3">
    //             <label for="email" className="form-label">Email address</label>
    //             <input required  className='form-control' placeholder='Enter your Email' type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
    //             {/* <input type="email" class="form-control" id="email" placeholder="Enter your email"> */}
    //           </div>
    //           <div class="mb-3">
    //             <label for="password" className="form-label">Password</label>
    //             <input required  className='form-control' placeholder='Enter your password' type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
    //             {/* <input type="password" class="form-control" id="password" placeholder="Enter your password"> */}
    //           </div>
    //           <div class="mb-3">
    //             <label for="repassword" className="form-label">Re-enter Password</label>
    //             <input required  className='form-control' placeholder='Re-Enter your password' type="password" value={cnfPassword} onChange={(e)=>{setCnfPassword(e.target.value)}} />
    //             {/* <input type="password" class="form-control" id="repassword" placeholder="Re-enter your password"> */}
    //           </div>
    //           <div class="d-grid">
    //             <button  onClick={submitForm} class="btn btn-primary mb-2">Register</button>
    //             {/* <button type="button" class="btn btn-secondary">Sign Up</button> */}
    //           </div>
    //           <p>already have Account? <Button variant="outlined"><Link to='/'> Sign In</Link></Button> </p>
    //         </form>
    //       </div>
    //     </div>
    //   </div>


        
    )
}

export default Registration