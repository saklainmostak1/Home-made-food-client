import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Shared/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import useTitle from '../../hooks/useTitle';
import { GoogleAuthProvider } from 'firebase/auth';



const Register = () => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  const { createUser, upadateUserProfile, providerLogin } = useContext(AuthContext)
  useTitle('Register')
  const googleProvider = new GoogleAuthProvider()
  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const photoURL = form.photoURL.value
    const email = form.email.value
    const password = form.password.value
    console.log(name, photoURL, email, password)
    createUser(email, password)
      .then(result => {
        const user = result.user
        console.log(user)
        form.reset('')
        handleUpdateProfile(name, photoURL)
        toast.success('Successfully Register!');


      })
      .catch(error => {
        console.error(error)

      })
  }
  const handleUpdateProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL
    }


    upadateUserProfile(profile)
      .then(() => { })
      .catch(error => {
        console.error(error)
      })
  }
  const handleGoogleSignIn = () => {
    return providerLogin(googleProvider)
      .then(result => {
        const user = result.user
        console.log(user);
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
                <h1 className="text-5xl font-bold">Register now!</h1>
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Your Name</span>
                    </label>
                    <input type="text" name='name' placeholder="name" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name='photoURL' placeholder="Photo URL" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                    <label className="label">
                      <p className='text-center mt-5'>Already Have An Account - <Link className='text-orange-600 font-bold' to='/login'>Login</Link> </p>
                    </label>
                    <button className="btn btn-primary">Register</button>
                  </div>
                  <button onClick={handleGoogleSignIn} className="btn btn-outline btn-info"><FaGoogle></FaGoogle> google Register</button>
                </form>
              </div>
            </div>
          </div>
      }

    </div>
  );
};

export default Register;