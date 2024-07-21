import { FaStar } from 'react-icons/fa';
import ResImg from '../Assests/RESUME.jpeg.jpg';

export default function Skills() {
    return (
        <section className="bg-primary pt-10" id='skills'>
            <h1 className='flex justify-center text-6xl text-white font-bold'>MY SKIlLS</h1>
            <div className='flex flex-col md:flex-row justify-center pt-10  '>
                <h1 className='text-white font-bold text-xl flex justify-center'>JAVA =</h1>
                <p className='flex pl-3 justify-center'>  <FaStar size={40} className='text-yellow-500' /><FaStar size={40} className='text-yellow-500' /><FaStar size={40} className='text-yellow-500' /><FaStar size={40} className='text-yellow-500' /> </p>
                <h1 className=' pl-5 text-white font-bold text-xl flex justify-center'>REACT =</h1>
                <p className='flex pl-3 justify-center '>  <FaStar size={40} className='text-yellow-500' /><FaStar size={40} className='text-yellow-500' /><FaStar size={40} className='text-yellow-500' /> </p>

                <h1 className=' pl-5 text-white font-bold text-xl flex justify-center'>TAILWINDCSS =</h1>
                <p className='flex pl-3 justify-center'>  <FaStar size={40} className='text-yellow-500' /><FaStar size={40} className='text-yellow-500' /><FaStar size={40} className='text-yellow-500' /> </p>
            </div>
            <div><p className='pb-5 text-white flex justify-center pt-10 '>You can view my resume <a className='btn  text-black' href={ResImg}>Download</a></p></div>
            <p className="flex justify-center text-1xl text-white pt-10">------------------------------------</p>
        </section>
    )
}