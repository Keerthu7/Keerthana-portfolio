import ProfileImg from '../Assests/keer.jpeg.jpg';
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
    return (
        <div className='px-5 py-20 bg-primary '>
            <section className='flex flex-col md:flex-row' >
                <img className=' rounded-3xl pl-10 pr-10   flex justify-end md:  ' src={ProfileImg} alt="Keerthana" />
                <div className='px-20' >
                    <h1 className='text-yellow-500 pt-40 font-bold text-4xl'>-I'M KEERTHANA</h1>
                    <h1 className='text-white pt-4 pl-0 font-bold text-4xl'> WEB DESIGNER</h1>
                    <p className='text-white pt-6 '>I'm a Enthusiastic web designer & front‑end developer focused oncrafting clean & user‑friendly experiences, I am passionate about
                        building excellent software that improves the lives of those around me.
                    </p>
                    <div className='flex pt-10'>
                        <a href='https://x.com/?lang=en-in' className='pr-5 text-white hover:text-yellow-500'><AiOutlineTwitter size={40} /></a>
                        <a href="https://www.facebook.com/" className='pr-5 text-white  hover:text-yellow-500'><AiOutlineFacebook size={40} /></a>
                        <a href="https://www.linkedin.com/in/keerthana-s004/" className='pr-5 text-white  hover:text-yellow-500'><AiOutlineLinkedin size={40} /></a>
                    </div>
                </div>
            </section>
        </div>
    )
}