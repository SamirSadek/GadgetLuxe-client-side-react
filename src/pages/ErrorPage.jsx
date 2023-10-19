import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="w-2/3 mx-auto">
            <img className=" h-[600px] w-full" src="https://i.ibb.co/VjvZg1S/undraw-Outer-space-re-u9vd.png" alt="" />
            <p className="text-center text-4xl font-semibold text-red-500 p-2 bg-base-200 rounded-lg">Out of Space!! <Link to='/'><span className="text-green-500 underline">Go Back To Home</span></Link></p>
        </div>
    );
};

export default ErrorPage;