import QrImg from '../Assests/qr code.png';


export default function About() {
    return (
        <div className="bg-primary" id='about'>
            <p className="flex justify-center text-1xl text-white">------------------------------------</p>
            <section className='pt-10'>


                <h1 className="flex justify-center font-bold text-6xl text-white ">ABOUT <span className="text-yellow-500 pl-3">ME</span></h1>


                <div className="text-white  flex flex-col md:flex-row justify-center   text-xl pt-20">
                    <div >
                        <p className="flex justify-center" >
                            First Name : Keerthana <br />
                            Last Name : Subranmaniam <br />
                            Age : 19 Years <br />
                            Nationality : Indian <br />
                            Freelance : Available
                        </p>

                    </div>
                    <div>
                        <p className="flex justify-center pl-20  md:pl-5 pt-1">
                            Address : Coimbatore <br />
                            Phone : 9345966973 <br />
                            Email : keerthanasubbu5@gmail.com <br />
                            Languages : Tamil, English , Hindi <br />
                        </p>

                    </div>
                    <div>

                        <img className=' flex justify-center px-20 pt-5 md:pl-5' src={QrImg} alt="" />
                    </div>

                </div>

            </section>
            <p className="flex justify-center text-1xl text-white pt-10">------------------------------------</p>
        </div>
    )
}
