import { CiUser } from "react-icons/ci";
import loginImage from "../assets/loginImage.png"
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";

const Login = () => {

    return (

        <section className='w-full bg-gray-100 flex flex-col-reverse md:flex-row justify-around items-center px-10 py-12'>
            <form className="p-8 max-w-xl w-full space-y-4">
                <h1 className="text-center mb-20 text-2xl md:text-4xl font-semibold  bg-gradient-to-r from-pink-600  to-purple-600 bg-clip-text text-transparent">Login to continue Learning</h1>
                {/*User name field */}
                <div className="flex">
                    <CiUser />
                    <input className="flex-1" type="text" placeholder="Enter your Name" name="userName" />
                </div>
                {/*Email field*/}
                <div className="flex">
                    <MdOutlineEmail />
                    <input className="flex-1" type="email" placeholder="Enter your Email" name="email" />
                </div>

                {/*password field*/}
                <div className="flex">
                    <RiLockPasswordLine />
                    <input className="flex-1" type="password" placeholder="Enter Your Password" name="password" />
                </div>



            </form>
            <div className="p-8">
                <img className="max-w-50 md:max-w-70 " src={loginImage} alt="photo" />

            </div>
        </section>


    );
};

export default Login;