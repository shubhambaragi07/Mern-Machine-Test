import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Button from '@mui/material/Button';

const Login = () => {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let navigate = useNavigate()

    let login=()=>{
        let payload = {email, password}
        axios.post('http://localhost:4001/login', payload)
        .then((e)=>{
            if(e.data.status == "success"){
                navigate(`/dashbord/${e.data.id}`)
            }
            else if(e.data.status == "fail"){
                alert("wrong password")
            }
            else if(e.data.status == "noUser"){
                alert("Invalid Email")
            }
        })
    }

    return (
        <div>
            <div className='container mt-5'>
                <h1 className='text-center font-bold text-2xl my-3'>Login Form</h1>
                <div className='border border-red-600 max-w-[300px] mx-auto my-6 p-10'> 
                <input className='bg-yellow-200 border-2 border-violet-400 text-black my-3 placeholder-black ' placeholder='Email' type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                <br />
                <input className='bg-yellow-200 border-2 border-violet-400 text-black my-3 placeholder-black' placeholder='Password' type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                <button className='bg-blue-300 ml-5  p-1' onClick={login}>LOGIN</button>
                <br />
                <p>do not have Account? <Button variant="outlined"><Link to='/register'> Sign Up</Link></Button> </p>
                </div>
            </div>


        </div>

    //     <div class="container mt-5">
    //     <div class="row justify-content-center">
    //       <div class="col-md-6">
    //         <h2 class="text-center mb-4">Login Form</h2>
    //         <form>
              
    //           <div class="mb-3">
    //             <label for="email" class="form-label">Email address</label>
    //             <input required  className='form-control' placeholder='Enter Email' type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
    //             {/* <input type="email" class="form-control" id="email" placeholder="Enter your email"> */}
    //           </div>
    //           <div class="mb-3">
    //             <label for="password" class="form-label">Password</label>
    //             <input required  className='form-control' placeholder='Enter your password' type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
    //             {/* <input type="password" class="form-control" id="password" placeholder="Enter your password"> */}
    //           </div>
    //           <div class="d-grid">
    //             <button onClick={login} class="btn btn-primary mb-2">LOGIN</button>
    //             {/* <button type="button" class="btn btn-secondary">Sign Up</button> */}
    //           </div>
    //           <p>do not have Account? <Button ><Link to='/register'> Sign Up</Link></Button> </p>
    //         </form>
    //       </div>
    //     </div>
    //   </div>



    )
}

export default Login