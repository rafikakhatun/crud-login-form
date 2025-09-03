import { CiUser } from "react-icons/ci";
import loginImage from "../assets/loginImage.png"
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";

const Login = () => {

    return (

        <section className='w-full h-screen bg-gray-100 flex flex-col-reverse md:flex-row justify-between items-center px-10 py-12'>
            <from className="p-8">
                <h1 className="text-center">Login to continue Learning</h1>
                {/*User name field */}
                <div className="flex">
                    <CiUser />
                    <input className="flex-1" type="text" placeholder="Enter your Name" name="userName" />
                </div>
                {/*Email field*/}
                <div>
                    <MdOutlineEmail />
                    <input type="email" placeholder="Enter your Email" name="email" />
                </div>

                {/*password field*/}
                <div>
                    <RiLockPasswordLine />
                    <input type="password" placeholder="Enter Your Password" name="password" />
                </div>



            </from>
            <div className="p-8">
                <img className="max-w-50 md:max-w-70 " src={loginImage} alt="photo" />

            </div>
        </section>


    );
};

export default Login;