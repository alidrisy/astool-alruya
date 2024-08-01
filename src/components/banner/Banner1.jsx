import { useTranslation } from 'react-i18next';
import Truck from '../../assets/truk1.png'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


const Banner = () => {
    const { t } = useTranslation();
    
    return (
        <section className='section pt-[1px]'>
        <div className='relative'>
            <img className='w-full' src={Truck} alt="" />
            <div className='absolute  w-full h-full z-10 bg-black/60 top-0'></div>
            <div className={`absolute ${t("languages") === 'ُEnglish' ? "font-sans" : "font-oswald"} w-full h-full z-20 top-0 flex flex-col space-y-4 p-[120px]  items-center`}>
                <div className='flex relative flex-col space-y-2 font-semibold justify-center items-center'>
                    <h1 className={`text-white ${t("languages") === 'ُEnglish' ? "font-bold text-5xl" : "text-5xl"} z-30`} dir='auto'>
                        {t('banner1.title1')}
                    </h1>
                    <span className={`py-7  z-20 px-7 absolute ${t("languages") === 'ُEnglish' ? "-left-5 -top-3" : "-right-5 -top-5"}  border-[12px] border-amber-500`}></span>
                    <h1 className={`text-white ${t("languages") === 'ُEnglish' ? "font-bold text-4xl" : "text-5xl"} z-30`}  dir='auto'>
                    {t('banner1.title2')}
                    </h1>
                </div>
                <h2 className={`text-white relative z-30 font-[300] ${t("languages") === 'ُEnglish' ? "font-bold" : "font-semibold"} text-xl text-center max-w-[500px]`}  dir='auto'>
                {t('banner1.des')}
                </h2>
                <div className='pt-3'>
                    <button className={`bg-amber-500 hover:bg-amber-400 rounded-[2px] px-3 py-[4px] text-center  flex justify-center items-center space-x-1 ${t("languages") === 'ُEnglish' ? "float-start" : "float-end"}`}>
                    {t("languages") === 'ُEnglish' && <FaArrowLeft className='text-[11px]' />}
                        <p className='text-[12.5px] font-bold'>{t("banner1.button")}</p>
                    {t("languages") !== 'ُEnglish' &&<FaArrowRight className='text-[11px]' /> }
                    </button>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Banner;