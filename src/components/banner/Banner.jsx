import { useTranslation } from 'react-i18next';
import Truck from '../../assets/truk1.png'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from '../../variants';

const Banner = () => {
    const { t } = useTranslation();
    
    return (
        <div className='section'>
        <section className={`flex flex-col space-y-7 justify-between pt-10 px-6  ${t("languages") === 'ُEnglish' ? "flex-row-reverse" : "flex-row"} mx-auto`}>
            
           <div className={`flex ${t("languages") === 'ُEnglish' ? "flex-row-reverse font-bold" : "flex-row font-semibold"} justify-between items-start w-full`}>
                <h1 className='text-[120px] text-black font-bold pt-[22px]'>{t("banner.title1")}</h1>
                <div className={`max-w-[34%] ${t("languages") === 'ُEnglish' ? "text-left" : "text-right"}  space-y-4 pr-1`}>
                <p className={`text-[13px] ${t("languages") === 'ُEnglish' ? "font-bold" : ""}  font-[500] leading-[2.1]`} dir='auto'>{t("banner.side")}</p>
                <button className={`bg-amber-400 hover:bg-amber-300 rounded-[5px] px-3 py-[4px] text-center  flex justify-center items-center space-x-1 ${t("languages") === 'ُEnglish' ? "float-start" : "float-end"}`}>
                {t("languages") === 'ُEnglish' && <FaArrowLeft className='text-[11px]' />}
                    <p className='text-[12.5px] text-gray-900 font-bold'>{t("banner.button")}</p>
                {t("languages") !== 'ُEnglish' &&<FaArrowRight className='text-[11px]' /> }
                </button>
                </div>
           </div>
           <div className={`flex justify-between ${t("languages") === 'ُEnglish' ? "flex-row-reverse -space-x-3" : "flex-row"} w-full`}>
                <div className='max-w-[30%] space-y-5'>
                    <p className={`text-[13px] ${t("languages") === 'ُEnglish' ? "text-right font-bold" : "text-left"} font-[500] leading-[1.6]`} dir='auto'>{t("banner.side1")} </p>
                    <div className={`space-x-2 ${t("languages") === "ُEnglish" && "float-end"} `}>
                        <button className='border-2 p-2'>
                            <FaArrowLeft className='text-[11px]' /></button>
                        <button className='border-2 border-black bg-black p-2'><FaArrowRight className='text-[11px] text-white' /></button>
                    </div>
                </div>
                {t("languages") === "ُEnglish" ? <div><h1 className={`text-[90px] text-black pl-[130px]  font-bold leading-[1] text-left`}>
            الخدمات  &
                </h1> <h1 className={`text-[90px] text-black  font-bold leading-[1] pl-2 text-left`}>
                الوجستية
                </h1> </div>:<h1 className={`text-[115px]  text-black text-right font-bold pt-8`}>& Logistics</h1>}
           </div>
           
        </section>
        <img className='mt-10' src={Truck} alt="" />
        </div>
    )
}

export default Banner;