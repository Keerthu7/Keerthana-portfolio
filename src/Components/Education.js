import { HiAcademicCap } from "react-icons/hi2";

export default function EDUCATION() {
    return (
        <section className="bg-primary" id="education">
            <h1 className='flex justify-center text-6xl text-white font-bold'>EDUCATION</h1>
            <p className="pt-9 flex pr-60 justify-center"> </p>
            <p className="pt-4 font-bold text-white text-xl flex justify-center pr">ENGINEERING DEGREE - SNS COLLEGE</p>
            <p className="pt-4 text-white text-xl flex justify-center pl-32"><HiAcademicCap size={80} className="text-yellow-500" />Where innovation meets excellence,<br />
                SNS paves the path for future technocrats.</p>

            <p className="pt-10 font-bold text-white text-xl flex justify-center pl-24">HSC/ SSLC - MOTHER'S MATRIC HR SEC SCHOOL</p>
            <p className="pt-4  text-white text-xl flex justify-center pl-32"><HiAcademicCap size={80} className="text-yellow-500" />Where childhood meets enjoyment,<br />
                school paves the path for future talents.</p>
            <p className="flex justify-center text-1xl text-white pt-10">------------------------------------</p>

        </section>
    )
}