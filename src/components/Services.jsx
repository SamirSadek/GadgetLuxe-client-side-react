import { FcShipped,FcOnlineSupport } from 'react-icons/fc';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { AiOutlineSafety } from 'react-icons/ai';
import { TbTruckReturn } from 'react-icons/tb';
const Services = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  my-10 p-10 gap-5'>
            <div className='flex justify-center items-center gap-5  bg-base-200 py-8 rounded'>
                <FcShipped className='text-4xl'/>
                <div>
                    <h2 className='font-bold'>Fast Shipping</h2>
                    <p>Courier Information</p>
                </div>
            </div>
            <div className='flex justify-center items-center gap-5 bg-base-200 py-8 rounded'>
                <RiSecurePaymentFill className='text-4xl'/>
                <div>
                    <h2 className='font-bold'>Online Payment</h2>
                    <p>Payment Methods</p>
                </div>
            </div>
            <div className='flex justify-center items-center gap-5 bg-base-200 py-8 rounded'>
                <FcOnlineSupport className='text-4xl'/>
                <div>
                    <h2 className='font-bold'>24/7 Support</h2>
                    <p>Unlimited Help Desk</p>
                </div>
            </div>
            <div className='flex justify-center items-center gap-5 bg-base-200 py-8 rounded'>
                <AiOutlineSafety className='text-4xl'/>
                <div>
                    <h2 className='font-bold'>100% Safe</h2>
                    <p>View Our Benefits</p>
                </div>
            </div>
            <div className='flex justify-center items-center gap-5 bg-base-200 py-8 rounded'>
                <TbTruckReturn className='text-4xl'/>
                <div>
                    <h2 className='font-bold'>Free Returns</h2>
                    <p>Track or off orders</p>
                </div>
            </div>
            
        </div>
    );
};

export default Services;