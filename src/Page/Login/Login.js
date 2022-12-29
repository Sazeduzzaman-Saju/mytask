import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PuffLoader } from 'react-spinners';
import OthersLogin from '../../comps/OthersLogin';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { singInUser } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleLogIn = (data) => {
        setLoginError('')
        console.log(data)
        singInUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                reset('');
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err.message)
                setLoginError(err.message)
            })
    }


    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)

        }, 1000)
    }, [])
    return (
        <div className=''>
            <div>
                {loading ?
                    <div className='mx-w-full-xl mx-auto'>
                        <div className="grid grid-cols-1 place-items-center">
                            <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                                <PuffLoader color={'#000'} loading={loading} size={150} />
                            </div>
                        </div>
                    </div>
                    :
                    <div className='mb-20'>
                        <section className="h-full gradient-form  md:h-screen mx-auto">
                            <div className="container py-12 px-6 h-full">
                                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                                    <div className="xl:w-10/12">
                                        <div className="block bg-white shadow-lg rounded-lg">
                                            <div className="lg:flex lg:flex-wrap g-0">
                                                <div className="lg:w-6/12 px-4 md:px-0">
                                                    <div className="md:p-12 md:mx-6">
                                                        <div className="text-center">
                                                            <img
                                                                className="mx-auto w-48"
                                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                                                alt="logo"
                                                            />
                                                            <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">Welcome To My Task Zone</h4>
                                                        </div>
                                                        <form onSubmit={handleSubmit(handleLogIn)}>
                                                            <div className="mb-4 text-lg">
                                                                <input
                                                                    {...register("email", {
                                                                        required: 'Email Address Required'
                                                                    })}
                                                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="email" name="email"
                                                                    placeholder="Email" />
                                                                {errors.email && <p className='text-danger'>{errors.email?.message}</p>}
                                                            </div>

                                                            <div className="mb-4 text-lg">
                                                                <input
                                                                    {...register("password", {
                                                                        required: 'password Address Required'
                                                                    })}
                                                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="Password" name="password" placeholder="*********" />
                                                                {errors.password && <p className='text-danger'>{errors.password?.message}</p>}
                                                            </div>
                                                            <div className="mt-8 flex justify-center text-lg text-black">
                                                                <button type="submit" className="shadow-xl primary_btn">Login</button>
                                                            </div>
                                                            <div className='text-center pt-2'>
                                                                <span className="text-white-300">Or <Link to='/register'>Register</Link></span>
                                                            </div>
                                                            <OthersLogin></OthersLogin>
                                                            <p>{loginError.slice(10, 38)}</p>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div
                                                    className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
                                                    style={{ background: "#ee7724" }}
                                                >
                                                    <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                                                        <h4 className="text-xl font-semibold mb-6">We are more than just a company</h4>
                                                        <p className="text-sm">
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
                }
            </div >
        </div >
    );
};

export default Login;