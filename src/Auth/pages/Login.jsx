import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
    const {googleSignIn,logIn} =useContext(AuthContext)
    const location =  useLocation()
    const navigate = useNavigate()
    const [error,setError] = useState('')
    const handleLogin =(e)=>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        logIn(email,password)
        .then(result => {
          toast("Log In successful!");
            console.log(result.user)
           
            setTimeout(() => {
              navigate(location?.state ? location.state : "/");
            }, 1500);
            
        })
        // eslint-disable-next-line no-unused-vars
        .catch(error => setError("Email and PassWord Doesn't Match"))
        
        

    }
    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(() =>{
          toast("Log In successful!");
            
          setTimeout(() => {
            navigate(location?.state ? location.state : "/");
          }, 1500);

        })
        .catch(error => {
            console.error(error.message)
        })
        
    }

  return (
    <div>
      <Navbar />
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img className="lg:block hidden" src="https://i.ibb.co/mB1djjz/undraw-secure-login-pdn4.png" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            
            <form onSubmit={handleLogin} className="card-body border border-black rounded">
                <div>
                <h2 className="text-center text-4xl font-semibold my-10">Please Login</h2>
                </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <p className="text-red-500">{error}</p>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <button onClick={handleGoogleSignIn} type="button" className="w-full py-3 px-4 inline-flex justify-center  border-black items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
              <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4"/>
                <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853"/>
                <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05"/>
                <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335"/>
              </svg>
              Sign in with Google
              
            </button> 
            <p className="text-center font-thin">Do not Have an Account?? <Link className="text-red-500 underline" to="/signup">Sign Up</Link></p>

            </form>

           
          </div>
        </div>
        <ToastContainer/>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
