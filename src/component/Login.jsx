import { CiUser } from "react-icons/ci";
import loginImage from "../assets/loginImage.png"
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { FaEnvelope, FaUser } from "react-icons/fa";

const Login = () => {

    return (

        <section className='w-full h-screen bg-gray-100 flex flex-col-reverse md:flex-row justify-around items-center px-10 py-12'>
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
                




            </form>
            <div className="p-8 hidden md:flex">
                <img className="max-w-50 md:max-w-70 " src={loginImage} alt="photo" />

            </div>
        </section>


    );
};

export default Login;