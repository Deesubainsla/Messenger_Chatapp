import React, { useState, useRef } from 'react'
import { Paper, TextField, Typography, Container, Button } from '@mui/material'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import axios from 'axios';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { mycontext } from '../utils/contextapi/Contextapi.jsx';


function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {setuser, socket , user} = mycontext();
    // const {socket} = useSelector((state)=>state.reduxslice);
    const navigate = useNavigate();
    
    const [login, setlogin] = useState(true)
    const [profile, setprofile] = useState('https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png');
    const fileinput = useRef(null);

    const server = import.meta.env.VITE_SERVER;
    // console.log("server ", import.meta.env.VITE_SERVER);

    //for handle login
    const onlogin = async (data) => {

        const info = {
            username: data.username,
            password: data.loginpassword
        }

        // console.log(info);

        try {

            //const {data} = await axios.post(`${ser...     (also write like this:)
            const res = await axios.post(`${server}/user/login`, info
                , {
                    withCredentials: true,// Allows the client to accept and send the credentials (like cookies)
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );

            setuser(res.data.user._id);
            // socket.emit('setup',res.data.user._id);
            navigate('/');
            // console.log("logged in successfully ", res);

        } catch (error) {

            console.log("In catch block: ", error.response.data.message);
        }




    }

    //for handle signin
    const onsignin = async (data) => {

        // console.log("onsignin is working:");

        const signinfo = {
            avatar: (data.file[0]? data.file[0] : profile),//send it later todo:
            name: data.name,
            username: data.newusername,
            bio: data.bio,
            password: data.newpassword
        }

        console.log("signinfo ", signinfo);

        try {

            const res = await axios.post(`${server}/user/signin`, signinfo,{
                withCredentials: true,
                headers:{
                    "Content-Type":"multipart/form-data"
                }
            })

            setuser(res.data.user._id);
            navigate('/');
            console.log("signin successfully ", res);

        } catch (error) {
            console.log("Error in signin: ",error.message);
        }

    }



    const handleChange = (e) => {
        const fileimg = e.target.files[0];
        if (fileimg) {
            const reader = new FileReader();
            reader.readAsDataURL(fileimg);
            reader.onloadend = () => {
                setprofile(reader.result);
                // setValue('file',fileimg);
            };
        }
    }

    
    
    return <>
        <div className='min-h-screen flex justify-center items-center'>
            {login ?
                //login component:
                //direct passing in order to prevent unnecessary renders:
                (

                    <div className='p-8 px-12 w-[85%] md:w-[40%]  border-2 rounded-xl shadow-2xl  flex flex-col justify-center items-center'>
                        <h1 className='font-bold text-4xl mb-12 '>Login</h1>
                        <form className='w-full' onSubmit={handleSubmit(onlogin)}>

                            <div className='mb-4'>
                                <label className="input input-bordered  flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70">
                                        <path
                                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                    </svg>
                                    <input type="text" className="grow" placeholder="Username" {...register("username", { required: true })} />


                                </label>
                                {errors.username && <span className='text-sm text-red-600'>This field is required</span>}
                            </div>

                            <div className='mb-8'>
                                <label className="input input-bordered  flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70">
                                        <path
                                            fillRule="evenodd"
                                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                            clipRule="evenodd" />
                                    </svg>
                                    <input type="password" className="grow" placeholder='password' {...register("loginpassword", { required: true })} />


                                </label>
                                {errors.loginpassword && <span className='text-sm text-red-600'>This field is required</span>}
                            </div>


                            <button type='submit' className='w-full bg-blue-600 rounded text-white py-1 duration-300 hover:scale-105 '>Login</button>
                            <div className='text-center my-1'>OR</div>
                            <div className='text-center'>
                                <p className='inline'>Have no accont?</p><button onClick={() => setlogin(pre => !pre)} className='duration-300 hover:opacity-75 text-blue-600'>Signin</button>
                            </div>
                        </form>


                    </div>

                )
                :
                (
                    <div className='p-8 px-12 w-[85%] md:w-[40%]  border-2 rounded-xl shadow-2xl  flex flex-col justify-center items-center'>
                        <h1 className='font-bold text-4xl mb-5 '>Signin</h1>
                        <form className='w-full' onSubmit={handleSubmit(onsignin)}>
                            
                            <div className='mb-5 flex justify-center items-center'>
                                <div className='w-fit relative mb-2   h-[200px]  flex justify-center items-center'>
                                    <img className='border-2 h-full  w-[200px] rounded-full' src={profile} alt="uploadedimg" />

                                    <button onClick={() => { 
                                        // console.log("on camera click:");
                                        // console.log(fileinput.current);
                                        // fileinput.current.click();
                                        // console.log(document.getElementById("fileinput"));
                                        document.getElementById("fileinput").click();
                                        //Solved by using direct js:
                                        }} className='backdrop bg-white/55 hover:bg-white/65 p-2 cursor-pointer absolute right-[10%] bottom-[5%] rounded-full'>
                                        <CameraAltIcon />
                                    </button>
                                    {/* solved by using button instead of div, as i want clicking event:*/}

                                </div>
                                <input 
                                id='fileinput'
                                type="file" 
                                // ref={fileinput} 
                                className='hidden'
                                    //use multiple for select more then one file:
                                    // onChange={handleChange} //incountered issue due to react-hook-form
                                    

                                    //Note: useRef doesn't work with react-hook-form because RHF takes complete comtrol on input:
                                 {...register('file', {
                                    // required: true,
                                    onChange: (e) => {
                                        const fileimg = e.target.files[0];
                                        if (fileimg) {
                                            const reader = new FileReader();
                                            reader.readAsDataURL(fileimg);
                                            reader.onloadend = () => {
                                                setprofile(reader.result);
                                                // setValue('file',fileimg);
                                            };
                                        }
                                    }
                                    
                                    //  Solved by introduce the event in register:
                                     
                                 })} 
                                />
                                
                            </div>

                            <div className='mb-3'>
                                <label className="input input-bordered  flex items-center gap-2">
                                    {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg> */}
                                    <input type="text" className="grow" placeholder="Name" {...register("name", { required: true })} />
                                </label>
                                {errors.name && <span className='text-sm text-red-600'>This field is required</span>}
                            </div>

                            <div className='mb-3'>
                                <label className="input input-bordered  flex items-center gap-2">
                                    {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg> */}
                                    <input type="text" className="grow" placeholder="Bio" {...register("bio", { required: true })} />
                                </label>
                                {errors.bio && <span className='text-sm text-red-600'>This field is required</span>}
                            </div>

                            <div className='mb-3'>
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70">
                                        <path
                                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                    </svg>
                                    <input type="text" className="grow" placeholder="Username" {...register("newusername", { required: true })} />
                                </label>
                                {errors.newusername && <span className='text-sm text-red-600'>This field is required</span>}
                            </div>

                            <div className='mb-3'>
                                <label className="input input-bordered  flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70">
                                        <path
                                            fillRule="evenodd"
                                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                            clipRule="evenodd" />
                                    </svg>
                                    <input type="password" className="grow" placeholder='password' {...register("newpassword", { required: true })} />
                                </label>
                                {errors.newpassword && <span className='text-sm text-red-600'>This field is required</span>}
                            </div>





                            <button type='submit' className='w-full bg-blue-600 rounded text-white py-1 duration-300 hover:scale-105 '>Signin</button>
                            <div className='text-center my-1'>OR</div>
                            <div className='text-center'>
                                <p className='inline'>Have accont?</p><button onClick={() => setlogin(pre => !pre)} className='duration-300 hover:opacity-75 text-blue-600'>Login</button>
                            </div>
                        </form>


                    </div>
                )
            }
        </div>




    </>
}

export default Login
