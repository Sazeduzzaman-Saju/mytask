import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import OthersLogin from '../../comps/OthersLogin';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {

    const [loginError, setLoginError] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser, user } = useContext(AuthContext);
    // const [userCreatedEmail, setUserCreatedEmail] = useState('');


    const Navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const imgHostBB = process.env.REACT_APP_imgBB_key;

    const handleSignUp = (data) => {
        console.log(data)
        setLoginError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)

                const image = data.photURL[0];
                const formData = new FormData();
                formData.append('image', image)
                const url = `https://api.imgbb.com/1/upload?&key=${imgHostBB}`;
                fetch(url, {
                    method: 'POST',
                    body: formData
                })
                    .then(res => res.json())
                    .then(imgData => {
                        console.log(imgData)
                        if (imgData.success) {
                            console.log()
                            const userInfo = {
                                displayName: data.name,
                                photoURL: imgData.data.url
                            }

                            updateUser(userInfo)
                                .then(() => {
                                    // saveUser(data.name, data.email, imgData.data.url, data.role)
                                    console.log(userInfo)
                                    alert('Sign Up SuccessFully Done')
                                    Navigate(from, { replace: true } || '/');
                                })
                                .catch(err => console.error(err))
                        }
                    })
                    .catch(err => console.error(err))
            })

    }

    // const saveUser = (name, email, photURL, role) => {

    //     const user = { name, email, photURL, role };
    //     fetch('https://resell-autocar-server.vercel.app/users', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setUserCreatedEmail(email)
    //         })
    // }
    return (
        <div className='mb-5'>
            <div className='mb-32'>
                <section class="h-full gradient-form  md:h-screen mx-auto">
                    <div class="container py-12 px-6 h-full">
                        <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                            <div class="xl:w-10/12">
                                <div class="block bg-white shadow-lg rounded-lg">
                                    <div class="lg:flex lg:flex-wrap g-0">
                                        <div class="lg:w-6/12 px-4 md:px-0">
                                            <div class="md:p-12 md:mx-6">
                                                <div class="text-center">
                                                    <img
                                                        class="mx-auto w-48"
                                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                                        alt="logo"
                                                    />
                                                    <h4 class="text-xl font-semibold mt-1 mb-12 pb-1">Welcome To My Task Zone</h4>
                                                </div>
                                                <form onSubmit={handleSubmit(handleSignUp)}>
                                                    <p class="mb-4">Please login to your account</p>
                                                    <div class="mb-4 text-lg">
                                                        <input
                                                            {...register("name", {
                                                                required: 'Name'
                                                            })}
                                                            placeholder="Inter Your Name"
                                                            className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                                                        />
                                                        {errors.name && <p className='text-danger '>{errors.name?.message}</p>}
                                                    </div>
                                                    <div class="mb-4 text-lg mx-w-32">
                                                        <input
                                                            {...register("photURL", {
                                                                required: 'Photo URL Required'
                                                            })}
                                                            type="file"
                                                            placeholder="Inter Your PhotoURL"
                                                            className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                                                        />
                                                        {errors.photURL && <p className='text-danger '>{errors.photURL?.message}</p>}
                                                    </div>
                                                    <div class="mb-4">
                                                        <input
                                                            {...register("email", {
                                                                required: 'email Address Required'
                                                            })}
                                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="email" name="email"
                                                            placeholder="Inter your email" />
                                                        {errors.email && <p className='text-danger'>{errors.email?.message}</p>}
                                                    </div>
                                                    <div class="mb-4">
                                                        <input
                                                            {...register("password", {
                                                                required: 'password Address Required'
                                                            })}
                                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="password" name="password"
                                                            placeholder="Inter your password" />
                                                        {errors.password && <p className='text-danger'>{errors.password?.message}</p>}
                                                    </div>
                                                    <div class="text-center pt-1 mb-12 pb-1">
                                                        <button
                                                            class="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                                                            type="submit"
                                                            data-mdb-ripple="true"
                                                            data-mdb-ripple-color="light"
                                                            style={{ background: "#ee7724" }}
                                                        >
                                                            Register
                                                        </button>
                                                        <a class="text-gray-500" href="#!">Forgot password?</a>
                                                        <div class="flex items-center justify-between mb-10">
                                                            <p class="mb-0 mr-2">All ready have an account?</p>
                                                            <div className=''>
                                                                <Link to='/login'>
                                                                    <button
                                                                        type="button"
                                                                        class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                                                        data-mdb-ripple="true"
                                                                        data-mdb-ripple-color="light"
                                                                    >
                                                                        Login
                                                                    </button>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>{loginError}</div>
                                                </form>

                                            </div>
                                        </div>
                                        <div
                                            class="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
                                            style={{ background: "#ee7724" }}
                                        >
                                            <div class="text-white px-4 py-6 md:p-12 md:mx-6">
                                                <h4 class="text-xl font-semibold mb-6">We are more than just a company</h4>
                                                <p class="text-sm">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                    consequat.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            </div>
        </div>
    );
};

export default SignUp;