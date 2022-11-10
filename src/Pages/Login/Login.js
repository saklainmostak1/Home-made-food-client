import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Shared/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import useTitle from '../../hooks/useTitle';
import { GoogleAuthProvider } from 'firebase/auth';


const Login = () => {
  const { logIn, providerLogin } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  useEffect( () =>{
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)
    },1000)
  },[])
  const navigate = useNavigate()
  const location = useLocation()
  useTitle('Login')
  const from = location.state?.from?.pathname || '/'
  const googleProvider = new GoogleAuthProvider()
  const handleLogin = event => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    logIn(email, password)
      .then(result => {
        const user = result.user
        console.log(user);
        form.reset('')
        navigate(from, { replace: true })
        toast.success('Successfully Login!');
      })
      .catch(error => console.error(error))
  }
  const handleGoogleSignIn = () => {
    return providerLogin(googleProvider)
      .then(result => {
        const user = result.user
        console.log(user);
        toast.success('Successfully Login!');
        navigate(from, { replace: true })
      })
      .catch(error => console.error(error))
  }

  return (
    <div>
      {
        loading ? 
        <button className="btn loading m-10">loading</button>

        :
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
              <button onClick={handleGoogleSignIn} className="btn btn-outline btn-info"><FaGoogle></FaGoogle> google Login</button>

            </form>
          </div>
        </div>
      </div>
      }
      </div>
     
  );
};

export default Login;