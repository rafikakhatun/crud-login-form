import { CiUser } from "react-icons/ci";
import loginImage from "../assets/loginImage.png"
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { FaEnvelope, FaFacebook, FaFacebookF, FaUser, } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {

    return (

        <section className='w-full h-auto bg-gray-100 flex flex-col-reverse md:flex-row justify-around items-center px-10 py-16'>
            <form className="p-8 max-w-xl w-full space-y-6">
                <h1 className="text-center mb-20 text-2xl md:text-4xl font-semibold  bg-gradient-to-r from-pink-600  to-purple-600 bg-clip-text text-transparent">Login to continue Learning</h1>
                {/*User name field */}
                <div className="flex items-center border border-gray-300 rounded-full shadow-md">
                    <div className="bg-gradient-to-b py-3.5 px-4 from-pink-600  to-purple-600  rounded-l-full flex items-center justify-center text-white">
                        <FaUser className="w-4 h-4" />
                    </div>
                    <input className="w-full py-2 px-6 outline-none rounded-r-full placeholder:text-gray-600" type="text" placeholder="Enter your Name" name="userName" />
                </div>
                {/*Email field*/}
                <div className="flex items-center border border-gray-300 rounded-full shadow-md">
                    <div className="bg-gradient-to-b py-3.5 px-4 from-pink-600  to-purple-600  rounded-l-full flex items-center justify-center text-white">

                        <MdOutlineEmail />
                    </div>
                    <input className="w-full py-2 px-6 outline-none rounded-r-full placeholder:text-gray-600" type="email" placeholder="Enter your Email" name="email" />
                </div>

                {/*password field*/}
                <div className="flex items-center border border-gray-300 rounded-full shadow-md">
                    <div className="bg-gradient-to-b py-3.5 px-4 from-pink-600  to-purple-600  rounded-l-full flex items-center justify-center text-white">

                        <RiLockPasswordLine />
                    </div>
                    <input className="w-full py-2 px-6 outline-none rounded-r-full placeholder:text-gray-600" type="password" placeholder="Enter Your Password" name="password" />
                </div>


                {/* forgot password field */}
                <div className="flex justify-end">
                    <span className="text-sm mb-4 mr-5 text-purple-600 cursor-pointer hover:underline">
                        Forgot Password?
                    </span>
                </div>

                {/*button field */}
                <button className="w-full px-4 py-2 bg-gradient-to-l from-purple-500 to-pink-600 rounded-full text-white font-semibold">Login</button>

                {/*Register*/}
                <div className="text-center">
                    <span className="tracking-wide text-gray-700">Don't Have An Accont? <Link to="/Register" className="font-semibold text-purple-600">Register</Link></span>
                </div>

                {/*login others account */}
                <div className="w-full flex items-center justify-center gap-3">
                    <span className="w-1/3 border-t border-gray-700" ></span>
                    <p className="text-gray-700 text-sm">Or, Login</p>
                    <span className="w-1/3 border-t border-gray-700"></span>

                </div>

                {/*google and facebook account field */}
                <div className="flex justify-center space-x-5 ">
                    <button className="flex justify-center gap-2 cursor-pointer w-1/2 px-4 py-3 rounded-full border border-gray-300 shadow-md "><FcGoogle className="text-2xl" />Google</button>
                    <button className="flex justify-center gap-2 cursor-pointer w-1/2 px-4 py-3 rounded-full border border-gray-300 shadow-md  "><FaFacebookF className="text-2xl text-blue-600" />Facebook</button>
                </div>




            </form>
            <div className="p-8 hidden md:flex">
                <img className="w-[600px] h-[700px] object-center object-fill " src={loginImage} alt="photo" />

            </div>
        </section>




    );
};

export default Login;