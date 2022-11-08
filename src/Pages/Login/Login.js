import React, { useContext } from 'react';
import {  GoogleAuthProvider } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Shared/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';


const Login = () => {
    const {googleSingIn, logIn} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()

    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        logIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset('')
                toast.success('Successfully Login!');
            })
            .catch(error => {
                console.error(error)
                
            })
    }
    const handleGoogleLogIn = () => {
        return googleSingIn(googleProvider)
            .then(result => {
                const user = result.user
                toast.success('Successfully Login!');
                console.log(user)
                
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <Link className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
          <p className='text-center mt-5'>If You Don't Have An Account - <Link className='text-orange-600 font-bold' to='/register'>Register</Link> </p>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <button onClick={handleGoogleLogIn} className="btn btn-outline btn-info"><FaGoogle></FaGoogle> google Login</button>
     </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;